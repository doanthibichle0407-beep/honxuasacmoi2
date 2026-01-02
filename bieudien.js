document.querySelectorAll('.room-card').forEach(card => {
  card.addEventListener('click', () => {
    document.body.classList.add('fadeOut');
    setTimeout(() => {
      window.location.href = card.dataset.link;
    }, 300);
  });
});
