const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const balloonBox = document.querySelector('.balloons');
const lanternBox = document.querySelector('.lanterns');
const emojiBox = document.querySelector('.emojis');

let current = 0;
let lastEmojiTime = 0;

const emojis = ['💖','✨','🌸','💫','🎉'];

/* Lanterns */
function createLantern() {
    const l = document.createElement('div');
    l.className = 'lantern';
    l.style.left = Math.random() * 100 + 'vw';
    l.style.animationDuration = 12 + Math.random() * 10 + 's';
    lanternBox.appendChild(l);
    setTimeout(() => l.remove(), 22000);
}
setInterval(createLantern, 1300);

/* Balloons */
function releaseBalloons() {
    for (let i = 0; i < 5; i++) {
        const b = document.createElement('div');
        b.className = 'balloon';
        b.style.left = Math.random() * 100 + 'vw';
        b.style.background =
            `radial-gradient(circle at 30% 30%, #fff, hsl(${Math.random()*360},70%,60%))`;
        balloonBox.appendChild(b);
        setTimeout(() => b.remove(), 4000);
    }
}

/* Emojis (throttled & calm) */
document.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - lastEmojiTime < 120) return; // throttle

    lastEmojiTime = now;

    const em = document.createElement('span');
    em.className = 'emoji';
    em.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    em.style.left = e.clientX + 'px';
    em.style.top = e.clientY + 'px';
    emojiBox.appendChild(em);

    setTimeout(() => em.remove(), 1400);
});

/* Slides */
nextBtn.onclick = () => {
    slides[current].classList.remove('active');
    current++;
    slides[current].classList.add('active');
    releaseBalloons();
    if (current === slides.length - 1) nextBtn.style.display = 'none';
};
