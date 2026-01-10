let mediaRecorder;
let audioChunks = [];
let audioBlob = null;
let selectedSong = null;

const songList = document.getElementById("songList");
const songPlayer = document.getElementById("songPlayer");
const lyricsBox = document.getElementById("lyricsBox");
const recordZone = document.getElementById("recordZone");
const recordBtn = document.getElementById("recordBtn");
const sendBtn = document.getElementById("sendBtn");
const player = document.getElementById("player");
const status = document.getElementById("status");
const result = document.getElementById("result");

/* ===== RENDER DANH SÁCH BÀI HÁT ===== */
songs.forEach(song => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.onclick = () => selectSong(song);
  songList.appendChild(li);
});

/* ===== CHỌN BÀI ===== */
function selectSong(song) {
  selectedSong = song;

  songPlayer.src = song.audio;
  songPlayer.load();

  // Khi chọn bài, khởi tạo 3 dòng karaoke trống
  lyricsBox.innerHTML = `
    <p class="prev"></p>
    <p class="current"></p>
    <p class="next"></p>
  `;

  recordZone.classList.remove("hidden");
  status.innerText = "▶️ Bật nhạc rồi hát theo";
}

/* ===== KARAOKE 3 DÒNG + SCROLL MƯỢT ===== */
songPlayer.ontimeupdate = () => {
  if (!selectedSong) return;
  const t = songPlayer.currentTime;
  const lyrics = selectedSong.lyrics;

  // Xác định dòng đang hát
  let activeIndex = 0;
  for (let i = 0; i < lyrics.length; i++) {
    const nextTime = i + 1 < lyrics.length ? lyrics[i + 1].time : Infinity;
    if (t >= lyrics[i].time && t < nextTime) {
      activeIndex = i;
      break;
    }
  }

  const prevText = lyrics[activeIndex - 1]?.text || "";
  const currText = lyrics[activeIndex].text;
  const nextText = lyrics[activeIndex + 1]?.text || "";

  const [prevP, currP, nextP] = lyricsBox.children;

  prevP.textContent = prevText;
  prevP.className = "prev";

  currP.textContent = currText;
  currP.className = "current";

  nextP.textContent = nextText;
  nextP.className = "next";

  // Scroll để dòng current nằm giữa
 const containerHeight = lyricsBox.clientHeight;
const scrollPos = currP.offsetTop - containerHeight / 2 + currP.offsetHeight / 2;
lyricsBox.scrollTo({ top: scrollPos, behavior: 'smooth' });


};

/* ===== THU ÂM ===== */
recordBtn.onclick = async () => {
  if (!selectedSong) {
    alert("🎭 Hãy chọn bài trước khi hát");
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

/* ===== GỬI AUDIO LÊN AI CHẤM ĐIỂM ===== */
sendBtn.onclick = async () => {
  if (!audioBlob) return;

  result.innerText = "⏳ AI đang chấm điểm...";

  const fd = new FormData();
  fd.append("audio", audioBlob);

  try {
    const res = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: fd
    });
    const data = await res.json();
    result.innerText = `🎯 Điểm AI: ${data.score}/100`;
  } catch (err) {
    console.error(err);
    result.innerText = "❌ Có lỗi khi gửi audio lên AI.";
  }
};
