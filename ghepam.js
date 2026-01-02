const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let currentAudio = null;
let currentId = null;

function playClick() {
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
    setTimeout(() => o.stop(), 100);
}

function playCorrect() { playClick(); }
function playWrong() { playClick(); }

const audioFiles = {
    'sao-truc': 'assets/tiengsao.mp3',
    'dan-tranh': 'assets/dantranh.mp3',
    'dan-kim': 'assets/dankim.mp3',
};

const sounds = document.querySelectorAll('.sound');
const zones = document.querySelectorAll('.zone');

zones.forEach(z => {
    const offsetX = Math.random() * 30 - 15;  
    const offsetY = Math.random() * 30 - 15;
    const rotate = Math.random() * 10 - 5;    
    z.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`;
});

sounds.forEach(s => {
    s.setAttribute('draggable', true);

    s.addEventListener('dragstart', e => {
        if(audioCtx.state === 'suspended') audioCtx.resume();
        e.dataTransfer.setData('id', s.dataset.target);
        e.dataTransfer.setData('name', s.innerText);
        playClick();
    });

    s.addEventListener('click', () => {
        const id = s.dataset.target;
        if(audioCtx.state==='suspended') audioCtx.resume();
        if(currentId === id) {
            currentAudio?.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
            currentId = null;
            playClick();
            return;
        }
        currentAudio?.pause();
        currentAudio = new Audio(audioFiles[id]);
        currentAudio.play();
        currentId = id;
        playClick();
    });
});

zones.forEach(z => {
    z.addEventListener('dragover', e => e.preventDefault());

    z.addEventListener('drop', e => {
        e.preventDefault();
        if(audioCtx.state==='suspended') audioCtx.resume();

        const id = e.dataTransfer.getData('id');
        const name = e.dataTransfer.getData('name');

        if(z.id === id) {
            z.classList.add('correct');
            playCorrect();

            currentAudio?.pause();
            currentAudio = new Audio(audioFiles[id]);
            currentAudio.play();
            currentId = id;

            z.style.boxShadow = '0 0 15px 5px #33cca5';
            setTimeout(()=> z.style.boxShadow = '', 800);

            if(checkAllDone()) setTimeout(celebrate, 300);

        } else {
            z.classList.add('wrong');
            playWrong();
            z.style.boxShadow = '0 0 15px 5px #ff3b3b';
            setTimeout(() => {
                z.classList.remove('wrong');
                z.style.boxShadow = '';
            }, 1000);
        }
    });
});

function checkAllDone() {
    return [...zones].every(z => z.classList.contains('correct'));
}

function celebrate() {
    const container = document.querySelector('.confetti-container');
    for(let i=0; i<50; i++){
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = `hsl(${Math.random()*360}, 80%, 60%)`;
        confetti.style.left = Math.random()*100 + 'vw';
        confetti.style.width = confetti.style.height = Math.random()*12 + 8 + 'px';
        confetti.style.animationDuration = 2 + Math.random()*2 + 's';
        container.appendChild(confetti);
        setTimeout(()=> confetti.remove(), 4000);
    }
}
