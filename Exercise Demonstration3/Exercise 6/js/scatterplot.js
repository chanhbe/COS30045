/**
 * Step 2: Draw scatterplot - Enhanced Version
 */
const drawScatterplot = (data) => {
    // 1. Thiết lập lại Chart Area
    const container = d3.select("#scatterplot-chart");
    container.selectAll("*").remove();

    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    innerChartS = svg;

    // 2. Thiết lập Scales với Padding để các điểm không bị dính vào trục
    xScaleS = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.star) * 1.05]) // Thêm 5% khoảng trống bên phải
        .range([0, width])
        .nice();

    yScaleS = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.energyConsumption) * 1.05]) // Thêm 5% khoảng trống phía trên
        .range([height, 0])
        .nice();

    // Màu sắc theo chuẩn Hue cho danh mục (Categories)
    const colorScale = d3.scaleOrdinal()
        .domain(["LCD", "LED", "OLED"])
        .range(["#4e79a7", "#f28e2c", "#e15759"]); 

    // 3. Vẽ Trục (Axes) trước để các điểm nằm đè lên trên trục cho đẹp
    // Trục X
    const xAxis = d3.axisBottom(xScaleS).ticks(8);
    svg.append("g")
        .attr("class", "x-axisS")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis);

    // Nhãn trục X
    svg.append("text")
        .attr("x", width)
        .attr("y", height + 40)
        .attr("text-anchor", "end")
        .style("font-size", "14px")
        .style("fill", "#666")
        .text("Star Rating");

    // Trục Y
    const yAxis = d3.axisLeft(yScaleS).ticks(10);
    svg.append("g")
        .attr("class", "y-axisS")
        .call(yAxis);

    // Nhãn trục Y
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 0)
        .attr("y", -45)
        .attr("text-anchor", "end")
        .style("font-size", "14px")
        .style("fill", "#666")
        .text("Energy Consumption (kWh/year)");

    // 4. Vẽ các điểm dữ liệu (Circles)
    innerChartS.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScaleS(+d.star))
        .attr("cy", d => yScaleS(+d.energyConsumption))
        .attr("r", 5) // Kích thước điểm vừa phải
        .attr("fill", d => colorScale(d.screenTech))
        .attr("opacity", 0.6)
        .attr("stroke", "#fff") // Thêm viền trắng mỏng để tách các điểm chồng nhau
        .attr("stroke-width", 0.5);

    // 5. Thêm Chú thích (Legend) ở góc trên bên phải
    const legend = svg.append("g")
        .attr("transform", `translate(${width - 10}, 10)`);

    colorScale.domain().forEach((tech, i) => {
        const legendRow = legend.append("g")
            .attr("transform", `translate(0, ${i * 20})`);

        legendRow.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", -15) // Căn lề phải
            .attr("fill", colorScale(tech));

        legendRow.append("text")
            .attr("x", -20)
            .attr("y", 12)
            .attr("text-anchor", "end")
            .style("font-size", "12px")
            .text(tech);
    });

    // 6. Kích hoạt Tooltip (Phần này gọi từ interactions.js)
    if (typeof createTooltip === "function") createTooltip();
    if (typeof handleMouseEvents === "function") handleMouseEvents();
};