# Energy TV Analysis Dashboard
**Author:** Nguyen Ba Chanh 
**Date:** February 2026
**Course:** COS30045 Data Visualisation
---

## 🤖 GenAI Declarations — Exercise 4–5

### Use of Generative AI Tools
Generative AI tools (ChatGPT) were used during the development of Exercises 4.2 to 5.2 to assist with understanding D3 concepts, debugging code, and generating example implementations of chart components.

**The AI tool was primarily used for:**
* **Explaining D3 Fundamentals:** Understanding how D3 selects and manipulates DOM elements.
* **Data Loading:** Providing guidance on loading CSV data using `d3.csv()` and converting data types.
* **Data Binding:** Demonstrating how to bind datasets to SVG elements using `.data()` and `.join()`.
* **Chart Implementation:** Suggesting approaches for implementing bar charts and histograms using attributes such as position, width, and height.
* **Scales & Coordinate Systems:** Explaining the use of D3 scales (`scaleLinear`, `scaleBand`) to ensure charts adapt to different SVG sizes.
* **Debugging:** Assisting with troubleshooting errors related to file paths, data parsing, and rendering issues.

All AI-generated suggestions were reviewed, tested, and modified by the author to ensure correctness and alignment with the assignment requirements.

### Author Contribution and Understanding
The final implementation reflects my own understanding of:
* How D3 binds data to DOM elements.
* How SVG elements are created and manipulated dynamically.
* How scaling functions allow visualisations to adapt to different display sizes.
* How to debug common D3 issues such as `NaN` values and incorrect data types.

I take full responsibility for the submitted code and confirm that I understand how it works.

---

## 🤖 GenAI Declarations — Exercise 5–6

### Use of Generative AI Tools
For the advanced interactive components in Exercises 5 and 6, GenAI was utilized as a technical Gemini to implement complex logic and interactive features.

**The AI tool was primarily used for:**
* **Logic Support:** Assisted in creating the D3.js `binGenerator` logic to group energy consumption data.
* **Layout Design:** Suggested the use of `viewBox` for responsive SVG scaling and defined the margin convention (Dufour & Meeks strategy).
* **Interactive Filtering:** Co-developed the combined filtering logic in `interactions.js` to allow simultaneous filtering by Technology and Screen Size.
* **Transition Effects:** Provided the syntax for D3 transitions (`.transition().duration(1000)`) to ensure smooth updates when filters are applied.
* **Scatterplot & Tooltips:** * Helped troubleshoot "stuck" data points in the scatterplot by identifying missing `+` operators for numerical casting in scale domains.
    * Guided the creation of SVG-based tooltip groups (`g`, `rect`, `text`) and event listeners (`mouseenter`, `mouseleave`) for data exploration.

### Author Contribution and Understanding
While GenAI provided logic templates, I performed the following critical tasks:
* **UI/UX Design:** Customised the aesthetic design, selecting the specific "Energy TV" color palette (Gold `#f5a623` and Bronze `#4b4128`) to ensure a professional look.
* **Code Modularization:** Organized the project into a multi-file structure (`shared-constants.js`, `histogram.js`, `scatterplot.js`, `interactions.js`) to prevent global variable conflicts.
* **Structural Adjustments:** Manually refactored the DOM injection logic to place Screen Size filters below the chart area for better visual hierarchy.
* **Logic Validation:** Verified that `applyCombinedFilters` correctly handles the "All" state for both technology and size categories simultaneously.

---

## ⚖️ Academic Integrity Statement
* **Learning Support:** Generative AI was used as a learning support tool only to bridge the gap between theory and technical implementation.
* **No Blind Copying:** No content was copied blindly without full comprehension of the underlying D3.js mechanics.
* **Original Work:** The final submission represents my own work, styling preferences, and structural decisions.

---

## 🚀 Key Technical Features
* **Interactive Histogram:** Explore energy distribution across 20 thresholds with smooth transitions.
* **Dual-layer Filtering:** Simultaneous data filtering by Display Technology (LCD, LED, OLED) and Screen Size (24", 32", 55", 65", 98").
* **Interactive Scatterplot:** Real-time relationship analysis between Star Rating and Energy Consumption.
* **Responsive Visualisations:** All charts utilize the SVG `viewBox` attribute to ensure perfect scaling across different screen dimensions.
* **Dynamic Tooltips:** Context-aware SVG tooltips that appear on hover to display specific screen size data points.

---
