const createBox = () => {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.position = 'absolute';
  box.style.width = '50px';
  box.style.height = '50px';
  box.style.backgroundColor = randomColor();
  document.body.appendChild(box);
  return box;
};

const randomColor = () => `hsl(${Math.random() * 360}, 60%, 50%)`;
const clamp = (min, value, max) => Math.max(min, Math.min(max, value));

const box = createBox();

let poX = window.innerWidth;
let poY = window.innerHeight;
let velecityX = -1.5;
let velecityY = 0.5;
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const animate = () => {
  const dx = mouseX - poX;
  const dy = mouseY - poY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 100) {
    velecityX = -(dx / 30);
    velecityY = -(dy / 30);
  } else {
    velecityX += (Math.random() - 0.5) * 0.1;
    velecityY += (Math.random() - 0.5) * 0.1;
  }

  velecityX = clamp(-3, velecityX, 3);
  velecityY = clamp(-3, velecityY, 3);

  poX += velecityX;
  poY += velecityY;

  if (poX < -50) {
    poX = window.innerWidth + 50;
    poY = Math.random() * window.innerHeight;
    box.style.backgroundColor = randomColor();
  }

  poX = clamp(0, poX, window.innerWidth - 50);
  poY = clamp(0, poY, window.innerHeight - 50);

  box.style.left = `${poX}px`;
  box.style.top = `${poY}px`;

  requestAnimationFrame(animate);
};

animate();
