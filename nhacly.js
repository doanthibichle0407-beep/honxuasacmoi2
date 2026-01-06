/* ======================
   SLIDES – CHƯƠNG 1
====================== */
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextSlide');
const progress = document.getElementById('progressBar');

nextBtn.onclick = () => {
  slides[slideIndex].classList.remove('active');
  slideIndex++;

  if (slideIndex < slides.length) {
    slides[slideIndex].classList.add('active');
    progress.style.width = ((slideIndex + 1) / slides.length * 30) + '%';
  } else {
    document.querySelector('.slides').style.display = 'none';
    document.querySelector('.tabs').classList.remove('hidden');
    progress.style.width = '35%';
  }
};


/* ======================
   TABS – CHƯƠNG 2
====================== */
const tabButtons = document.querySelectorAll('.tab-buttons button');
const tabContents = document.querySelectorAll('.tab-content');
const compareSection = document.querySelector('.compare');

let tabsViewed = 0;

tabButtons.forEach(btn => {
  btn.onclick = () => {

    // đổi active
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');

    // đếm tab đã xem
    if (!btn.dataset.viewed) {
      btn.dataset.viewed = "true";
      tabsViewed++;
    }

    progress.style.width = (35 + tabsViewed * 10) + '%';

    // CHỈ KHI XEM TAB CUỐI → hiện Nam
    if (btn.dataset.tab === 'cam-xuc') {
      compareSection.classList.remove('hidden');
      progress.style.width = '75%';
    }
  };
});


/* ======================
   UNLOCK – CHƯƠNG CUỐI
====================== */
let cardHovered = 0;
const cards = document.querySelectorAll('.flip-card');
const unlock = document.getElementById('unlockRoom');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (!card.dataset.done) {
      card.dataset.done = "true";
      cardHovered++;
    }

    if (cardHovered >= cards.length) {
      unlock.classList.remove('hidden');
      progress.style.width = '100%';
    }
  });
});
