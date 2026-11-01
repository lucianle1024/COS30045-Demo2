// Dimensions and margins
const margin = { top: 40, right: 30, bottom: 50, left: 70 };
const width = 800;
const height = 400;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Scatterplot inner chart container and tooltip size
let innerChartS;
const tooltipWidth = 65;
const tooltipHeight = 32;

// Global colors
const barColor = "#606464";
const bodyBackgroundColor = "#fffaf0";

// Histogram scales and bin generator
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();
const binGenerator = d3.bin()
    .value(d => d.energyConsumption);

// Scatterplot scales and categorical color scale
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();
const colorScale = d3.scaleOrdinal();

// Screen type filter options
const filters_screen = [
    { id: "all", label: "All", isActive: true },
    { id: "LED", label: "LED", isActive: false },
    { id: "LCD", label: "LCD", isActive: false },
    { id: "OLED", label: "OLED", isActive: false }
];
