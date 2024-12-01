const pupils = document.querySelectorAll('.pupil');
const eyes = document.querySelectorAll('.eye');
const faceContainer = document.querySelector('.face-container');

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
    const maxDistance = eyeRect.width / 4; // Limit movement within the eye
    const distance = Math.min(maxDistance, Math.sqrt(deltaX ** 2 + deltaY ** 2));

    const pupil = pupils[index];
    pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
  });
});
