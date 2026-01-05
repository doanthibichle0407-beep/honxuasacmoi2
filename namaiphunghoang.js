document.addEventListener("DOMContentLoaded", () => {
  const audios = document.querySelectorAll('[data-audio]');
  const gameRoom = document.getElementById('game');
  const playBtn = document.getElementById('play-btn');
  const lockText = document.getElementById('lock-text');

  let listened = new Set();

  audios.forEach(audio => {
    audio.addEventListener('ended', () => {
      listened.add(audio);
      checkUnlock();
    });
  });

  function checkUnlock() {
    if (listened.size >= audios.length) {
      gameRoom.classList.remove('locked');
      playBtn.disabled = false;
      lockText.textContent = 'Bạn đã sẵn sàng thử tư duy của người làm cải lương.';
      localStorage.setItem("namaiPhunghoangUnlocked", "true");
    }
  }

  playBtn.addEventListener('click', () => {
    alert("🎉 Bắt đầu trò chơi Nam Ai – Phụng Hoàng!");
    window.location.href = "gamenamai.html";
  });
});
