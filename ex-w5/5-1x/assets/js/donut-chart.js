d3.csv("assets/data/tvSizeCount.csv", d => ({
    Screensize_Category: d.Screensize_Category,
    Count: +d.Count
})).then(data => {
    drawDonutChart(data);
});
  
const drawDonutChart = data => {
    // 1. Dimensions
    const width = 1000;
    const height = 500;

    const radius = Math.min(width, height) / 2 - 40;

    const svg = d3.select("#donut-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("border", "1px solid black");

    const innerChart = svg.append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // 2. Color scale
    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.Screensize_Category))
        .range(d3.schemeSet2);

    // 3. Pie generator (calculates angles)
    const pie = d3.pie()
        .value(d => d.Count)
        .sort(null);

    // 4. Arc generator (turns angles into SVG path coordinates)
    const arcGenerator = d3.arc()
        .innerRadius(radius * 0.6) 
        .outerRadius(radius)
        .padAngle(0.02)            
        .cornerRadius(6);           

    // 5. Draw the slices
    innerChart.selectAll("path")
        .data(pie(data))
        .join("path")
        .attr("d", arcGenerator)
        .attr("fill", d => color(d.data.Screensize_Category))
        .attr("stroke", "white")
        .attr("stroke-width", 2);

    // 6. Slice Labels
    innerChart.selectAll(".donut-label")
        .data(pie(data))
        .join("text")
        .attr("class", "donut-label")
        .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#222")
        .text(d => `${d.data.Screensize_Category} (${d.data.Count})`);
};