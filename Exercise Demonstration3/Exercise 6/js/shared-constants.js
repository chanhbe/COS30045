// 1. Thiết lập kích thước và lề (Dufour & Meeks Strategy)
const margin = { top: 30, right: 30, bottom: 50, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// 2. Thiết lập màu sắc (Đồng bộ với website Energy TV)
const barColor = "#f5a623";          // Màu vàng Gold
const barHoverColor = "#4b4128";     // Màu nâu đồng khi hover
const bodyBackgroundColor = "#ffffff"; // Màu nền trắng (để tạo khoảng cách cột)

// 3. Cấu hình cho bộ lọc (Sử dụng cho Step 7 trong interactions.js)
const filters_screen = [
    { id: "all", label: "All Technologies", isActive: true },
    { id: "LCD", label: "LCD", isActive: false },
    { id: "LED", label: "LED", isActive: false },
    { id: "OLED", label: "OLED", isActive: false }
];

// 4. Trình tạo Bins cho Histogram (Step 6.2)
const binGenerator = d3.bin()
    .value(d => +d.energyConsumption) // Ép kiểu cột energyConsumption sang số
    .thresholds(20); // Chia làm 20 khoảng (bins)