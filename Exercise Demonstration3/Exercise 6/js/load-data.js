// Trong file histogram.js (hoặc file load data của bạn)
d3.csv("data/Ex6_TVdata.csv").then(data => {
    tvData = data;
    
    // Bài 6.1
    drawHistogram(tvData);
    populateFilters(tvData);
    
    // Bài 6.2 (Thêm mới)
    drawScatterplot(tvData);
    createTooltip();
    handleMouseEvents();
});