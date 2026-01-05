// =========================
// ARTIST POPUP
// =========================
const artistCards = document.querySelectorAll('.artist-card');
const popup = document.getElementById('artistPopup');
const popupImg = document.getElementById('popupImg');
const popupName = document.getElementById('popupName');
const popupInfo = document.getElementById('popupInfo');
const closePopup = document.querySelector('.close-popup');

if (artistCards && popup && popupImg && popupName && popupInfo) {
  artistCards.forEach(card => {
    card.addEventListener('click', () => {
      popupImg.src = card.dataset.img || '';
      popupName.textContent = card.dataset.name || '';
      popupInfo.innerHTML = (card.dataset.info || '').replace(/\r/g,'').replace(/\n/g,'<br>');
      popup.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeArtistPopup() {
    popup.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (closePopup) closePopup.addEventListener('click', closeArtistPopup);
  popup.addEventListener('click', e => {
    if (e.target === popup) closeArtistPopup();
  });
}

// =========================
// FADE-IN ON SCROLL
// =========================
const revealItems = document.querySelectorAll('.story, .transition, .artists-title, .end');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  revealItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) item.classList.add('show');
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =========================
// VIDEO PLAY BUTTON
// =========================
const video = document.getElementById('introVideo');
const overlay = document.getElementById('videoOverlay');
const btn = document.getElementById('playSoundBtn');

if (video && overlay && btn) {
  btn.addEventListener('click', () => {
    video.muted = false;      // bật âm thanh
    video.play().catch(() => {});  // tránh lỗi nếu video chưa load
    overlay.style.display = 'none'; // ẩn overlay
  });
}
// =========================
// SCROLL ANIMATION
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const storyCards = document.querySelectorAll('.story-card');
  const transition = document.querySelector('.transition');
  const endSection = document.querySelector('.end');

  const fadeInOnScroll = (elements, offset = 150) => {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - offset) {
        el.classList.add('show');
      }
    });
  };

  // For story cards
  window.addEventListener('scroll', () => {
    fadeInOnScroll(storyCards, 100);
    fadeInOnScroll([transition], 100);
    fadeInOnScroll([endSection], 100);
  });

  // Trigger animation if already in view on load
  fadeInOnScroll(storyCards, 100);
  fadeInOnScroll([transition], 100);
  fadeInOnScroll([endSection], 100);
});
