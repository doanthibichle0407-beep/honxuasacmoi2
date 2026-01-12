document.addEventListener("DOMContentLoaded", () => {

  let mediaRecorder = null;
  let audioChunks = [];
  let audioBlob = null;
  let selectedSong = null;

  const songList   = document.getElementById("songList");
  const songPlayer = document.getElementById("songPlayer");
  const lyricsBox  = document.getElementById("lyricsBox");
  const recordZone = document.getElementById("recordZone");
  const recordBtn  = document.getElementById("recordBtn");
  const sendBtn    = document.getElementById("sendBtn");
  const retryBtn   = document.getElementById("retryBtn");
  const player     = document.getElementById("player");
  const status     = document.getElementById("status");
  const result     = document.getElementById("result");

  // ===== LOAD SONG LIST =====
  if (songList && Array.isArray(songs)) {
    songs.forEach(song => {
      const li = document.createElement("li");
      li.textContent = song.title;
      li.onclick = () => selectSong(song);
      songList.appendChild(li);
    });
  }

  function selectSong(song) {
    selectedSong = song;

    if (songPlayer) {
      songPlayer.src = song.audio;
      songPlayer.load();
    }

    lyricsBox.innerHTML = `
      <p class="prev"></p>
      <p class="current"></p>
      <p class="next"></p>
    `;

    recordZone.classList.remove("hidden");
    sendBtn.disabled = true;
    retryBtn.classList.add("hidden");

    status.innerText = "▶️ Bật nhạc rồi hát theo";
    result.innerText = "";
  }

  songPlayer.ontimeupdate = () => {
    if (!selectedSong) return;

    const t = songPlayer.currentTime;
    const lyrics = selectedSong.lyrics;

    let idx = 0;
    for (let i = 0; i < lyrics.length; i++) {
      const next = lyrics[i + 1]?.time ?? Infinity;
      if (t >= lyrics[i].time && t < next) {
        idx = i;
        break;
      }
    }

    const [pPrev, pCurr, pNext] = lyricsBox.children;
    pPrev.textContent = lyrics[idx - 1]?.text || "";
    pCurr.textContent = lyrics[idx]?.text || "";
    pNext.textContent = lyrics[idx + 1]?.text || "";

    pPrev.className = "prev";
    pCurr.className = "current";
    pNext.className = "next";
  };

  // ===== RECORD =====
  recordBtn.onclick = async () => {
    if (!selectedSong) {
      alert("🎭 Chọn bài trước khi hát");
      return;
    }

    if (!mediaRecorder || mediaRecorder.state === "inactive") {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = () => {
        audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        player.src = URL.createObjectURL(audioBlob);
        sendBtn.disabled = false;
      };

      mediaRecorder.start();
      recordBtn.innerText = "⏹️ Dừng";
      status.innerText = "🎙️ Đang hát...";
    } else {
      mediaRecorder.stop();
      recordBtn.innerText = "🎙️ Hát";
      status.innerText = "⏹️ Đã dừng";
    }
  };

  // ===== SEND AUDIO =====
  sendBtn.onclick = async () => {
    if (!audioBlob) return;

    sendBtn.disabled = true;
    result.innerText = "⏳ AI đang chấm điểm...";

    const fd = new FormData();
    fd.append("audio", audioBlob);

    try {
   const res = await fetch(
  "https://honxuasacmoi2-production.up.railway.app/upload",
  {
    method: "POST",
    body: fd
  }
);


      const data = await res.json();
      result.innerText = `🎯 Điểm AI: ${data.score}/100`;
      retryBtn.classList.remove("hidden");
      status.innerText = "🎭 Hoàn tất";
    } catch (err) {
      console.error(err);
      result.innerText = "❌ Không kết nối được server AI";
      sendBtn.disabled = false;
    }
  };

  retryBtn.onclick = () => {
    audioBlob = null;
    sendBtn.disabled = true;
    retryBtn.classList.add("hidden");
    status.innerText = "🎙️ Sẵn sàng hát lại";
    result.innerText = "";
  };

});

