const createDonutChart = () => {
    const container = d3.select("#donut-chart");
    container.selectAll("*").remove();

    // 1. Định nghĩa kích thước và khoảng trống để không bị mất chữ
    const w = 450, h = 400; 
    const radius = Math.min(w, h) / 2 - 60; // Thu nhỏ bán kính lại (trước là 150, giờ còn ~140-160 tùy w)

    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${w} ${h}`)
        .append("g")
        .attr("transform", `translate(${w/2 - 40},${h/2})`); // Dịch sang trái một chút để nhường chỗ cho Legend

    // 2. Tạo Tooltip ẩn
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

    d3.csv("data/Ex5_TV_energy_Allsizes_byScreenType.csv").then(data => {
        const valCol = "Mean(Labelled energy consumption (kWh/year))";
        
        const pie = d3.pie().sort(null).value(d => +d[valCol]);
        const arc = d3.arc().innerRadius(radius * 0.5).outerRadius(radius * 0.9);
        const arcHover = d3.arc().innerRadius(radius * 0.5).outerRadius(radius * 1.0);
        
        const color = d3.scaleOrdinal(["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"]);

        // 3. Vẽ các miếng bánh
        svg.selectAll("path")
            .data(pie(data))
            .join("path")
            .attr("d", arc)
            .attr("fill", (d, i) => color(i))
            .style("stroke", "white")
            .style("stroke-width", "2px")
            .style("cursor", "pointer")
            .on("mouseover", function(event, d) {
                d3.select(this).transition().duration(200).attr("d", arcHover);
                tooltip.style("visibility", "visible")
                       .html(`<strong>${d.data.Screen_Tech}</strong>: ${Math.round(d.data[valCol])} kWh/year`);
            })
            .on("mousemove", (event) => {
                tooltip.style("top", (event.pageY - 10) + "px")
                       .style("left", (event.pageX + 10) + "px");
            })
            .on("mouseout", function() {
                d3.select(this).transition().duration(200).attr("d", arc);
                tooltip.style("visibility", "hidden");
            });

        // 4. Vẽ Chú thích (Legend) - Để chữ không bị đè lên chart
        const legend = svg.append("g")
            .attr("transform", `translate(${radius + 20}, ${-radius/2})`);

        data.forEach((d, i) => {
            const legendRow = legend.append("g")
                .attr("transform", `translate(0, ${i * 25})`);

            legendRow.append("circle")
                .attr("r", 6)
                .attr("fill", color(i));

            legendRow.append("text")
                .attr("x", 15)
                .attr("y", 5)
                .attr("text-anchor", "start")
                .style("font-size", "14px")
                .style("font-weight", "600")
                .text(d.Screen_Tech);
        });
    });
};