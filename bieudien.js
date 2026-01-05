document.querySelectorAll('.room-card').forEach(card => {
  card.addEventListener('click', () => {
    document.body.classList.add('fadeOut');
    setTimeout(() => {
      window.location.href = card.dataset.link;
    }, 300);
  });
});
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar ul");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
