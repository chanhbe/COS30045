const createBarChart = () => {
    const container = d3.select("#bar-chart");
    container.selectAll("*").remove();
    const w = 500, h = 300, margin = {top: 20, right: 30, bottom: 40, left: 100};
    const svg = container.append("svg").attr("viewBox", `0 0 ${w} ${h}`);

    d3.csv("data/Ex5_TV_energy_55inchtv_byScreenType.csv").then(data => {
        const valueCol = "Mean(Labelled energy consumption (kWh/year))";
        const xScale = d3.scaleLinear().domain([0, d3.max(data, d => +d[valueCol])]).range([margin.left, w - margin.right]);
        const yScale = d3.scaleBand().domain(data.map(d => d.Screen_Tech)).range([margin.top, h - margin.bottom]).padding(0.3);

        svg.append("g").attr("transform", `translate(0,${h - margin.bottom})`).call(d3.axisBottom(xScale).ticks(5));
        svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(yScale));

        const bars = svg.selectAll("rect").data(data).join("rect")
            .attr("x", margin.left)
            .attr("y", d => yScale(d.Screen_Tech))
            .attr("height", yScale.bandwidth())
            .attr("width", d => xScale(+d[valueCol]) - margin.left)
            .attr("fill", "#457b9d")
            .attr("rx", 4); // Bo góc thanh bar

        // Thêm con số trên thanh
        svg.selectAll(".label").data(data).join("text")
            .attr("x", d => xScale(+d[valueCol]) + 5)
            .attr("y", d => yScale(d.Screen_Tech) + yScale.bandwidth()/2 + 5)
            .text(d => Math.round(+d[valueCol]))
            .style("font-size", "12px").style("fill", "#333");
    });
};