// Biến toàn cục lưu trữ dữ liệu để dùng cho việc lọc
let tvData = [];

/**
 * Step 4: Load the data
 */
const initHistogram = () => {
    console.log("Đang bắt đầu tải dữ liệu CSV...");
    
    d3.csv("data/Ex6_TVdata.csv").then(data => {
        // Chuyển đổi dữ liệu chuỗi sang số
        tvData = data.map(d => ({
            ...d,
            energyConsumption: +d.energyConsumption
        }));

        console.log("Dữ liệu đã tải thành công:", tvData.length, "dòng.");
        
        // Vẽ biểu đồ lần đầu
        drawHistogram(tvData);
        
        // Khởi tạo bộ lọc (Hàm này nằm trong interactions.js)
        if (typeof populateFilters === "function") {
            populateFilters(tvData);
        }
    }).catch(error => {
        console.error("Lỗi khi tải file dữ liệu CSV:", error);
    });
};

/**
 * Step 6: Build our histogram
 */
const drawHistogram = (data) => {
    const container = d3.select("#histogram-chart");
    container.selectAll("*").remove(); // Xóa cũ vẽ mới

    // 6.1 Set up the chart area
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // 6.2 & 6.3 Tạo bins và Scales
    const bins = binGenerator(data);

    const xScale = d3.scaleLinear()
        .domain([bins[0].x0, bins[bins.length - 1].x1])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length)])
        .range([height, 0])
        .nice();

    // 6.4 Draw the bars
    svg.selectAll("rect")
        .data(bins)
        .join("rect")
        .attr("x", d => xScale(d.x0) + 1)
        .attr("y", d => yScale(d.length))
        .attr("width", d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 1))
        .attr("height", d => height - yScale(d.length))
        .attr("fill", barColor)
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.5);

    // 6.5 Bottom axis (X)
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .append("text")
        .attr("x", width / 2)
        .attr("y", 40)
        .attr("fill", "#4b4128")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text("Energy Consumption (kWh/year)");

    // 6.6 Left axis (Y)
    svg.append("g")
        .call(d3.axisLeft(yScale))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -45)
        .attr("x", -height / 2)
        .attr("fill", "#4b4128")
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text("Frequency (Number of TVs)");
};

