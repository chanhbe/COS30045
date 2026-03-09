/**
 * Step 7: Building the filters (Combined Tech & Size)
 */
const populateFilters = (data) => {
    // 1. Container cho các nút công nghệ (Đã có sẵn trong HTML phía trên chart)
    const techContainer = d3.select("#filters");
    techContainer.selectAll("*").remove();

    // 2. PHẦN THAY ĐỔI: Tạo container cho các nút Size bên dưới chart
    // Chúng ta sẽ tìm div bao ngoài (card) và append vào cuối cùng
    const mainCard = d3.select("#histogram-chart").node().parentNode;
    
    // Xóa container cũ nếu đã tồn tại để tránh lặp nút khi reload
    d3.select("#filters-size-bottom").remove();

    const sizeContainer = d3.select(mainCard)
        .append("div")
        .attr("id", "filters-size-bottom")
        .attr("class", "filter-container")
        .style("margin-top", "20px"); // Khoảng cách giữa chart và nút bên dưới

    // Danh sách các size theo yêu cầu
    const filters_size = [
        { id: "all", label: "All Sizes" },
        { id: "24", label: "24\"" },
        { id: "32", label: "32\"" },
        { id: "55", label: "55\"" },
        { id: "65", label: "65\"" },
        { id: "98", label: "98\"" }
    ];

    let currentTech = "all";
    let currentSize = "all";

    // 3. Render nút Technology (Phía trên chart)
    techContainer.selectAll("button")
        .data(filters_screen)
        .join("button")
        .attr("class", d => d.isActive ? "filter-btn active" : "filter-btn")
        .text(d => d.label)
        .on("click", function(event, d) {
            d3.selectAll("#filters .filter-btn").classed("active", false);
            d3.select(this).classed("active", true);
            currentTech = d.id;
            applyCombinedFilters();
        });

    // 4. Render nút Size (Phía dưới chart)
    sizeContainer.selectAll("button")
        .data(filters_size)
        .join("button")
        .attr("class", d => d.id === "all" ? "filter-btn active" : "filter-btn")
        .text(d => d.label)
        .on("click", function(event, d) {
            d3.selectAll("#filters-size-bottom .filter-btn").classed("active", false);
            d3.select(this).classed("active", true);
            currentSize = d.id;
            applyCombinedFilters();
        });

    function applyCombinedFilters() {
        let filteredData = data;

        if (currentTech !== "all") {
            filteredData = filteredData.filter(d => d.screenTech === currentTech);
        }

        if (currentSize !== "all") {
            filteredData = filteredData.filter(d => +d.screenSize === +currentSize);
        }

        updateHistogram(filteredData, currentTech);
    }

    function updateHistogram(updatedData, techId) {
        const updatedBins = binGenerator(updatedData);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(updatedBins, d => d.length)])
            .range([height, 0])
            .nice();

        d3.select(".y-axis")
            .transition()
            .duration(1000)
            .call(d3.axisLeft(yScale));

        const svg = d3.select("#histogram-chart svg g");
        
        svg.selectAll("rect")
            .data(updatedBins)
            .transition()
            .duration(1000)
            .ease(d3.easeCubicInOut)
            .attr("y", d => yScale(d.length))
            .attr("height", d => height - yScale(d.length))
            .attr("fill", techId === "OLED" ? "#d4af37" : barColor);
    }
};

// Hằng số cho Scatter Plot (innerChartS)
let innerChartS; 
let xScaleS = d3.scaleLinear();
let yScaleS = d3.scaleLinear();

// Màu sắc cho các loại màn hình (Hue-based for categories)
const colorScale = d3.scaleOrdinal()
    .domain(["LCD", "LED", "OLED"])
    .range(["#4e79a7", "#f28e2c", "#e15759"]); // Màu sắc phân biệt rõ ràng

// Hằng số cho Tooltip
const tooltipConfig = { width: 100, height: 40 };

/**
 * Step 3: Tooltip Functions
 */
const createTooltip = () => {
    // Tạo nhóm tooltip ẩn
    const tooltip = innerChartS.append("g")
        .attr("id", "scatterplot-tooltip")
        .style("opacity", 0);

    // Hình chữ nhật nền
    tooltip.append("rect")
        .attr("width", tooltipConfig.width)
        .attr("height", tooltipConfig.height)
        .attr("fill", "white")
        .attr("stroke", "#ccc")
        .attr("rx", 5); // Bo góc

    // Văn bản hiển thị
    tooltip.append("text")
        .attr("x", 10)
        .attr("y", 25)
        .style("font-size", "12px")
        .style("font-weight", "bold");
};

const handleMouseEvents = () => {
    innerChartS.selectAll("circle")
        .on("mouseenter", function(e, d) {
            const cx = d3.select(this).attr("cx");
            const cy = d3.select(this).attr("cy");

            const tooltip = d3.select("#scatterplot-tooltip");
            
            tooltip.select("text").text(`Size: ${d.screenSize}"`);
            
            tooltip.transition()
                .duration(200)
                .style("opacity", 1)
                .attr("transform", `translate(${+cx + 10}, ${+cy - 45})`);
        })
        .on("mouseleave", function() {
            d3.select("#scatterplot-tooltip")
                .transition()
                .duration(500)
                .style("opacity", 0);
        });
};