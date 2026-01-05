
const questionBank = [
  {
    question: "Vai đào thương trong cải lương thường mang tính cách nào?",
    answers: ["Gian xảo", "Hài hước", "Dịu dàng, nhiều cảm xúc", "Nóng nảy"],
    correct: 2
  },
  {
    question: "Vọng cổ thường được sử dụng khi nào?",
    answers: ["Cảnh đánh nhau", "Cảnh hài", "Cảnh bộc lộ tâm trạng nhân vật", "Cảnh giới thiệu"],
    correct: 2
  },
  {
    question: "Nhân vật Lan – Điệp thuộc kiểu vai nào?",
    answers: ["Đào lẳng – kép hài", "Đào thương – kép văn", "Đào võ – kép võ", "Đào độc – kép độc"],
    correct: 1
  },
  {
    question: "Đặc trưng nổi bật của cải lương là gì?",
    answers: ["Chỉ có thoại", "Kết hợp ca – diễn – nhạc", "Không có âm nhạc", "Chỉ diễn ngoài trời"],
    correct: 1
  },
  {
    question: "Cải lương ra đời và phát triển mạnh ở đâu?",
    answers: ["Miền Bắc", "Miền Trung", "Nam Bộ", "Tây Nguyên"],
    correct: 2
  },
  {
    question: "Xung đột phổ biến nhất trong cải lương là gì?",
    answers: ["Giàu – nghèo", "Tình – hiếu", "Thắng – thua", "Học – làm"],
    correct: 1
  },
  {
    question: "Khi nhân vật ca vọng cổ dài, điều đó thể hiện điều gì?",
    answers: ["Vui vẻ", "Đau khổ, suy nghĩ sâu sắc", "Kéo dài vở diễn", "Giới thiệu bối cảnh"],
    correct: 1
  },
  {
    question: "Điểm khác biệt lớn giữa cải lương và kịch nói là gì?",
    answers: ["Trang phục", "Không gian diễn", "Hình thức ca diễn", "Số lượng diễn viên"],
    correct: 2
  },
  {
    question: "Vì sao cải lương thường có kết thúc buồn?",
    answers: ["Gây sốc", "Phản ánh hiện thực", "Thiếu diễn viên", "Do luật"],
    correct: 1
  },
  {
    question: "Nhân vật cải lương thường được xây dựng như thế nào?",
    answers: ["Hoàn hảo", "Một chiều", "Có nội tâm phức tạp", "Không thay đổi"],
    correct: 2
  },
// 11 → 20
{
  question: "Vì sao vọng cổ dễ chạm đến cảm xúc người nghe?",
  answers: ["Giai điệu nhanh", "Lời ca đơn giản", "Gắn với tâm trạng nhân vật", "Nghe quen tai"],
  correct: 2
},
{
  question: "Điều gì giúp cải lương tồn tại đến ngày nay?",
  answers: ["Sự hoài niệm", "Giá trị nhân văn sâu sắc", "Ít loại hình cạnh tranh", "Luôn giống nhau"],
  correct: 1
},
{
  question: "Nếu không có xung đột tình – hiếu, cải lương sẽ mất đi điều gì?",
  answers: ["Âm nhạc", "Nhân vật", "Chiều sâu cảm xúc", "Thời lượng"],
  correct: 2
},
{
  question: "Cải lương phản ánh điều gì rõ nhất trong xã hội xưa?",
  answers: ["Chiến tranh", "Đạo đức và thân phận con người", "Khoa học", "Kinh tế"],
  correct: 1
},
{
  question: "Theo bạn, cải lương đến gần giới trẻ bằng cách nào?",
  answers: ["Giữ nguyên như cũ", "Chỉ biểu diễn trong rạp", "Kết hợp công nghệ và hình thức mới", "Giảm nội dung"],
  correct: 2
},
{
  question: "Vai kép độc trong cải lương thường mang tính cách nào?",
  answers: ["Xấu xa, gian trá", "Hài hước", "Ngây thơ", "Hiền lành"],
  correct: 0
},
{
  question: "Đào lẳng thường xuất hiện trong các tình huống nào?",
  answers: ["Tình yêu lãng mạn", "Hài kịch", "Chiến tranh", "Công việc"],
  correct: 0
},
{
  question: "Nhạc cụ thường dùng trong cải lương là gì?",
  answers: ["Đàn tranh, đàn bầu", "Piano, guitar", "Saxophone", "Trống trúc"],
  correct: 0
},
{
  question: "Bi kịch trong cải lương thường dựa trên mâu thuẫn nào?",
  answers: ["Tình – hiếu", "Giàu – nghèo", "Sức mạnh – quyền lực", "Hài hước – nghịch ngợm"],
  correct: 0
},
{
  question: "Vọng cổ trong cải lương thường kết hợp với nhạc cụ nào?",
  answers: ["Đàn nguyệt, đàn tranh", "Piano", "Saxophone", "Trống cơm"],
  correct: 0
},

// 21 → 30
{
  question: "Ai là người sáng lập cải lương hiện đại?",
  answers: ["Thanh Tâm", "Nam Lộc", "Cao Văn Lầu", "Út Trà Ôn"],
  correct: 2
},
{
  question: "Cải lương thường lấy cảm hứng từ đâu?",
  answers: ["Đời sống dân gian", "Truyện tranh", "Khoa học", "Thể thao"],
  correct: 0
},
{
  question: "Cách diễn của đào thương tập trung vào yếu tố gì?",
  answers: ["Cảm xúc và nội tâm", "Hành động mạnh", "Hài hước", "Chạy nhảy"],
  correct: 0
},
{
  question: "Khi nào nhân vật hát vọng cổ thường là cảnh nào?",
  answers: ["Cao trào cảm xúc", "Đánh nhau", "Giới thiệu nhân vật", "Hài kịch"],
  correct: 0
},
{
  question: "Điều gì tạo nên sức sống của cải lương?",
  answers: ["Giá trị đạo lý và nhân văn", "Nhạc hiện đại", "Trang phục lộng lẫy", "Khán giả đông"],
  correct: 0
},
{
  question: "Cải lương khác kịch nói ở điểm nào?",
  answers: ["Ca diễn và âm nhạc", "Số lượng diễn viên", "Không gian diễn", "Kịch bản"],
  correct: 0
},
{
  question: "Nhân vật kép văn thường có vai trò gì?",
  answers: ["Hỗ trợ đào thương", "Hài hước", "Độc ác", "Không quan trọng"],
  correct: 0
},
{
  question: "Một vở cải lương thường kéo dài bao lâu?",
  answers: ["2–3 giờ", "30 phút", "5 giờ", "1 giờ"],
  correct: 0
},
{
  question: "Nhân vật trong cải lương thường được xây dựng theo yếu tố nào?",
  answers: ["Cảm xúc – đạo lý – tình cảm", "Thể hình", "Diễn xuất hài", "Trang phục"],
  correct: 0
},
{
  question: "Cải lương miền Nam phát triển mạnh từ thời gian nào?",
  answers: ["Thập niên 1920–1930", "2000", "1950", "1800"],
  correct: 0
},

// 31 → 40
{
  question: "Vọng cổ có thể được trình diễn theo nhiều nhịp nào?",
  answers: ["Nhanh, chậm, trung bình", "Chỉ chậm", "Chỉ nhanh", "Không nhịp"],
  correct: 0
},
{
  question: "Đào độc trong cải lương thường biểu hiện gì?",
  answers: ["Phản diện, gian trá", "Hài hước", "Ngây thơ", "Hiền lành"],
  correct: 0
},
{
  question: "Nhân vật Lan trong Lan và Điệp thuộc loại gì?",
  answers: ["Đào thương", "Đào lẳng", "Kép văn", "Kép độc"],
  correct: 0
},
{
  question: "Điều gì làm cải lương gần gũi khán giả trẻ hiện nay?",
  answers: ["Kết hợp âm nhạc hiện đại và công nghệ", "Giữ nguyên hoàn toàn truyền thống", "Chỉ biểu diễn rạp", "Thêm hoạt hình"],
  correct: 0
},
{
  question: "Cải lương truyền thống thường được trình diễn ở đâu?",
  answers: ["Nhà hát, rạp", "Trên đường phố", "Trên truyền hình trực tiếp", "Trong lớp học"],
  correct: 0
},
{
  question: "Vai kép võ trong cải lương thường thể hiện gì?",
  answers: ["Hành động dũng cảm", "Cảm xúc sâu", "Hài hước", "Độc ác"],
  correct: 0
},
{
  question: "Cải lương kết hợp ba yếu tố nào?",
  answers: ["Ca – diễn – nhạc", "Chạy – nhảy – múa", "Chỉ diễn xuất", "Chỉ ca hát"],
  correct: 0
},
{
  question: "Người biểu diễn cải lương cần kỹ năng gì?",
  answers: ["Ca, diễn, giả giọng", "Chỉ hát", "Chỉ múa", "Chỉ thoại"],
  correct: 0
},
{
  question: "Vở Lan và Điệp nổi bật về điều gì?",
  answers: ["Bi kịch tình yêu", "Hài kịch", "Chiến tranh", "Thể thao"],
  correct: 0
},
{
  question: "Vở cải lương thường có bao nhiêu màn?",
  answers: ["3–5 màn", "1 màn", "10 màn", "Chỉ 2 màn"],
  correct: 0
},

// 41 → 50
{
  question: "Nhạc nền trong cải lương chủ yếu là gì?",
  answers: ["Đàn bầu, đàn tranh, trống", "Guitar", "Piano", "Violin"],
  correct: 0
},
{
  question: "Tác phẩm cải lương thường phản ánh điều gì?",
  answers: ["Đời sống xã hội và đạo lý", "Thể thao", "Khoa học", "Du lịch"],
  correct: 0
},
{
  question: "Nhân vật kép hài trong cải lương thường làm gì?",
  answers: ["Giải trí, tăng kịch tính", "Chỉ ca hát", "Chỉ diễn xuất", "Chỉ nhảy múa"],
  correct: 0
},
{
  question: "Đào thương thường gặp xung đột gì?",
  answers: ["Tình – hiếu", "Giàu – nghèo", "Thắng – thua", "Hài – nghiêm"],
  correct: 0
},
{
  question: "Người sáng tác vọng cổ nổi tiếng là ai?",
  answers: ["Cao Văn Lầu", "Thanh Tâm", "Nam Lộc", "Út Trà Ôn"],
  correct: 0
},
{
  question: "Nhân vật phản diện thường dùng cách nào để gây ấn tượng?",
  answers: ["Diễn xuất mạnh, lời thoại sắc", "Hát vọng cổ vui", "Múa hài", "Chạy nhảy"],
  correct: 0
},
{
  question: "Vì sao vở cải lương thường kết thúc bi kịch?",
  answers: ["Để nhấn mạnh giá trị đạo lý", "Gây sốc", "Thiếu diễn viên", "Nhạc nền"],
  correct: 0
},
{
  question: "Cải lương miền Nam phát triển mạnh nhờ đâu?",
  answers: ["Sáng tác từ dân gian và cải tiến", "Chỉ rạp hát", "Truyền hình", "Không gian học tập"],
  correct: 0
},
{
  question: "Vai đào thương thể hiện cảm xúc qua điều gì?",
  answers: ["Hát vọng cổ, diễn xuất", "Hành động mạnh", "Nhảy múa", "Chỉ thoại"],
  correct: 0
},
{
  question: "Kép văn thường làm gì trong vở?",
  answers: ["Hỗ trợ đào thương, dẫn chuyện", "Độc ác", "Hài hước", "Ngồi yên"],
  correct: 0
},


];


