// ===============================
// Load CSV Data
// ===============================

d3.csv("data/data.csv", d => {

    return {
        category: d["ScreenSize_Category"],
        count: +d["TV Screensize"]
    };

}).then(data => {

    console.log(data);

    // Sort descending
    data.sort((a, b) => b.count - a.count);

    createBarChart(data);

});


// ===============================
// Create Beautiful Bar Chart
// ===============================

const createBarChart = (data) => {

    const width = 900;
    const height = 500;

    const margin = {
        top: 60,
        right: 30,
        bottom: 100,
        left: 80
    };

    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    // =========================
    // Gradient
    // =========================

    const defs = svg.append("defs");

    const gradient = defs.append("linearGradient")
        .attr("id", "bar-gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");

    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#f5a623");

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#4b4128");


    // =========================
    // Scales
    // =========================

    const x = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([margin.left, width - margin.right])
        .padding(0.25);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.count)])
        .nice()
        .range([height - margin.bottom, margin.top]);


    // =========================
    // Grid Lines
    // =========================

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(
            d3.axisLeft(y)
                .tickSize(-(width - margin.left - margin.right))
                .tickFormat("")
        )
        .attr("stroke-opacity", 0.1);


    // =========================
    // Tooltip
    // =========================

    const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background", "white")
        .style("padding", "8px 12px")
        .style("border-radius", "6px")
        .style("box-shadow", "0 4px 10px rgba(0,0,0,0.15)")
        .style("pointer-events", "none")
        .style("opacity", 0);


    // =========================
    // Bars with animation
    // =========================

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => x(d.category))
        .attr("width", x.bandwidth())
        .attr("y", height - margin.bottom)
        .attr("height", 0)
        .attr("fill", "url(#bar-gradient)")
        .on("mouseover", function (event, d) {

            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", 0.7);

            tooltip
                .style("opacity", 1)
                .html(`<strong>${d.category}</strong><br>${d.count} TVs`);
        })
        .on("mousemove", function (event) {

            tooltip
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px");
        })
        .on("mouseout", function () {

            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", 1);

            tooltip.style("opacity", 0);
        })
        .transition()
        .duration(900)
        .attr("y", d => y(d.count))
        .attr("height", d => height - margin.bottom - y(d.count));


    // =========================
    // X Axis
    // =========================

    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-35)")
        .style("text-anchor", "end");


    // =========================
    // Y Axis
    // =========================

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));


    // =========================
    // Title
    // =========================

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .text("TV Screen Size Distribution in Australia");


    // =========================
    // Axis Labels
    // =========================

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height - 30)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Screen Size Category");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Number of TVs");

};

/*................................................................................. */

d3.csv("data/data.csv", d => {
    return {
        category: d["ScreenSize_Category"],
        count: +d["TV Screensize"]
    };
}).then(data => {

    console.log(data);

    createBarChart45(data); // gọi exercise 4.5

});
const createBarChart45 = data => {

    const width = 600;
    const height = 400;

    const svg = d3.select(".chart-ex45")
        .append("svg")
        .attr("width", width)
        .attr("height", height);


    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 50)
        .attr("y", (d, i) => i * 35)
        .attr("width", d => d.count)   // width from data
        .attr("height", 25)
        .attr("fill", "#4ecdc4");

};

/*................................................................................. */

d3.csv("data/data.csv", d => {
    return {
        category: d["ScreenSize_Category"],
        count: +d["TV Screensize"]
    };
}).then(data => {

    createBarChart46(data);

});

const createBarChart46 = data => {

    const width = 500;
    const height = 400;
    const margin = 50;

    const svg = d3.select(".chart-ex46")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("border", "1px solid black");


    // ======================
    // SCALE LINEAR (X)
    // ======================

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.count)])
        .range([0, width - margin * 2]);


    // ======================
    // SCALE BAND (Y)
    // ======================

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([margin, height - margin])
        .padding(0.2);


    // ======================
    // DRAW BARS
    // ======================

    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", margin)
        .attr("y", d => yScale(d.category))
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "#60a5fa");

};