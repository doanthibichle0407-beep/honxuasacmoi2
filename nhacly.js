document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     KHAI BÁO
  ====================== */
  let slideIndex = 0;

  const slides = document.querySelectorAll('.slide');
  const slidesWrap = document.querySelector('.slides');
  const nextBtn = document.getElementById('nextSlide');

  const progress = document.getElementById('progressBar');

  const tabs = document.querySelector('.tabs');
  const tabButtons = document.querySelectorAll('.tab-buttons button');
  const tabContents = document.querySelectorAll('.tab-content');

  const emotionMap = document.querySelector('.emotion-map');
  const compareSection = document.querySelector('.compare');
  const unlock = document.getElementById('unlockRoom');
  const cards = document.querySelectorAll('.flip-card');

  /* ======================
     KHỞI TẠO
  ====================== */
  progress.style.width = '8%';

  tabs.classList.add('hidden');
  emotionMap.classList.add('hidden');
  compareSection.classList.add('hidden');
  unlock.classList.add('hidden');

  /* ======================
     SLIDES INTRO
  ====================== */
  nextBtn.onclick = () => {

    slides[slideIndex].classList.remove('active');
    slideIndex++;

    if (slideIndex < slides.length) {
      slides[slideIndex].classList.add('active');
      progress.style.width = (10 + slideIndex * 7) + '%';
    } 
    else {
      // Kết thúc intro
      slidesWrap.style.display = 'none';

      setTimeout(() => {
        tabs.classList.remove('hidden');
        tabs.classList.add('show');
      }, 200);

      progress.style.width = '35%';
    }
  };

  /* ======================
     TABS NHẠC LÝ
  ====================== */
  let tabsViewed = 0;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {

      // reset
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // active
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');

      // đếm tab đã xem
      if (!btn.dataset.viewed) {
        btn.dataset.viewed = "true";
        tabsViewed++;
      }

      progress.style.width = (35 + tabsViewed * 8) + '%';

      // MỞ PHẦN CẢM XÚC
      if (btn.dataset.tab === 'cam-xuc') {

        setTimeout(() => {
          emotionMap.classList.remove('hidden');
          emotionMap.classList.add('show');
        }, 300);

        setTimeout(() => {
          compareSection.classList.remove('hidden');
          compareSection.classList.add('show');
        }, 700);

        progress.style.width = '75%';
      }
    });
  });

  /* ======================
     FLIP CARD – MỞ PHÒNG
  ====================== */
  let cardHovered = 0;

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {

      if (!card.dataset.done) {
        card.dataset.done = "true";
        cardHovered++;
      }

      if (cardHovered === cards.length) {
        setTimeout(() => {
          unlock.classList.remove('hidden');
          unlock.classList.add('show');
          progress.style.width = '100%';
        }, 400);
      }
    });
  });

});
