const rooms = document.querySelectorAll('.reveal');
const nextRoom = document.getElementById('next-room');
const enterBtn = document.getElementById('enter-btn');
const unlockText = document.getElementById('unlock-text');

let viewed = 0;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('show')) {
      entry.target.classList.add('show');
      viewed++;
      checkUnlock();
    }
  });
},{ threshold: 0.4 });

rooms.forEach(r => observer.observe(r));

function checkUnlock() {
  if (viewed >= rooms.length) {
    nextRoom.classList.remove('locked');
    enterBtn.classList.remove('disabled');
    unlockText.textContent = "Bạn đã sẵn sàng bước vào Nam Ai – Phụng Hoàng.";
  }
}
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const progress = document.getElementById('progressBar');

document.getElementById('nextSlide').onclick = () => {
  slides[slideIndex].classList.remove('active');
  slideIndex++;

  if (slideIndex < slides.length) {
    slides[slideIndex].classList.add('active');
    progress.style.width = ((slideIndex+1)/5*100)+'%';
  } else {
    document.querySelector('.slides').style.display = 'none';
    document.querySelector('.tabs').classList.remove('hidden');
    progress.style.width = '40%';
  }
};

// TAB
document.querySelectorAll('.tab-buttons button').forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
    document.querySelector('.compare').classList.remove('hidden');
    progress.style.width = '70%';
  }
});

// UNLOCK
document.querySelector('.compare').addEventListener('mouseenter',()=>{
  document.getElementById('unlockRoom').classList.remove('hidden');
  progress.style.width = '100%';
});
