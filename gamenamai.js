
const scenePool = [
  {
    title: "Chia ly lặng lẽ",
    text: "Hai người quay lưng, không ai bật khóc.",
    correct: "phunghoang",
    explain: "Cảm xúc còn nén, buồn mà chưa vỡ.",
    altText: "Nam Ai quá nặng cho cảnh này.",
    tip: "Bi nhưng chưa bật = Phụng Hoàng"
  },
  {
    title: "Oan khuất bật khóc",
    text: "Tiếng than bật ra giữa công đường.",
    correct: "namai",
    explain: "Bi ai bật thành tiếng.",
    altText: "Phụng Hoàng không đủ lực.",
    tip: "Bi bật ra = Nam Ai"
  },
  {
    title: "Bi tráng trước giờ chết",
    text: "Nhân vật giữ khí phách, không rơi lệ.",
    correct: "phunghoang",
    explain: "Bi mà không lụy.",
    altText: "Nam Ai làm nhân vật yếu đi.",
    tip: "Bi tráng = Phụng Hoàng"
  },
  {
    title: "Tuyệt vọng đứt ruột",
    text: "Mất người thân, tiếng khóc vang trời.",
    correct: "namai",
    explain: "Tầng bi sâu nhất của Nam Ai.",
    altText: "Phụng Hoàng không đủ độ.",
    tip: "Sụp đổ hoàn toàn = Nam Ai"
  },
  {
    title: "Hồi tưởng trong đêm",
    text: "Nhớ lại quá khứ, buồn man mác.",
    correct: "phunghoang",
    explain: "Buồn nhẹ, trầm lắng.",
    altText: "Nam Ai làm cảnh nặng.",
    tip: "Nhớ – lặng = Phụng Hoàng"
  },
  {
    title: "Tiễn biệt người ra đi",
    text: "Nước mắt chảy nhưng không thành tiếng.",
    correct: "phunghoang",
    explain: "Buồn sâu nhưng kìm.",
    altText: "Nam Ai quá gào.",
    tip: "Khóc thầm = Phụng Hoàng"
  },
  {
    title: "Kêu oan trong ngục",
    text: "Tiếng khóc xé lòng trong ngục tối.",
    correct: "namai",
    explain: "Bi ai bật thành tiếng.",
    altText: "Phụng Hoàng không đủ bi.",
    tip: "Oan + khóc = Nam Ai"
  },
  {
    title: "Trước phút hy sinh",
    text: "Nhân vật bình thản nhìn cái chết.",
    correct: "phunghoang",
    explain: "Bi tráng, không than.",
    altText: "Nam Ai làm mất khí phách.",
    tip: "Chết mà không khóc = Phụng Hoàng"
  },
  {
    title: "Nghe tin dữ",
    text: "Tin dữ ập đến, nhân vật gào khóc.",
    correct: "namai",
    explain: "Cảm xúc vỡ tung.",
    altText: "Phụng Hoàng không đủ.",
    tip: "Tin dữ + gào = Nam Ai"
  },
  {
    title: "Đêm chờ người không về",
    text: "Đêm khuya, lòng buồn sâu kín.",
    correct: "phunghoang",
    explain: "Buồn kéo dài, trầm.",
    altText: "Nam Ai quá bi.",
    tip: "Buồn dai dẳng = Phụng Hoàng"
  },
  {
    title: "Mất con",
    text: "Người mẹ gục xuống, tiếng khóc bật ra.",
    correct: "namai",
    explain: "Bi ai tột cùng.",
    altText: "Phụng Hoàng không đủ lực.",
    tip: "Mất ruột thịt = Nam Ai"
  },
  {
    title: "Giữ lời thề",
    text: "Dù đau, nhân vật không rơi lệ.",
    correct: "phunghoang",
    explain: "Bi mà kiên.",
    altText: "Nam Ai làm yếu nhân vật.",
    tip: "Đau nhưng vững = Phụng Hoàng"
  },
  {
    title: "Gặp lại người xưa",
    text: "Nước mắt trào ra khi gặp lại.",
    correct: "namai",
    explain: "Xúc động bật khóc.",
    altText: "Phụng Hoàng quá nhẹ.",
    tip: "Gặp lại + khóc = Nam Ai"
  },
  {
    title: "Đêm độc thoại",
    text: "Nhân vật tự nói với lòng mình.",
    correct: "phunghoang",
    explain: "Trầm – suy tư.",
    altText: "Nam Ai quá kịch.",
    tip: "Độc thoại = Phụng Hoàng"
  },
  {
    title: "Tiếng khóc cuối",
    text: "Tiếng khóc vang lên trước màn hạ.",
    correct: "namai",
    explain: "Bi ai dâng cao.",
    altText: "Phụng Hoàng không đủ bi.",
    tip: "Cao trào khóc = Nam Ai"
  }
];

let scenes = [];
let index = 0;
let score = 0;
let answered = false;

const titleEl = document.getElementById("scene-title");
const textEl = document.getElementById("scene-text");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

const bgm = document.getElementById("bgm");
bgm.volume = 0.4;
let bgmStarted = false;

const explainEl = document.createElement("div");
explainEl.id = "explain";
document.querySelector(".room").appendChild(explainEl);

const replayBtn = document.createElement("button");
replayBtn.textContent = "🔄 Chơi lại";
replayBtn.style.display = "none";
replayBtn.onclick = startGame;
document.querySelector(".room").appendChild(replayBtn);

startGame();


function startGame() {
  scenes = shuffle([...scenePool]).slice(0, 5);
  index = 0;
  score = 0;
  answered = false;

  replayBtn.style.display = "none";
  document.querySelectorAll("button").forEach(b => b.style.display = "");

  loadScene();
}

function loadScene() {
  const s = scenes[index];
  answered = false;

  titleEl.textContent = `Cảnh ${index + 1} – ${s.title}`;
  textEl.textContent = s.text;

  resultEl.textContent = "";
  explainEl.textContent = "";
  nextBtn.disabled = true;
}

function choose(choice) {
  if (!bgmStarted) {
    bgm.play().catch(() => {});
    bgmStarted = true;
  }

  if (answered) return;

  const s = scenes[index];
  answered = true;

  if (choice === s.correct) {
    score++;
    resultEl.textContent = "✅ Đúng – chọn đúng làn điệu.";
    explainEl.innerHTML = `
      🎭 <b>Phân tích:</b><br>${s.explain}<br>
      <small>💡 ${s.tip}</small>
    `;
  } else {
    resultEl.textContent = "❌ Chưa đúng.";
    explainEl.innerHTML = `
      🎭 <b>Vì sao?</b><br>${s.altText}<br>
      <small>💡 ${s.tip}</small>
    `;
  }

  nextBtn.disabled = false;
}

function nextScene() {
  index++;
  if (index >= scenes.length) {
    finishGame();
  } else {
    loadScene();
  }
}

function finishGame() {
  titleEl.textContent = "🎉 Hoàn thành ván diễn";
  textEl.innerHTML = `
    Bạn đúng <b>${score}/5</b> cảnh.<br><br>
    ${
      score <= 2
        ? "👉 Nhập môn"
        : score <= 4
        ? "👉 Hiểu nghề"
        : "👉 Bản lĩnh sân khấu"
    }
  `;

  resultEl.textContent = "";
  explainEl.innerHTML = `
    🎼 <b>Tổng kết:</b><br>
    Nam Ai = bi ai bật khóc<br>
    Phụng Hoàng = trầm lắng, nén đau
  `;

  document.querySelectorAll("button").forEach(b => {
    if (b !== replayBtn) b.style.display = "none";
  });
  replayBtn.style.display = "block";
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
