const navItems = document.querySelectorAll(".nav-links li");
const pages = document.querySelectorAll(".page");
const logo = document.getElementById("logo");

function navigate(page) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(page).style.display = "block";

  const navItems = document.querySelectorAll(".navbar li");
  navItems.forEach(item => item.classList.remove("active"));

  document.getElementById(`nav-${page}`).classList.add("active");
}


navItems.forEach(item => {
  item.addEventListener("click", () => {
    showPage(item.dataset.page);
  });
});

logo.addEventListener("click", () => {
  showPage("home");
});
