
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTone(freq = 440, type = 'sine', dur = 0.15, gain = 0.06){
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.value = gain;
  o.connect(g); g.connect(audioCtx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
  setTimeout(()=> o.stop(), dur*1000 + 20);
}
function playCorrect(){ playTone(880,'sine',0.14,0.09); playTone(1320,'triangle',0.12,0.04); }
function playWrong(){ playTone(220,'sawtooth',0.18,0.08); }
function playClick(){ playTone(520,'sine',0.08,0.05); }

const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');
tabBtns.forEach(b => b.addEventListener('click', () => {
  tabBtns.forEach(x=>x.classList.remove('active'));
  panels.forEach(p=>p.classList.remove('active'));
  b.classList.add('active');
  document.getElementById(b.dataset.tab).classList.add('active');
  playClick();
}));

const quiz = [
  { q:"Nhạc cụ nào âm thanh trong, thường dùng để gảy?", a:["Đàn Tranh","Trống","Kèn"], c:0 },
  { q:"Nhạc cụ thổi làm từ tre?", a:["Đàn Tranh","Sáo Trúc","Đàn Kìm"], c:1 },
  { q:"Nhạc cụ dùng để đánh nhịp, âm trầm?", a:["Sáo Trúc","Đàn Tranh","Trống"], c:2 },
  { q:"Nhạc cụ nào thường xuất hiện trong vọng cổ?", a:["Sáo Trúc","Đàn Tranh","Trống"], c:1 }
];
let qi = 0, score = 0;
const qText = document.getElementById('q-text');
const qAnswers = document.getElementById('q-answers');
const qResult = document.getElementById('q-result');
const qCount = document.getElementById('q-count');
const qScore = document.getElementById('q-score');
const qProgress = document.getElementById('q-progress');

function loadQ(){
  const item = quiz[qi];
  qText.innerText = item.q;
  qAnswers.innerHTML = '';
  item.a.forEach((t,i)=>{
    const btn = document.createElement('button');
    btn.innerText = t;
    btn.onclick = ()=> checkQ(i);
    qAnswers.appendChild(btn);
  });
  qCount.innerText = `Câu ${qi+1} / ${quiz.length}`;
  qProgress.style.width = `${(qi/quiz.length)*100}%`;
  qResult.innerText = '';
}
function checkQ(i){
  if(audioCtx.state === 'suspended') audioCtx.resume();
  const correct = quiz[qi].c;
  if(i === correct){
    qResult.innerText = '✔ Chính xác!';
    qResult.style.color = '#a4ff9c';
    playCorrect();
    score++;
    qScore.innerText = `Điểm: ${score}`;
  } else {
    qResult.innerText = `✘ Sai! Đáp án: ${quiz[qi].a[correct]}`;
    qResult.style.color = '#ff9c9c';
    playWrong();
  }
  setTimeout(()=>{
    qi++;
    if(qi >= quiz.length){
      qText.innerText = '🎉 Quiz kết thúc!';
      qAnswers.innerHTML = '';
      qProgress.style.width = '100%';
      qResult.innerText = `Bạn đúng ${score} / ${quiz.length} câu.`;
      qResult.style.color = '#e7d68d';
    } else loadQ();
  },800);
}
loadQ();

const drags = document.querySelectorAll('.drag');
const drops = document.querySelectorAll('.drop');

drags.forEach(d=>{
  d.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('text/plain', d.dataset.id);
    e.dataTransfer.setData('name', d.innerText);
    playClick();
  });
});

drops.forEach(drop=>{
  drop.addEventListener('dragover', e => e.preventDefault());
  drop.addEventListener('drop', e => {
    e.preventDefault();
    if(audioCtx.state === 'suspended') audioCtx.resume();
    const id = e.dataTransfer.getData('text/plain');
    const name = e.dataTransfer.getData('name') || '';
    drops.forEach(x=>{ x.classList.remove('correct','wrong'); x.innerText = 'Kéo vào đây'; x.style.pointerEvents='auto'; });
    if(drop.id === id){
      drop.classList.add('correct');
      drop.innerHTML = `✔ ${name}`;
      playCorrect();
      const dragged = Array.from(drags).find(x=>x.dataset.id===id);
      if(dragged) dragged.style.opacity = '0.4', dragged.draggable = false;
    } else {
      drop.classList.add('wrong');
      drop.innerHTML = `✘ Sai rồi!`;
      playWrong();
    }
  });
});

const select = document.getElementById('select-instrument');
const addBtn = document.getElementById('add-instr');
const stageArea = document.getElementById('stage-area');

addBtn.addEventListener('click', ()=>{
  if(audioCtx.state === 'suspended') audioCtx.resume();
  const val = select.value;
  if(!val) return;
  playTone(880,'triangle',0.12,0.06); 
  const card = document.createElement('div');
  card.className = 'instr-card';
  card.innerText = val;
  stageArea.querySelectorAll('.stage-empty')?.forEach(n=>n.remove());
  stageArea.appendChild(card);
  card.animate([{boxShadow:'0 8px 22px rgba(181,142,35,0.08)'},{boxShadow:'0 14px 46px rgba(126,240,255,0.16)'}], {duration:600, direction:'alternate'});
});

document.addEventListener('click', function initAudioOnce(){
  if(audioCtx.state === 'suspended') audioCtx.resume();
  document.removeEventListener('click', initAudioOnce);
});

let items = document.querySelectorAll(".sound");
let zones = document.querySelectorAll(".zone");

items.forEach(item => {
    item.addEventListener("dragstart", dragStart);
});

zones.forEach(zone => {
    zone.addEventListener("dragover", e => e.preventDefault());
    zone.addEventListener("drop", dropItem);
});

function dragStart(e) {
    e.dataTransfer.setData("item", e.target.dataset.target);
    e.dataTransfer.setData("name", e.target.innerText);
}

function dropItem(e) {
    let correct = e.dataTransfer.getData("item");
    let name = e.dataTransfer.getData("name");

    if (e.target.id === correct) {
        e.target.innerHTML = "✔ " + name;
        e.target.classList.add("correct");
        e.target.classList.remove("wrong");
    } else {
        e.target.innerHTML = "✘ Sai rồi!";
        e.target.classList.add("wrong");
        e.target.classList.remove("correct");
    }
}
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("namaiGameBtn");
  const unlocked = localStorage.getItem("namaiPhunghoangUnlocked");
  if (unlocked === "true") {
    btn.classList.remove("locked");
    btn.style.pointerEvents = "auto";
    btn.style.opacity = "1";
  }
});