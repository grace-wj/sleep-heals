/* sleep-wake switching */

const txtBtn = document.getElementById('txt-btn');
const sun = document.getElementById('sun');
const eyeHighlights = document.getElementById('eye-highlights');
const factTexts = document.querySelectorAll('.fact-text');
const redSleep = "/images/red-sleep.png";
const whiteSleep = "/images/white-sleep.png";
const redWake = "/images/red-wake.png";
const whiteWake = "/images/white-wake.png";
const sleepSun = "/images/sleep-sun.png";
const wakeSun = "/images/wake-sun.png";
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
        sun.src = wakeSun;
        txtBtn.src = whiteSleep;
        txtBtn.classList.remove('wake');
        txtBtn.classList.add('sleep');
        eyeHighlights.classList.remove('hidden');
        factTexts.forEach(fact => {
            fact.classList.remove('show');
        })
        document.body.style.backgroundColor = '#ba9caf';
        sleep = false;
    } else {
        sun.src = sleepSun;
        txtBtn.src = whiteWake;
        txtBtn.classList.remove('sleep');
        txtBtn.classList.add('wake');
        eyeHighlights.classList.add('hidden');
        factTexts.forEach(fact => {
            fact.classList.add('show');
        })
        document.body.style.backgroundColor = '#251f23';
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