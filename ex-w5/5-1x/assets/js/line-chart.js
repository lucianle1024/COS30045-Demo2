d3.csv("assets/data/ARE_Spot_Prices.csv", d => ({
    year: +d.Year,
    averagePrice: +d["Average Price (notTas-Snowy)"]
})).then(data => {
    console.log("Spot Prices Data:", data);
    drawLineChart(data);
});

const drawLineChart = data => {
    // 1. Dimensions (Same as 5.1 so charts align nicely)
    const margin = { top: 40, right: 170, bottom: 25, left: 60 };
    const width = 1000;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // 2. SVG Container                                                                            
    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("border", "1px solid black");

    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // 3. Scales
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.averagePrice)])
        .range([innerHeight, 0]);

    // 4. Axes
    const bottomAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format("d"));
    const leftAxis = d3.axisLeft(yScale);

    innerChart.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);

    innerChart.append("g")
        .call(leftAxis);

    // Y-axis label
    innerChart.append("text")
        .text("Average Price ($ per mWh)")
        .attr("x", -margin.left + 10)
        .attr("y", -10)
        .attr("text-anchor", "start");

    // 5. Scatter plot dots
    innerChart.selectAll(".dot")
        .data(data)
        .join("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.year))
        .attr("cy", d => yScale(d.averagePrice))
        .attr("r", 4)
        .attr("fill", "#2b7a78");

    // 6. Line Generator function
    const lineGenerator = d3.line()
        .x(d => xScale(d.year)) 
        .y(d => yScale(d.averagePrice));

    // 7. Append the path
    innerChart.append("path")
        .attr("d", lineGenerator(data))
        .attr("fill", "none")
        .attr("stroke", "#17252a")
        .attr("stroke-width", 2);
};