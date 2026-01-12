
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


const video = document.getElementById('introVideo');
const overlay = document.getElementById('videoOverlay');
const btn = document.getElementById('playSoundBtn');
const muteBtn = document.getElementById('muteToggle');

if (video && overlay && btn && muteBtn) {

  btn.addEventListener('click', () => {
    video.muted = false;
    video.play().catch(() => {});
    overlay.style.display = 'none';

    muteBtn.style.display = 'block';
    muteBtn.textContent = '🔊';
  });

  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
  });
}

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

  window.addEventListener('scroll', () => {
    fadeInOnScroll(storyCards, 100);
    fadeInOnScroll([transition], 100);
    fadeInOnScroll([endSection], 100);
  });

  fadeInOnScroll(storyCards, 100);
  fadeInOnScroll([transition], 100);
  fadeInOnScroll([endSection], 100);
});
const storyVideo = document.querySelector('.story-video');

function revealVideo() {
  if (!storyVideo) return;
  const top = storyVideo.getBoundingClientRect().top;
  if (top < window.innerHeight * 0.85) {
    storyVideo.classList.add('show');
  }
}

window.addEventListener('scroll', revealVideo);
window.addEventListener('load', revealVideo);
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navbar ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
const muteMobileBtn = document.getElementById('muteMobileBtn');
const introVideo = document.getElementById('introVideo');

muteMobileBtn.addEventListener('click', () => {
  introVideo.muted = !introVideo.muted;
  muteMobileBtn.textContent = introVideo.muted ? "🔇" : "🔊";
});
