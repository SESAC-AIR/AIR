let curPos = 0;
let postion = 0;
const IMAGE_WIDTH = 640;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function prev() {
  if (curPos > 0) {
    nextBtn.removeAttribute("disabled");
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
  if (curPos == 0) {
    prevBtn.setAttribute("disabled", "true");
  }
}
function next() {
  if (curPos < 3) {
    prevBtn.removeAttribute("disabled");
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
  if (curPos == 3) {
    nextBtn.setAttribute("disabled", "true");
  }
}

function init() {
  prevBtn.setAttribute("disabled", "true");
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}

init();

$(document).ready(function ($) {
  $("move").click(function (event) {
    event.preventDefault();

    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
});

// 클래스가 move인 a 태그를 눌렀을때 발생되게 하는 이벤트

// $(this.hash) a태그에 있는 해쉬 값으로 스크롤링 되며 이동

// 500 은 스크롤 속도
