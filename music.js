
const musicList = {
  main: "music/nen1.mp3",
  instruments: "music/nhaccu.mp3",
  costume: "music/nen2.mp3",
  game: "music/trochoi.mp3",
  bonus: "music/nen2.mp3"
};


const bgMusic = new Audio();
bgMusic.loop = true;
bgMusic.volume = 0.3;


const clickSound = new Audio("music/ting.mp3");
clickSound.volume = 0.4;

let audioUnlocked = false;


document.addEventListener("click", () => {
  if (audioUnlocked) return;

  audioUnlocked = true;

  clickSound.play().then(() => {
    clickSound.pause();
    clickSound.currentTime = 0;
  }).catch(()=>{});

  
  if (bgMusic.src) {
    bgMusic.play().catch(()=>{});
  }

  console.log("🔓 Audio unlocked");
}, { once: true });

function changeMusic(type) {
  if (!musicList[type]) return;

  localStorage.setItem("musicType", type);
  bgMusic.src = musicList[type];

  if (audioUnlocked) {
    bgMusic.play().catch(()=>{});
  }
}


const saved = localStorage.getItem("musicType");
bgMusic.src = musicList[saved] || musicList.main;


document.addEventListener("pointerdown", (e) => {
  if (!audioUnlocked) return;

  const target = e.target.closest(
    "a, button, .card, cta, navbar"
  );

  if (!target) return;

  clickSound.currentTime = 0;
  clickSound.play().catch(()=>{});
});
function goTo(url) {
  if (audioUnlocked) {
    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});
  }

  setTimeout(() => {
    window.location.href = url;
  }, 120); 
}