const QUESTIONS_PER_GAME = 10;
let currentQuestion = 0;
let score = 0;


const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


let questions = shuffle([...questionBank]).slice(0, QUESTIONS_PER_GAME);


function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `Câu ${currentQuestion + 1}: ${q.question}`;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });

  progressEl.style.width =
    ((currentQuestion + 1) / QUESTIONS_PER_GAME) * 100 + "%";
}


function checkAnswer(index) {
  const buttons = answersEl.querySelectorAll("button");
  const correctIndex = questions[currentQuestion].correct;

  buttons.forEach(btn => (btn.disabled = true));

  if (index === correctIndex) {
    buttons[index].classList.add("correct");
    score += 10;
    scoreEl.textContent = score;
  } else {
    buttons[index].classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < QUESTIONS_PER_GAME) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }, 800);
}


function endQuiz() {
  document.getElementById("quiz-end-popup").style.display = "flex";

  let message = "";
  if (score >= 80) {
    message = "🌟 Bạn hiểu cải lương rất sâu!";
  } else if (score >= 50) {
    message = "🎭 Bạn có kiến thức cải lương khá tốt!";
  } else {
    message = "🌱 Hãy khám phá cải lương nhiều hơn nhé!";
  }

  document.getElementById("final-score").innerHTML =
    `Bạn đạt <b>${score}</b>/100 điểm<br>${message}`;
}


document.getElementById("close-popup").onclick = () => {
  location.reload(); 
};


loadQuestion();
