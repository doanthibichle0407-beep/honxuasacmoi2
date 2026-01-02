const video = document.querySelector('.video-frame');
const soundBtn = document.querySelector('.sound-btn');

soundBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? '🔇' : '🔊';

  if (!video.muted) {
    video.play().catch(err => console.log(err));
  }
});


const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline() {
  const triggerBottom = window.innerHeight * 0.85;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);



const artistCards = document.querySelectorAll('.artist-card');
const popup = document.getElementById('artistPopup');
const popupImg = document.getElementById('popupImg');
const popupName = document.getElementById('popupName');
const popupInfo = document.getElementById('popupInfo');
const closePopup = document.querySelector('.close-popup');

artistCards.forEach(card => {
  card.addEventListener('click', () => {
    popupImg.src = card.dataset.img;
    popupName.textContent = card.dataset.name;

    // Xuống dòng theo dữ liệu
    popupInfo.innerHTML = card.dataset.info.replace(/\n/g, '<br>');

    popup.classList.add('show');
  });
});

closePopup.addEventListener('click', () => popup.classList.remove('show'));

popup.addEventListener('click', e => {
  if (e.target === popup) popup.classList.remove('show');
});



const timelineCards = document.querySelectorAll('.timeline .card');
const tp = document.getElementById('timelinePopup');
const tpImg = document.getElementById('tpImg');
const tpTitle = document.getElementById('tpTitle');
const tpText = document.getElementById('tpText');
const tpClose = document.querySelector('.tp-close');

timelineCards.forEach(card => {
  card.addEventListener('click', () => {

    const img = card.dataset.img;
    const title = card.dataset.title;
    let more = card.dataset.more;

    if (more) {
      more = more.replace(/\n/g, '<br>');
      more = more.replace(/&#10;/g, '<br>');
      more = more.replace(/\r/g, '<br>');
    }

    tpImg.src = img;
    tpTitle.textContent = title;
    tpText.innerHTML = more;

    tp.classList.add('show');
  });
});

tpClose.addEventListener('click', () => tp.classList.remove('show'));

tp.addEventListener('click', e => {
  if (e.target === tp) tp.classList.remove('show');
});

