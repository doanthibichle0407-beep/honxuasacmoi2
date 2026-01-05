const correctSound = new Audio('assets/correct.mp3'); 
const wrongSound = new Audio('assets/wrong.mp3');     

let currentIndex = 0;
let quizData = [];

function loadQuiz(data) {
  quizData = data;
  currentIndex = 0;
  updateProgress();
  loadQuestion();
}

function loadQuestion() {
  if(currentIndex >= quizData.length) return;
  const q = quizData[currentIndex];
  document.getElementById('question').innerText = q.question;
  document.getElementById('A').innerText = q.options[0];
  document.getElementById('B').innerText = q.options[1];
  document.getElementById('C').innerText = q.options[2];
}

function updateProgress() {
  const progress = ((currentIndex) / quizData.length) * 100;
  document.getElementById('progress').style.width = progress + '%';
}

function checkAnswer(ans) {
  if(currentIndex >= quizData.length) return; 

  const correctIndex = quizData[currentIndex].answer;
  const correctId = ['A','B','C'][correctIndex];

  if(ans === correctId) {
    document.getElementById(ans).classList.add("correct");
    correctSound.currentTime = 0;
    correctSound.play();
  } else {
    document.getElementById(ans).classList.add("wrong");
    document.getElementById(correctId).classList.add("correct");
    wrongSound.currentTime = 0;
    wrongSound.play();
  }

  setTimeout(() => {
    ['A','B','C'].forEach(id => {
      document.getElementById(id).classList.remove("correct","wrong");
    });

    currentIndex++;
    if(currentIndex < quizData.length) {
      loadQuestion();
      updateProgress();
    } else {
      document.getElementById('progress').style.width = '100%';
      document.getElementById('result').innerText = "🎉 Hoàn thành!";
    }
  }, 900);
}
if(window.innerWidth <= 768){
  const collapsibles = document.querySelectorAll('.summary-box.collapsible');
  collapsibles.forEach(box => {
    const header = box.querySelector('h3');
    const content = box.querySelector('.content');
    header.addEventListener('click', () => {
      box.classList.toggle('active');
      if(box.classList.contains('active')){
        content.style.maxHeight = content.scrollHeight + 'px';
      }else{
        content.style.maxHeight = 0;
      }
    });
  });
}