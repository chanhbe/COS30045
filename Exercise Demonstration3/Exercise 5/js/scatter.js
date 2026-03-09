const createScatterPlot = () => {
    const container = d3.select("#scatter-plot");
    container.selectAll("*").remove();
    const w = 600, h = 400, margin = 60;
    const svg = container.append("svg").attr("viewBox", `0 0 ${w} ${h}`);

    // Tooltip
    const tooltip = d3.select("body").append("div")
        .style("position", "absolute")
        .style("background", "rgba(0,0,0,0.7)")
        .style("color", "#fff")
        .style("padding", "5px 10px")
        .style("border-radius", "4px")
        .style("font-size", "12px")
        .style("visibility", "hidden");

    d3.csv("data/Ex5_TV_energy.csv").then(data => {
        const xScale = d3.scaleLinear().domain([0, d3.max(data, d => +d.star2)]).range([margin, w - margin]);
        const yScale = d3.scaleLinear().domain([0, d3.max(data, d => +d.energy_consumpt)]).range([h - margin, margin]);

        // Vẽ trục
        svg.append("g").attr("transform", `translate(0,${h - margin})`).call(d3.axisBottom(xScale).ticks(10)).style("color", "#777");
        svg.append("g").attr("transform", `translate(${margin},0)`).call(d3.axisLeft(yScale)).style("color", "#777");

        svg.selectAll("circle")
            .data(data)
            .join("circle")
            .attr("cx", d => xScale(+d.star2))
            .attr("cy", d => yScale(+d.energy_consumpt))
            .attr("r", 5)
            .attr("fill", "#2a9d8f")
            .style("opacity", 0.6)
            .on("mouseover", (event, d) => {
                d3.select(event.currentTarget).attr("r", 8).attr("fill", "#e76f51").style("opacity", 1);
                tooltip.style("visibility", "visible").html(`Star: ${d.star2}<br>Energy: ${d.energy_consumpt} kWh`);
            })
            .on("mousemove", (event) => tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"))
            .on("mouseout", (event) => {
                d3.select(event.currentTarget).attr("r", 5).attr("fill", "#2a9d8f").style("opacity", 0.6);
                tooltip.style("visibility", "hidden");
            });
    });
};