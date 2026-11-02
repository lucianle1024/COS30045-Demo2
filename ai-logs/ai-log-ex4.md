# Generative AI (GenAI) Log & Declaration

**Unit:** COS30045 – Data Visualisation  
**Activity:** Exercise 4 (Exercises 4.1 – 4.7: Introduction to D3.js and Building a Bar Chart)  
**Student Name:** Le Tuan Huy  
**Student ID:** 105557145 / SWH02328  
**AI Tools Used:** Claude (Anthropic), Google Gemini (Antigravity AI Assistant)  
**Date:** October 2026  

---

## 1. Summary Statement

> "I declare that the code and materials for Exercise 4 were constructed by myself following the official Swinburne lab guidelines, Canvas modules, and the Dufour & Meeks (2024) course text. Generative AI was utilized strictly as an interactive tutor and assistive pair-programming partner specifically for initial SVG shape syntax exploration (4.1), understanding D3 library path linking and DOM manipulation (4.2), structuring the responsive SVG viewBox (4.3), resolving KNIME node execution and CSV export settings (4.4), breaking down D3 data-binding mechanics (4.5), applying linear and band scales (4.6), and formatting SVG grouped element labels (4.7)."

---

## 2. Activity Breakdown

### Exercise 4.1: Draw SVGs
- **Primary Source:** Canvas modules exercise 4 page and reference house illustration.
- **Role of AI:**
  - Provided baseline SVG coordinate examples for geometric primitives (`rect`, `circle`, `polygon`, `line`, `path`, `text`).
  - Assisted in identifying and annotating coordinates (`img/annotated-house.png`) to demonstrate the origin point and axis orientations.
- **My Implementation:**
  - Constructed the house and garden scene in `4-1.html` using D3-driven SVG elements.
  - Verified and styled shape dimensions, colors, and group translations.

---

### Exercise 4.2: Manipulate and Add Elements with D3
- **Primary Source:** Canvas modules exercise 4 page.
- **Role of AI:**
  - Clarified relative file path navigation (`../../lib/d3.v7.min.js`) from nested exercise subdirectories.
  - Advised on DOM selection strategies (`d3.select("h1")`, selecting specific containers vs. generic `<div>` tags to avoid interfering with pre-existing accordion elements).
- **My Implementation:**
  - Linked the local D3 library into `index.html`.
  - Created `assets/js/d3-script.js` to modify element styling (`.style("color", "green")`), append informational paragraph text, and append a test SVG rectangle.

---

### Exercise 4.3: D3 Set Up (Responsive SVG Canvas)
- **Primary Source:** Canvas modules exercise 4 page.
- **Role of AI:**
  - Explained the utility of the `.responsive-svg-container` CSS class and the SVG `viewBox` coordinate system over fixed pixel dimensions.
  - Guided the placement of a hardcoded prototype rectangle representing a sample data point.
- **My Implementation:**
  - Configured `style.css` with responsive container rules.
  - Instantiated the responsive SVG canvas in D3 with border styling for layout debugging.

---

### Exercise 4.4: Load Data from CSV
- **Primary Source:** Canvas modules exercise 4 page, `tvBrandCount.csv`, and KNIME `2026 TV Data.knwf`.
- **Role of AI:**
  - Clarified `CSV Writer` export settings (setting quote mode to "Never").
  - Explained unary `+` operator for inline string-to-number casting within `d3.csv()` row conversion.
- **My Implementation:**
  - Successfully exported and placed `tvBrandCount.csv` into `assets/data/`.
  - Implemented data ingestion with `d3.csv()`, logged dataset statistics (`length`, `d3.max`, `d3.min`, `d3.extent`), sorted descending, and routed the array to `drawBarChart(data)`.

---

### Exercise 4.5: D3 Binding and Drawing with Data
- **Primary Source:** Canvas modules exercise 4 page and Dufour & Meeks (2024) Chapter 3.
- **Role of AI:**
  - Broke down the fundamental D3 data-join lifecycle (`.selectAll("rect").data(data).join("rect")`).
  - Explained index-based vertical positioning to space out the bars evenly along the y-axis.
- **My Implementation:**
  - Replaced the placeholder `drawBarChart` function with real data binding.
  - Rendered individual bars for every TV brand, dynamically driving bar width from `d.count`.

---

### Exercise 4.6: Scaling Charts
- **Primary Source:** Canvas modules exercise 4 page.
- **Role of AI:**
  - Explained the conceptual distinction between continuous domain scales (`d3.scaleLinear()`) and categorical band scales (`d3.scaleBand()`).
  - Walked through replacing manual pixel spacing with `yScale.bandwidth()` and `.padding()`.
  - Verified adjustments to the SVG `viewBox` and aspect ratio.
- **My Implementation:**
  - Implemented `xScale` mapped to TV counts and `yScale` mapped to TV brands.
  - Updated rect attributes so all bars fit proportionally and adaptively within the SVG boundary.

---

### Exercise 4.7: Adding Labels
- **Primary Source:** Canvas modules exercise 4 page.
- **Role of AI:**
  - Explained SVG grouping (`<g>`) using `translate()` to bind bars and corresponding text labels into unified visual units.
  - Clarified label alignment techniques using `text-anchor: "end"` for right-aligned category names and offset positioning for count values.
- **My Implementation:**
  - Refactored bar rendering into `<g>` group containers with an x-axis offset to allocate space for labels.
  - Appended brand name text on the left and quantitative value labels adjacent to bar tips.

---

## 3. Human Oversight & Academic Integrity Statement

- All code and workflow steps were reviewed, understood, and implemented by the student.
- AI assistance was used as an educational and debugging tutor (explaining syntax, error messages, and mathematical scales), not as an autonomous replacement for learning.
- The student can independently explain the code structure, D3 data join mechanisms, scale mappings, and KNIME data preparation procedures.
