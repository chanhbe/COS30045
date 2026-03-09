const createLineChart = () => {
    const container = d3.select("#line-chart");
    container.selectAll("*").remove();
    const w = 800, h = 400, margin = 60;
    const svg = container.append("svg").attr("viewBox", `0 0 ${w} ${h}`);

    // 1. Tạo Tooltip (ô hiện số) ẩn ban đầu
    const tooltip = d3.select("body").append("div")
        .style("position", "absolute")
        .style("background", "rgba(0,0,0,0.8)")
        .style("color", "#fff")
        .style("padding", "8px 12px")
        .style("border-radius", "4px")
        .style("font-size", "13px")
        .style("pointer-events", "none")
        .style("visibility", "hidden")
        .style("z-index", "1000");

    d3.csv("data/Ex5_ARE_Spot_Prices.csv").then(data => {
        const val = "Average Price (notTas-Snowy)";
        const xScale = d3.scaleLinear().domain(d3.extent(data, d => +d.Year)).range([margin, w - margin]);
        const yScale = d3.scaleLinear().domain([0, d3.max(data, d => +d[val])]).range([h - margin, margin]);

        // Trục
        svg.append("g")
            .attr("transform", `translate(0,${h - margin})`)
            .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));
        
        svg.append("g")
            .attr("transform", `translate(${margin},0)`)
            .call(d3.axisLeft(yScale));

        // Đường kẻ
        const line = d3.line()
            .x(d => xScale(+d.Year))
            .y(d => yScale(+d[val]))
            .curve(d3.curveMonotoneX);
        
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#e63946")
            .attr("stroke-width", 3)
            .attr("d", line);

        // 2. Nâng cấp các điểm tròn nút dữ liệu với sự kiện di chuột
        svg.selectAll("circle")
            .data(data)
            .join("circle")
            .attr("cx", d => xScale(+d.Year))
            .attr("cy", d => yScale(+d[val]))
            .attr("r", 5)
            .attr("fill", "#e63946")
            .style("cursor", "pointer")
            .on("mouseover", function(event, d) {
                // Phóng to điểm tròn khi di chuột vào
                d3.select(this).transition().duration(200).attr("r", 8);
                
                // Hiện tooltip và nội dung
                tooltip.style("visibility", "visible")
                       .html(`<strong>Year:</strong> ${d.Year}<br><strong>Price:</strong> $${(+d[val]).toFixed(2)}`);
            })
            .on("mousemove", function(event) {
                // Di chuyển tooltip theo con trỏ chuột
                tooltip.style("top", (event.pageY - 40) + "px")
                       .style("left", (event.pageX + 15) + "px");
            })
            .on("mouseout", function() {
                // Thu nhỏ lại điểm tròn và ẩn tooltip
                d3.select(this).transition().duration(200).attr("r", 5);
                tooltip.style("visibility", "hidden");
            });
    });
};