const colors = ['#ffe5ec', '#ffc2d1', '#ffb3c6', '#ff8fab', '#fb6f92'];
const circles = [];
const numCircles = 50;

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// 初始化圓的資料
for (let i = 0; i < numCircles; i++) {
  const size = Math.random() * (120 - 20) + 20; // 圓的大小 20~120
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const speedX = (Math.random() - 0.5) * 2; // X 軸速度
  const speedY = (Math.random() - 0.5) * 2; // Y 軸速度
  circles.push({ x, y, size, color, speedX, speedY });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除畫布
  for (const circle of circles) {
    // 更新圓的位置
    circle.x += circle.speedX;
    circle.y += circle.speedY;

    // 邊界檢查，讓圓反彈
    if (circle.x - circle.size / 2 < 0 || circle.x + circle.size / 2 > canvas.width) {
      circle.speedX *= -1;
    }
    if (circle.y - circle.size / 2 < 0 || circle.y + circle.size / 2 > canvas.height) {
      circle.speedY *= -1;
    }

    // 繪製圓
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = circle.color;
    ctx.fill();
  }

  requestAnimationFrame(draw); // 繼續動畫
}

draw(); // 開始繪製

