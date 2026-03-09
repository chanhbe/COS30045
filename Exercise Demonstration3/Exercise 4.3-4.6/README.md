# The Australian TV Landscape: Trends & Insights

A comprehensive data-driven analysis of the Australian television market, exploring the intersection of display technology, consumer size preferences, and brand competitive strategies.

---

## 📋 About the Data

### Data Source
The foundational data for this project is the **Australian Government TV Energy Rating Dataset**. This dataset is a regulated registry of every television model certified for sale in Australia, ensuring the data is both official and exhaustive.

### Data Processing & Methodology
To move from raw numbers to meaningful visualisations, the data was processed through the **KNIME Analytics Platform**:
* **Data Cleaning:** Handled missing values in older models and standardized brand naming conventions (e.g., ensuring "SAMSUNG" and "Samsung" are treated as one).
* **Categorization:** Grouped technical display specs into three clear pillars: LCD (including LED-backlit), OLED (Self-emissive), and Plasma (Legacy technology).
* **Size Binning:** Since screen sizes vary by inches, we created specific "Size Ranges" (50-59", 60-69", 70+") to identify the "Sweet Spot" of the Australian market.

### Privacy & Ethics
* **Privacy:** This project operates on public-domain technical specifications. No consumer purchase history, credit card data, or personal identities were used.
* **Accuracy:** While the data is accurate for model *availability*, it is important to note that it represents the number of unique models registered, not the total units sold to customers.
* **Ethics:** We aim to provide a neutral look at the market, acknowledging that while larger TVs are popular, they carry higher cumulative energy demands for the nation.

---

## 🔍 Detailed Market Insights

### 1. Technology Dominance
While **LCD-based technologies** remain the market backbone due to manufacturing efficiency, our analysis highlights the rise of **OLED** as the premium standard. OLED's ability to provide "Perfect Blacks" and ultra-thin designs makes it the primary choice for high-end consumers, despite its smaller market share compared to LCD.

### 2. The "Bigger is Better" Trend
The data reveals a significant concentration of models in the **60-inch and above** category. This reflects a shift in Australian living rooms toward "Cinema-at-home" experiences. However, we note that screens in the **70+ inch range** represent a growing segment that requires specialized placement and higher power consumption.

### 3. Brand Concentration
The Australian market is highly concentrated. A few "Tech Giants" dominate the landscape:
* **Samsung:** Leading the market with over **1,100 unique models**.
* **Kogan & Hisense:** Positioning themselves as "Value Disruptors" with a high variety of models at competitive price points.
* **LG:** Maintaining a strong presence, particularly in the premium OLED segment.

---

## 🤖 AI Declaration

**Generative AI Disclosure:**
* **Structure & Logic:** Gemini 3 Flash assisted in drafting the multi-page navigation logic in `scripts.js` and the "Fade-in" transition effects.
* **Styling:** AI tools helped translate the colors from the **PowerIcon.png** logo (Gold and Bronze) into a cohesive CSS variable system for the entire site.
* **Content:** The narrative descriptions for the "Feature Boxes" (OLED advantages and Size specs) were refined using AI to ensure technical accuracy and readability.

---
**Author:** Chanh Nguyen  
**Project:** COS30045 Data Visualisation Portfolio  
**Institution:** Swinburne University of Technology