# Generative AI (GenAI) Log & Declaration

**Unit:** COS30045 – Data Visualisation  
**Activity:** Exercise 5 (Exercises 5.1 – 5.3: Common Chart Types – Multi-chart Webpage)  
**Student Name:** Le Tuan Huy  
**Student ID:** 105557145 / SWH02328  
**AI Tool Used:** Google Gemini (Antigravity AI Assistant)  
**Date:** October 2026  

---

## 1. Summary Statement

> "I declare that the primary codebase for Exercise 5 was constructed by myself using the reference implementations and guidelines provided in the official Canvas lab sheets. Generative AI was used strictly as an assistive tutor and verification partner—specifically to break down the lab workflow, explain underlying D3 concepts (such as the margin convention, continuous scales, and arc generators), clarify KNIME data pipeline steps, and verify that my implementations matched all handout requirements."

---

## 2. Activity Breakdown

### Exercise 5.1: Vertical Bar Chart with Scaled Axes
- **Primary Source:** Canvas modules exercise 5 page.
- **Role of AI:**
  - Broke down the lab tutorial into bite-sized milestones (margins -> scales -> axes -> bars -> value labels).
  - Clarified why SVG coordinates require an inverted linear scale range `[innerHeight, 0]`.
  - Reviewed and verified my written code against the lab images, confirming that hardcoded fill attributes could be moved to `style.css` for clean styling.
- **My Implementation:**
  - Wrote and assembled the SVG container, margins, scales, axes, and rect elements following the handout.
  - Implemented the Page 10 customisation challenge by adding rounded value labels (`335 kWh`, etc.) above the bars.

---

### Exercise 5.2: Scatter Plot & Line Chart
- **Primary Source:** Canvas modules exercise 5 page and `ARE_Spot_Prices.csv`.
- **Role of AI:**
  - Explained the use of `d3.scaleLinear()` for continuous year data and the `.tickFormat(d3.format("d"))` method to prevent comma-formatted years.
  - Reminded me to use bracket notation `d["Average Price (notTas-Snowy)"]` for the spaced CSV column header.
  - Verified my line generator code (`d3.line()`) and confirmed proper alignment under the bar chart.
- **My Implementation:**
  - Added the chart container to `index.html` and wrote `line-chart.js`.
  - Implemented both the scatter plot data points (`circle`) and the connected trendline (`path`).

---

### Exercise 5.3: Donut Chart
- **Primary Source:** Canvas modules exercise 5 page.
- **Role of AI:**
  - Explained the difference between Cartesian charts and radial charts (centering at `width/2, height/2` rather than top-left margins).
  - Clarified how `d3.pie()` calculates angles and how `arcGenerator.centroid(d)` calculates coordinates for text positioning.
  - Verified that my arc configuration (`innerRadius`, `outerRadius`, `padAngle`, `cornerRadius`) followed course specifications.
- **My Implementation:**
  - Linked `donut-chart.js` into `index.html` and wrote the D3 logic to render the donut slices with category and count labels.

---

## 3. Human Oversight & Academic Integrity Statement

- The actual implementation was completed by following the official lab handouts step-by-step.
- AI was **not** used to generate solutions from scratch or bypass coursework, but as an interactive tutor to verify correctness, explain mechanisms, and assist with focus.
- I understand and can explain all code in this submission, including margin conventions, scales, axis generators, line generators, and arc centroids.
