window.goTo = function(page) {
  document.body.classList.add("fadeOut");
  setTimeout(() => {
    window.location.href = page;
  }, 300);
}

