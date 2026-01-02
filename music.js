// =========================
// 🎶 DANH SÁCH NHẠC NỀN
// =========================
const musicList = {
  main: "music/nen1.mp3",
  instruments: "music/nhaccu.mp3",
  costume: "music/nen2.mp3",
  game: "music/trochoi.mp3",
  bonus: "music/nen2.mp3"
};

// =========================
// 🎵 BACKGROUND MUSIC
// =========================
const bgMusic = new Audio();
bgMusic.loop = true;
bgMusic.volume = 0.3;

// =========================
// 🔔 CLICK SOUND
// =========================
const clickSound = new Audio("music/ting.mp3");
clickSound.volume = 0.4;

let audioUnlocked = false;

// =========================
// 🔓 UNLOCK AUDIO (CLICK ĐẦU TIÊN)
// =========================
document.addEventListener("click", () => {
  if (audioUnlocked) return;

  audioUnlocked = true;

  // unlock click
  clickSound.play().then(() => {
    clickSound.pause();
    clickSound.currentTime = 0;
  }).catch(()=>{});

  // unlock bg music
  if (bgMusic.src) {
    bgMusic.play().catch(()=>{});
  }

  console.log("🔓 Audio unlocked");
}, { once: true });

// =========================
// 🎵 ĐỔI NHẠC THEO TRANG
// =========================
function changeMusic(type) {
  if (!musicList[type]) return;

  localStorage.setItem("musicType", type);
  bgMusic.src = musicList[type];

  if (audioUnlocked) {
    bgMusic.play().catch(()=>{});
  }
}

// =========================
// 🔁 LOAD LẠI NHẠC KHI REFRESH
// =========================
const saved = localStorage.getItem("musicType");
bgMusic.src = musicList[saved] || musicList.main;

// =========================
// 🔊 TING CHO TẤT CẢ CLICK
// =========================
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
  }, 120); // đủ để nghe "ting"
}
