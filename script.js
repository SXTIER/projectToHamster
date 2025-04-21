const box = document.createElement('div');
const boxSize = 60;
const boxMargin = 10;

box.style.position = 'absolute';
box.style.bottom = `${boxMargin}px`;
box.style.left = '0px';
box.style.width = `${boxSize}px`;
box.style.height = `${boxSize}px`;
box.style.margin = `${boxMargin}px`;
box.style.borderRadius = '20px';
box.style.backgroundColor = randomColor();
box.style.transition = 'background-color 2.5s ease';

let posX = 0;
let velocityX = 0.5;

function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 80%, 60%)`;
}


function createBubbleEffect() {
  const bubble = document.createElement('div');

  const size = Math.random() * 40 + 10; // 10 ถึง 50px
  const posX = Math.random() * window.innerWidth;
  const duration = Math.random() * 3 + 2; // 2 ถึง 5 วินาที

  bubble.style.position = 'absolute';
  bubble.style.bottom = '-60px'; 
  bubble.style.left = `${posX}px`;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.borderRadius = '50%';
  bubble.style.backgroundColor = randomColor();
  bubble.style.opacity = 0.5;
  bubble.style.pointerEvents = 'none';

  // ฟองน้ำจะลอยขึ้น
  bubble.style.animation = `bubble-animation ${duration}s linear forwards`;

  document.body.appendChild(bubble);

  // ลบฟองน้ำ
  setTimeout(() => {
    bubble.remove();
  }, duration * 1000); //ก้ผ่านไป 1 วิ
}

// animation ฟองน้ำ
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
  @keyframes bubble-animation {
    0% {
      transform: translateY(0);
      opacity: 0.5;
    }
    100% {
      transform: translateY(-${window.innerHeight}px);
      opacity: 0;
    }
  }
  `;
document.head.appendChild(styleSheet);

// สร้างฟองใหม่ทุก 200ms
setInterval(() => {
  createBubbleEffect();
}, 200);
