# Generative AI (GenAI) Log & Declaration

**Unit:** COS30045 – Data Visualisation  
**Activity:** Exercise 6 (Exercises 6.1 – 6.4: Interactivity, Filters & Tooltips)  
**Student Name:** Le Tuan Huy  
**Student ID:** 105557145 / SWH02328  
**AI Tool Used:** Google Gemini (Antigravity AI Assistant)  
**Date:** October 2026  

---

## 1. Summary Statement

> "I declare that Generative AI was used as an assistive pair-programming and troubleshooting tool for Exercise 6 (Histogram, Filters, Scatterplot, and Tooltips). AI provided guidance on the modular project architecture, syntax for D3 v7 binning, event listeners, and transitions. All code implementations, data validations, CSS refinements, local server testing, and live visual behaviors were verified, tested, and understood by myself."

---

## 2. Activity Breakdown

### Exercise 6.1: Building the Histogram
- **What I Asked:**
  - Guide me on how to set up and complete Exercise 6.1 following the Dufour & Meeks (2024) inner chart pattern and course specification.
- **What the AI Provided:**
  - Recommended modular folder structure separating concerns (`index.html`, `base.css`, `visualisation.css`, `load-data.js`, `shared-constants.js`, `interactions.js`, `histogram.js`).
  - Code outline for CSV data loading with unary `+` type casting.
  - Setup for `d3.bin().value(d => d.energyConsumption)`, linear scales, bar generation using `.join("rect")`, and stroke color technique to create visible gaps between bars.
- **Student Verification & Refinements:**
  - Ensured correct dataset path pointing to `Ex6_TVdata_withStar.csv`.
  - Checked the browser console to verify 14 generated bin arrays and calculated extents (`minEng: 0, maxEng: 2800, binsMaxLength: 1387`).
  - Adjusted axis label positions for *"Frequency"* and *"Labeled Energy Consumption (kWh/year)"*.

---

### Exercise 6.2: Interactive Histogram Filters
- **What I Asked:**
  - Guide me on adding interactive filter buttons to the histogram to filter by TV screen technology (`All`, `LED`, `LCD`, `OLED`).
- **What the AI Provided:**
  - HTML structure with `<div id="filters_screen"></div>`.
  - Filter state management array `filters_screen` in `shared-constants.js`.
  - Filter button rendering using `.data().join("button")`, dynamic active class assignment using `.classed("active", ...)`, and conditional data filtering.
  - Bar height update animation using `d3.selectAll("#histogram rect").transition().duration(500).ease(d3.easeCubicInOut)`.
- **Student Verification & Refinements:**
  - Tested button toggling and confirmed the active orange styling matches the webpage design.
  - Verified that clicking each filter updates bar heights correctly without breaking existing axes.

---

### Exercise 6.3: Color-Coded Scatterplot with Legend
- **What I Asked:**
  - Guide me on implementing the scatterplot for Star Rating vs. Energy Consumption on the same page, keeping comments concise and clean.
- **What the AI Provided:**
  - Additional shared constants (`innerChartS`, `xScaleS`, `yScaleS`, `colorScale = d3.scaleOrdinal()`, tooltip dimensions).
  - Implementation of `drawScatterplot(data)` in `js/scatterplot.js` mapping points with `d3.schemeCategory10` and `opacity: 0.5`.
  - SVG color legend placed in the top right corner.
- **Student Verification & Refinements:**
  - Checked scale ranges and domains (`.nice()`) to ensure no points clip at graph boundaries.
  - Verified that both the histogram and scatterplot coexist and render responsively on the page.

---

### Exercise 6.4: Interactive Tooltips on Scatterplot
- **What I Asked:**
  - Guide me on adding tooltips to the scatterplot to display the screen size when hovering over data circles.
- **What the AI Provided:**
  - `createTooltip()` appending a hidden `<g class="tooltip">` card with rounded rectangle and centered text.
  - `handleMouseEvents()` binding `mouseenter` and `mouseleave` listeners to scatterplot circles.
  - Coordinate extraction (`cx`, `cy`) and dynamic tooltip translation.
- **Student Verification & Refinements:**
  - Formatted tooltip text with the inch symbol (`${d.screenSize}"`).
  - Tested hover transitions to ensure tooltips smoothly appear and disappear without flickering.

---


## 3. Human Oversight & Academic Integrity Statement

- All generated code was thoroughly reviewed, tested, and integrated step-by-step into the repository.
- I understand the role of every function, scale, accessor, and event listener used across the modular scripts.
- No AI tool was used to fabricate data or replace required conceptual learning. All work reflects my authentic understanding in preparation for Demonstration 2.
