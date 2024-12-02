/* background noise effect */

const lightBackgrounds = ["/images/noise-light-1.jpg", "/images/noise-light-2.jpg", "/images/noise-light-3.jpg", "/images/noise-light-4.jpg"];
const darkBackgrounds = ["/images/noise-dark-1.jpg", "/images/noise-dark-2.jpg", "/images/noise-dark-3.jpg", "/images/noise-dark-4.jpg"];
let backgroundImgs = lightBackgrounds;
let backgroundIndex = 0;
const background = document.getElementById('background-img');

const wakeSunImgs = ["/images/noise-wake-sun-1.png", "/images/noise-wake-sun-2.png", "/images/noise-wake-sun-3.png"];
const sleepSunImgs = ["/images/noise-sleep-sun-1.png", "/images/noise-sleep-sun-2.png", "/images/noise-sleep-sun-3.png"];
let sunImgs = wakeSunImgs;
let sunIndex = 0;
const sun = document.getElementById('sun');

function loopBackground() {
    backgroundIndex = (backgroundIndex + 1) % backgroundImgs.length;
    background.src = backgroundImgs[backgroundIndex];
}
function loopSun() {
    sunIndex = (sunIndex + 1) % sunImgs.length;
    sun.src = sunImgs[sunIndex];
}
const emotionsImgs = ["/images/emotions-1.png", "/images/emotions-2.png"];
const immunityImgs = ["/images/immunity-1.png", "/images/immunity-2.png"];
const memoryImgs = ["/images/memory-1.png", "/images/memory-2.png"];
const metabolismImgs = ["/images/metabolism-1.png", "/images/metabolism-2.png"];
const focusImgs = ["/images/focus-1.png", "/images/focus-2.png"];
const creativityImgs = ["/images/creativity-1.png", "/images/creativity-2.png"];

const emotions = document.getElementById('emotions');
const immunity = document.getElementById('immunity');
const memory = document.getElementById('memory');
const metabolism = document.getElementById('metabolism');
const focusImg = document.getElementById('focus');
const creativity = document.getElementById('creativity');

let textIndex = 0;

function loopText() {
    textIndex = (textIndex + 1) % 2;
    emotions.src = emotionsImgs[textIndex];
    immunity.src = immunityImgs[textIndex];
    memory.src = memoryImgs[textIndex];
    metabolism.src = metabolismImgs[textIndex];
    focusImg.src = focusImgs[textIndex];
    creativity.src = creativityImgs[textIndex];
}

let backgroundInterval = setInterval(loopBackground, 150);
setInterval(loopSun, 150);
setInterval(loopText, 150);

/* sleep-wake switching */

const txtBtn = document.getElementById('txt-btn');
const textImgs = document.querySelectorAll('.text-img');
const eyeHighlights = document.getElementById('eye-highlights');
const redSleep = "/images/red-sleep.png";
const whiteSleep = "/images/white-sleep.png";
const redWake = "/images/red-wake.png";
const whiteWake = "/images/white-wake.png";
sleep = false;

txtBtn.addEventListener('mouseenter', () => {
    if (sleep) {
        txtBtn.src = whiteWake;
    } else {
        txtBtn.src = whiteSleep;
    }
});

txtBtn.addEventListener('mouseleave', () => {
    if (sleep) {
        txtBtn.src = redWake;
    } else {
        txtBtn.src = redSleep;
    }
});

txtBtn.addEventListener('click', () => { 
    if (sleep) {
        sun.src = "/images/noise-wake-sun-1.png";
        sunImgs = wakeSunImgs;
        txtBtn.src = whiteSleep;
        txtBtn.classList.remove('wake');
        txtBtn.classList.add('sleep');
        eyeHighlights.classList.remove('hidden');
        textImgs.forEach(img => {
            img.classList.remove('show');
        });
        clearInterval(backgroundInterval);
        background.style.opacity = 0;
        document.body.style.backgroundColor = '#826f7b';
        setTimeout(() => {
            backgroundImgs = lightBackgrounds;
            background.src = "/images/noise-light-1.jpg";
            backgroundInterval = setInterval(loopBackground, 150);
            background.style.opacity = 1;
        }, 300);

        sleep = false;
    } else {
        sun.src = "/images/noise-sleep-sun-1.png";
        sunImgs = sleepSunImgs;
        txtBtn.src = whiteWake;
        txtBtn.classList.remove('sleep');
        txtBtn.classList.add('wake');
        eyeHighlights.classList.add('hidden');
        textImgs.forEach(img => {
            img.classList.add('show');
        });
        clearInterval(backgroundInterval);
        background.style.opacity = 0;
        document.body.style.backgroundColor = '#251f23';
        setTimeout(() => {
            backgroundImgs = darkBackgrounds;
            background.src = "/images/noise-dark-1.jpg";
            backgroundInterval = setInterval(loopBackground, 175);
            background.style.opacity = 1;
        }, 300);

        sleep = true;
    }
});

/* eye tracking */

const pupils = document.querySelectorAll('.pupil');
const eyes = document.querySelectorAll('.eye');
const faceContainer = document.getElementById('sun-container');

faceContainer.addEventListener('mousemove', (e) => {
  const rect = faceContainer.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  eyes.forEach((eye, index) => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2 - rect.left;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2 - rect.top;

    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const maxDistance = eyeRect.width / 4;
    const distance = Math.min(maxDistance, Math.sqrt(deltaX ** 2 + deltaY ** 2));

    const pupil = pupils[index];
    pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
  });
});