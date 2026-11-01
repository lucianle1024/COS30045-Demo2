// Load data and draw visualizations
d3.csv("data/Ex6_TVdata_withStar.csv", d => ({
    brand: d.brand,
    model: d.model,
    screenSize: +d.screenSize,
    screenTech: d.screenTech,
    energyConsumption: +d.energyConsumption,
    star: +d.star
})).then(data => {
    console.log("Loaded data:", data);

    // Draw charts
    drawHistogram(data);
    populateFilters(data);
    drawScatterplot(data);

    // Tooltips
    createTooltip();
    handleMouseEvents();
}).catch(error => {
    console.error("Error loading CSV file:", error);
});
