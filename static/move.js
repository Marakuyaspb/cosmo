/*const parallax_it = document.querySelector(".parallax_it");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) 

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  	
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    parallax_it.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    })
	})
}, false);*/

const parallax_it = document.querySelector(".parallax_it");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

let timeout;

// Function to handle the rotation logic
const handleRotation = (x, y) => {
  const yValue = calcValue(y, window.innerHeight);
  const xValue = calcValue(x, window.innerWidth);

  parallax_it.style.transform = rotateX(${yValue}deg) rotateY(${xValue}deg);

  [].forEach.call(images, (image) => {
    image.style.transform = translateX(${-xValue}px) translateY(${yValue}px);
  });

  [].forEach.call(backgrounds, (background) => {
    background.style.backgroundPosition = ${xValue * 0.45}px ${-yValue * 0.45}px;
  });
};

// Mouse movement event
document.addEventListener('mousemove', ({ x, y }) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(() => handleRotation(x, y));
}, false);

// Touch event for smartphones
document.addEventListener('touchmove', (event) => {
  const touch = event.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(() => handleRotation(x, y));
}, { passive: true });
