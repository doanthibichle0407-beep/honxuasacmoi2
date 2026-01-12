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

  if (!songList || !songPlayer || !lyricsBox || !recordZone || !recordBtn || !sendBtn || !retryBtn || !player || !status || !result) {
    console.error("❌ Một hoặc nhiều element trong HTML chưa tồn tại hoặc ID sai!");
    return;
  }

  songs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.classList.add("song-item");
    li.onclick = () => selectSong(song, li);
    songList.appendChild(li);
  });

  function selectSong(song, li) {
    selectedSong = song;

    document.querySelectorAll(".song-item").forEach(item => item.classList.remove("active"));
    li.classList.add("active");

    songPlayer.src = song.audio;
    songPlayer.load();

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

    const prev = lyrics[idx - 1]?.text || "";
    const curr = lyrics[idx]?.text || "";
    const next = lyrics[idx + 1]?.text || "";

    const [pPrev, pCurr, pNext] = lyricsBox.children;
    pPrev.textContent = prev;
    pCurr.textContent = curr;
    pNext.textContent = next;

    pPrev.className = "prev";
    pCurr.className = "current";
    pNext.className = "next";
  };

  recordBtn.onclick = async () => {
    if (!selectedSong) {
      alert("🎭 Chọn bài trước khi hát");
      return;
    }

    try {
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
    } catch (err) {
      console.error("❌ Không thể truy cập micro:", err);
      alert("❌ Vui lòng cho phép quyền micro");
    }
  };

  sendBtn.onclick = async () => {
    if (!audioBlob) return;

    sendBtn.disabled = true;
    result.innerText = "⏳ AI đang chấm điểm...";

    const fd = new FormData();
    fd.append("audio", audioBlob);

    try {
      const res = await fetch("/upload", {  
        method: "POST",
        body: fd
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      result.innerText = `🎯 Điểm AI: ${data.score}/100`;
      retryBtn.classList.remove("hidden");
      status.innerText = "🎭 Hoàn tất phần trình diễn";
    } catch (err) {
      console.error("❌ Lỗi gửi audio:", err);
      result.innerText = "❌ Lỗi gửi audio lên AI";
      sendBtn.disabled = false;
    }
  };

  retryBtn.onclick = () => {
    audioBlob = null;
    player.src = "";
    sendBtn.disabled = true;
    retryBtn.classList.add("hidden");
    status.innerText = "▶️ Bật nhạc rồi hát theo";
    result.innerText = "";
  };

});
