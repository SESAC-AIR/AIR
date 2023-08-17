const sendName = document.querySelector("#sendName");
const userName = sendName.querySelector("input");
const sendBtn = sendName.querySelector("button");

sendBtn.addEventListener("click", function () {
  if (userName.value) {
    localStorage.setItem("name", userName.value);
    location.href = "./html/main.html";
  } else {
    const findP = sendName.querySelector("p");
    if (!findP) {
      const p = document.createElement("p");
      p.style.color = "#aaa";
      p.style.fontSize = "12px";
      p.style.margin = "10px";
      p.innerHTML =
        "닉네임을 다시 입력해주세요.<br /> 원하지 않으시면 오른쪽 상단의 '건너뛰기'를 이용해주세요.";
      sendName.append(p);
    }
  }
});

// Canvas
// Initial Setup
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.background = "#111";

// Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};
const colors = [
  "#ECE5D2",
  "#D34B53",
  "#D96269",
  "#E48F94",
  "#EFBCBF",
  "#FAE9EA",
  "#fcba03",
  "#0384fc",
  "#04e05c",
];

const logos = [
  "m9.3,22.55c-.3.09-.54.17-.78.25-.1.03-.19.06-.3.04-.08-.02-.18-.03-.19-.13-.01-.1.06-.15.14-.18.12-.05.23-.1.35-.15.04-.02.09-.04.12-.12-.22.05-.41.11-.61.13-.28.03-.56-.04-.84-.1-.08-.02-.13-.07-.12-.15,0-.1.08-.1.16-.11.59-.03,1.14-.14,1.66-.46.23-.14.36-.38.56-.55.35-.29.56-.67.74-1.08.4-.93.95-1.76,1.63-2.51.06-.07.1-.14.13-.23.1-.37.28-.69.54-.96.05-.05.09-.1.12-.16.22-.49.51-.94.78-1.4.19-.33.45-.55.84-.65.26-.07.44-.3.57-.54.12-.22.1-.39-.12-.56-.55-.45-.71-1.04-.44-1.69.28-.68.79-1.12,1.55-1.17.37-.03.71.11.99.39.21.21.42.41.73.48.1.02.19.08.19.19-.02.2.12.33.23.51.13-.3.36-.49.58-.69.05-.05.06-.13.09-.19.14-.51.28-1.02.47-1.51.03-.09.03-.18.03-.27,0-.17-.03-.35.05-.5.21-.36.28-.75.37-1.14.06-.27.15-.54.23-.81.03-.11.06-.22.17-.28.05-.03.06-.09.07-.14.11-.45.22-.91.32-1.36.03-.15,0-.31-.03-.46-.09-.42-.35-.77-.5-1.17-.25-.66-.4-1.33-.04-2.02.38-.73,1.2-1.18,1.98-1.06.91.14,1.55.77,1.69,1.64.18,1.16-.69,2.21-1.86,2.25-.22,0-.24.03-.15.22.08.16.06.33.02.49-.14.49-.15.99-.2,1.49s.05,1.01-.07,1.51c-.06.25-.08.51-.31.69-.04.03-.05.09-.06.15-.1.55-.22,1.11-.45,1.62-.05.1-.03.23-.06.33-.21.92-.13,1.9-.6,2.77-.04.07-.06.16-.08.24-.06.26-.05.52,0,.78.1.52.2,1.04.5,1.49.19.29.29.62.32.96.1,1.19.11,2.38-.21,3.55-.02.08-.02.14.01.21.03.05.05.11.07.17.08.27.23.47.51.58.16.06.29.19.4.33.17.2.22.43.11.67-.07.15-.01.19.11.26.45.22.91.43,1.35.67.75.4,1.37.95,1.97,1.55.09.09.18.15.3.17.24.03.44.14.64.27,1.58.99,3.07,2.11,4.48,3.33.32.28.63.57,1,.79.11.06.09.15.05.25-.06.17.08.36.25.33.11-.02.18.02.26.08.27.2.32.13.62,0,.33-.15.56-.52.97-.5.08,0,.18-.03.21.08.03.1-.07.13-.14.15-.42.12-.6.46-.83.8.15.06.28,0,.4.01.43.05.86.07,1.29.01.17-.02.31-.09.44-.19.15-.1.31-.21.48-.28.27-.12.55-.07.76.14.14.14.15.21.02.35-.32.32-.64.64-.98.95-.42.39-.89.71-1.39.98-.33.18-.63.42-.9.68-.15.14-.31.26-.49.37-.17.1-.26.08-.36-.09-.12-.19-.23-.38-.31-.59-.08-.21-.22-.36-.35-.53-.31-.41-.69-.76-1.03-1.14-.12-.13-.26-.23-.4-.33-.03-.02-.07-.03-.1-.03-.27.04-.48-.09-.67-.24-.36-.27-.73-.55-1.09-.83-.08-.06-.16-.1-.26-.12-.24-.06-.45-.19-.64-.35-.45-.34-.9-.68-1.34-1.03-.51-.42-1.08-.76-1.68-1.03-.33-.15-.71-.22-1.08-.27-.68-.09-1.3-.33-1.93-.6-.81-.35-1.61-.73-2.48-.95-.35-.09-.69-.21-1-.4-.21-.14-.41-.13-.63-.02-.81.4-1.58.85-2.37,1.28-.79.43-1.6.81-2.43,1.16-.08.04-.16.08-.23.13-1.01.78-2.08,1.45-3.23,2.01-.21.1-.4.27-.59.41-.46.34-.93.66-1.35,1.05-.09.09-.2.12-.31.06-.11-.05-.21-.03-.3.05-.19.19-.46.21-.68.33-.1.05-.18.12-.23.22-.01.02-.02.05-.04.06-.29.12-.39.4-.55.64-.06.09-.15.14-.25.17-.14.03-.21.12-.29.22-.11.17-.23.33-.37.48-.21.24-.48.3-.77.22-.33-.09-.62-.03-.91.14-.4.23-.92.17-1.27-.14-.22-.19-.39-.42-.55-.66-.14-.22-.12-.41.07-.6.21-.2.43-.34.73-.37.33-.03.67-.06.97-.22.23-.11.49-.1.71-.23.07-.04.13-.08.14-.17.04-.23.15-.31.4-.32.09,0,.06-.06.05-.09-.09-.21-.05-.44-.16-.64-.03-.05-.02-.12,0-.18.02-.06.06-.13.13-.14.08-.01.12.05.15.11.07.12.08.26.11.4.02.08.03.18.13.19.11.02.15-.08.19-.15.03-.05.05-.11.08-.16.1-.16.21-.18.36-.07.05.03.09.12.16.05.06-.06.18-.09.13-.22-.04-.1.01-.18.09-.23.21-.15.37-.34.54-.53,1.21-1.31,2.65-2.28,4.27-2.99.18-.08.33-.17.46-.32.21-.25.51-.38.83-.42.1-.01.17-.05.23-.14.6-.91,1.37-1.66,2.25-2.3.08-.06.14-.13.19-.21.1-.18.26-.28.46-.34.4-.11.69-.4.64-.83-.02-.21-.01-.43,0-.65.02-.36.19-.71.6-.77.18-.03.21-.22.32-.32.13-.12.14-.24.08-.4-.05-.1-.08-.22-.1-.33-.05-.24-.08-.49-.28-.68-.04-.04-.08-.12-.08-.18,0-.29-.19-.48-.33-.7-.06-.1-.12-.21-.19-.31-.1-.16-.29-.16-.37,0-.08.15-.19.28-.37.32-.14.04-.21.12-.26.24-.23.53-.5,1.03-.93,1.41-.22.2-.45.4-.72.54-.31.18-.51.44-.69.74-.14.24-.26.5-.34.77-.05.16-.07.31-.03.48.02.08.02.15,0,.23-.04.19.03.3.21.35.01,0,.03,0,.04,0,.13.03.28.06.25.24-.03.17-.18.21-.32.2-.24-.01-.46-.07-.63-.27-.11-.13-.24-.13-.35,0-.09.1-.17.22-.25.33-.09.11-.19.2-.33.22-.15.03-.23-.05-.19-.21.03-.09.08-.17.14-.31h0Z",
  "m5.29,17.1c-1.43-.06-2.6-.45-3.52-1.18-.17-.14-.59-.56-.73-.73-.37-.47-.62-.92-.79-1.42C-.26,12.22,0,10.18,1.02,7.95c.87-1.91,2.21-3.81,4.54-6.43.34-.39,1.37-1.52,1.38-1.52,0,0-.05.1-.12.21-.61,1.02-1.13,2.22-1.41,3.25-.45,1.66-.4,3.09.16,4.2.39.76,1.05,1.42,1.8,1.79,1.31.64,3.22.69,5.55.15.16-.04,8.12-2.15,17.69-4.7C40.17,2.37,48,.29,48,.29c0,0-22.23,9.52-33.77,14.45-1.83.78-2.32.98-3.18,1.28-2.2.77-4.16,1.14-5.76,1.08h0Z",
];

let particlesLenght = 18;

// Event Listeners
addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors(Math.floor(Math.random() * colors.length));
}

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.path = new Path2D(logos[Math.round(Math.random() * 1)]);
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() + 2.5,
    };
    this.radius = radius;
    this.color = color;

    this.mass = 1;
    this.angle = Math.random() * 360;
    this.spin = Math.random() < 0.5 ? -1 : 1;
    this.step = 0;
    this.speed = 0.01;
  }
  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(((this.angle * Math.PI) / 360) * this.spin);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.fillStyle = "black";
    context.fill(this.path);
    context.closePath();
    context.restore();
  }

  update() {
    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
      this.velocity.x = -this.velocity.x;
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
      this.velocity.y = -this.velocity.y;
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.angle++;
  }
}

// Implementation
let particles;

function init() {
  particles = [];

  for (let i = 0; i < particlesLenght; i++) {
    const radius = Math.random() * 40 + 60;

    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);

    let color = Math.floor(Math.random() * colors.length);

    particles.push(new Particle(x, y, radius, colors[color]));
  }
}
init();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  // draw
  particles.forEach((e) => {
    e.draw(context);
    e.update();
  });
}
animate();
