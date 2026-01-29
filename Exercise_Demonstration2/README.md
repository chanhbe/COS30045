# Australian TV Energy Consumption  
**COS30045 – Data Visualisation**

## Overview
This project explores the energy consumption characteristics of televisions currently available on the Australian market. Using data from the Australian Government TV energy rating dataset, the project focuses on identifying patterns in screen size, screen technology, brand availability, and their relationship with energy use.

The goal of this project is to practice data exploration, visualisation design, and data storytelling, and to communicate insights clearly to a general audience through a simple website.

The visualisations and analysis were developed as part of **Exercise 2 and Exercise 3** for the unit **COS30045 – Data Visualisation** at Swinburne University of Technology.

---

## About the Data

### Data Source
The dataset is sourced from the **Australian Government television energy rating database**, which contains information on televisions approved for sale in Australia.  
The data includes attributes such as:
- Brand name  
- Model number  
- Screen size  
- Screen technology  
- Energy consumption  
- Star rating  

---

### Data Processing
Data preparation and cleaning were performed using **KNIME Analytics Platform**.  
Key processing steps included:
- Removing unnecessary columns not relevant to analysis  
- Handling missing values based on data type and analytical importance  
- Removing duplicate TV models while keeping the most recent records  
- Filtering the dataset to include only currently approved TV models  
- Standardising brand names to avoid duplication (e.g. inconsistent casing)  
- Converting screen size values to inches for easier interpretation  

These steps ensured the dataset was clean, consistent, and suitable for aggregation and visualisation.

---

### Privacy
The dataset does **not** contain any personal or sensitive information.  
All data relates to commercial television products and publicly available energy ratings, therefore no privacy concerns are present.

---

### Accuracy and Limitations
While the dataset is reliable for understanding general trends, it has some limitations:
- The data only includes models approved at the time of publication and may not represent the latest products on the market  
- Energy consumption values are based on standard testing conditions and may differ from real-world usage  
- Some technologies (e.g. Plasma) appear infrequently, limiting meaningful comparison  

As a result, findings should be interpreted as **indicative trends rather than exact measures**.

---

### Ethics
This project aims to present data honestly and transparently without misleading interpretation.  
Visualisations were designed to:
- Avoid exaggeration or distortion of trends  
- Clearly label axes, units, and categories  
- Support informed decision-making rather than persuasion  

The project does not promote specific brands or products.

---

## Data Story
The website presents key insights from the dataset to help users understand how television characteristics relate to energy consumption.

The main insights include:
- **Popular screen sizes**: 70+ inch and 60-69 inch TVs are the most common sizes available in Australia  
- **Screen technology availability**: LCD-based technologies dominate the market, while OLED is growing and Plasma is largely outdated  
- **Brand diversity**: Some brands offer a significantly wider range of TV models than others  

Each visualisation is accompanied by explanatory text to help readers interpret the data correctly.

---

## Visualisations
Charts were generated using **KNIME Analytics Platform** and embedded into the website as images.  
The focus of the visualisations is clarity, simplicity, and ease of comparison for a general audience.

---

## AI Declaration
Generative AI tools were used in a **supporting role only**, including:
- Assisting with drafting and refining written explanations  
- Supporting HTML/CSS structure and layout suggestions  

All data analysis decisions, visualisation design choices, and interpretations were made by the student.  
The final implementation reflects the student’s own understanding and learning from the unit.

---

## Author
**Chanh Nguyen**  
COS30045 – Data Visualisation  
Swinburne University of Technology  
2026
