const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar ul");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
