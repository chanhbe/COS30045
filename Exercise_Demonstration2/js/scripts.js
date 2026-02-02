// Hàm điều hướng chính
function navigate(pageId) {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".navbar li");

  // 1. Hiệu ứng biến mất (Fade out)
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    setTimeout(() => {
      section.style.display = "none";
    }, 300);
  });

  // 2. Hiệu ứng xuất hiện (Fade in) sau khi ẩn trang cũ
  setTimeout(() => {
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
      targetSection.style.display = "block";
      // Đợi một chút để browser nhận diện display:block rồi mới tạo animation
      setTimeout(() => {
        targetSection.style.opacity = "1";
        targetSection.style.transform = "translateY(0)";
      }, 50);
    }
    // Tự động cuộn lên đầu trang mỗi khi chuyển trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);

  // 3. Cập nhật trạng thái Active trên Navbar
  navItems.forEach((item) => item.classList.remove("active"));
  const activeNav = document.getElementById(`nav-${pageId}`);
  if (activeNav) activeNav.classList.add("active");
}

// Hiệu ứng "Scroll Reveal" - Các thẻ hiện ra khi cuộn chuột đến
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Chạy hiệu ứng khi trang web load xong
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('reveal');
    observer.observe(card);
  });
});