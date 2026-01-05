window.goTo = function(page) {
  document.body.classList.add("fadeOut");
  setTimeout(() => {
    window.location.href = page;
  }, 300);
}
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar ul");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

