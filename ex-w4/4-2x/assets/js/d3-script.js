// 4.2
// d3.select("h1")
//     .style("color", "green");

// d3.select(".ex4-2-step3")
//     .append("p")
//     .text("Purchasing a low energy consumption TV will help with your energy bills!");

// d3.select("svg")
//     .append("rect")
//     .attr("x", 50)
//     .attr("y", 50)
//     .attr("width", 100)
//     .attr("height", 30)
//     .style("fill", "green");

// 4.3
const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 500 500")
    .style("border", "1px solid black");

// svg
//     .append("rect")
//     .attr("x", 10)
//     .attr("y", 10)
//     .attr("width", 414)
//     .attr("height", 16)
//     .attr("fill", "blue");

// 4.4
d3.csv("assets/data/tvBrandCount.csv", d => {
    // Row conversion: convert string to number using '+'
    return {
        brand: d.brand,
        count: +d.count                                                                            
    };                                                                                             
}).then(data => {
    // 1. Log the full dataset
    console.log("Loaded Data Array:", data);

    // 2. Explore statistics
    console.log("Total Brands (length):", data.length);                                            
    console.log("Max Count:", d3.max(data, d => d.count));                                         
    console.log("Min Count:", d3.min(data, d => d.count));                                         
    console.log("Extent [min, max]:", d3.extent(data, d => d.count));

    // 3. Sort descending (highest count first)
    data.sort((a, b) => b.count - a.count);
    console.log("Sorted Data (descending):", data);

    // 4. Pass the cleaned data to draw the chart
    drawBarChart(data);
});

// 4.5
// function drawBarChart(data) {
//     const barHeight = 20;
//     const barSpacing = 5;

//     svg
//         .selectAll("rect")
//         .data(data)
//         .join("rect")
//         .attr("class", d => `bar bar-${d.count}`)
//         .attr("x", 0)
//         .attr("y", (d, i) => i * (barHeight + barSpacing))
//         .attr("width", d => d.count)
//         .attr("height", barHeight)
//         .attr("fill", "blue");
// }

// 4.6
// const drawBarChart = data => {
//     // 1. Horizontal Linear Scale for TV counts (X-axis)
//     const xScale = d3.scaleLinear()
//         .domain([0, 1100])
//         .range([0, 500]);

//     // 2. Vertical Band Scale for Brand names (Y-axis)
//     const yScale = d3.scaleBand()
//         .domain(data.map(d => d.brand))
//         .range([0, 500])
//         .padding(0.1);

//     // 3. Draw the bars using the scales
//     svg
//         .selectAll("rect")
//         .data(data)
//         .join("rect")
//         .attr("x", 0)
//         .attr("y", d => yScale(d.brand))
//         .attr("width", d => xScale(d.count))
//         .attr("height", yScale.bandwidth())
//         .attr("fill", "blue");
// };

// 4.7
const drawBarChart = data => {
    // 1. Scales
    const xScale = d3.scaleLinear()                                                                
        .domain([0, 1100])                                                                         
        .range([0, 350]);                                      

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.brand))
        .range([0, 500])
        .padding(0.1);

    // 2. Group container (<g>) for each bar + its labels                                          
    const barAndLabel = svg
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

    // 3. The Blue Bar
    barAndLabel
        .append("rect")
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "blue")
        .attr("x", 100)
        .attr("y", 0);

    // 4. Brand Name Text
    barAndLabel
        .append("text")
        .text(d => d.brand)
        .attr("x", 90)
        .attr("y", 14)
        .attr("text-anchor", "end")
        .style("font-size", "12px");

    // 5. Value Number Text
    barAndLabel
        .append("text")
        .text(d => d.count)
        .attr("x", d => 100 + xScale(d.count) + 4)
        .attr("y", 14)
        .style("font-size", "12px");
};