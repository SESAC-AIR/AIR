// 슬라이더 1
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

// 슬라이더 2
let curPos2 = 0;
let postion2 = 0;
const IMAGE_WIDTH2 = 640;
const prevBtn2 = document.querySelector(".prev2");
const nextBtn2 = document.querySelector(".next2");
const images2 = document.querySelector(".images2");

function prev2() {
  if (curPos2 > 0) {
    nextBtn2.removeAttribute("disabled");
    postion2 += IMAGE_WIDTH2;
    images2.style.transform = `translateX(${postion2}px)`;
    curPos2 = curPos2 - 1;
  }
  if (curPos2 == 0) {
    prevBtn2.setAttribute("disabled", "true");
  }
}
function next2() {
  if (curPos2 < 3) {
    prevBtn2.removeAttribute("disabled");
    postion2 -= IMAGE_WIDTH2;
    images2.style.transform = `translateX(${postion2}px)`;
    curPos2 = curPos2 + 1;
  }
  if (curPos2 == 3) {
    nextBtn2.setAttribute("disabled", "true");
  }
}

function init2() {
  prevBtn2.setAttribute("disabled", "true");
  prevBtn2.addEventListener("click", prev2);
  nextBtn2.addEventListener("click", next2);
}

init2();

// 슬라이더 3
let curPos3 = 0;
let postion3 = 0;
const IMAGE_WIDTH3 = 640;
const prevBtn3 = document.querySelector(".prev3");
const nextBtn3 = document.querySelector(".next3");
const images3 = document.querySelector(".images3");

function prev3() {
  if (curPos3 > 0) {
    nextBtn3.removeAttribute("disabled");
    postion3 += IMAGE_WIDTH3;
    images3.style.transform = `translateX(${postion3}px)`;
    curPos3 = curPos3 - 1;
  }
  if (curPos3 == 0) {
    prevBtn3.setAttribute("disabled", "true");
  }
}
function next3() {
  if (curPos3 < 3) {
    prevBtn3.removeAttribute("disabled");
    postion3 -= IMAGE_WIDTH3;
    images3.style.transform = `translateX(${postion3}px)`;
    curPos3 = curPos3 + 1;
  }
  if (curPos3 == 3) {
    nextBtn3.setAttribute("disabled", "true");
  }
}

function init3() {
  prevBtn3.setAttribute("disabled", "true");
  prevBtn3.addEventListener("click", prev3);
  nextBtn3.addEventListener("click", next3);
}

init3();

// 슬라이더 4
let curPos4 = 0;
let postion4 = 0;
const IMAGE_WIDTH4 = 640;
const prevBtn4 = document.querySelector(".prev4");
const nextBtn4 = document.querySelector(".next4");
const images4 = document.querySelector(".images4");

function prev4() {
  if (curPos4 > 0) {
    nextBtn4.removeAttribute("disabled");
    postion4 += IMAGE_WIDTH4;
    images4.style.transform = `translateX(${postion4}px)`;
    curPos4 = curPos4 - 1;
  }
  if (curPos4 == 0) {
    prevBtn4.setAttribute("disabled", "true");
  }
}
function next4() {
  if (curPos4 < 4) {
    prevBtn4.removeAttribute("disabled");
    postion4 -= IMAGE_WIDTH4;
    images4.style.transform = `translateX(${postion4}px)`;
    curPos4 = curPos4 + 1;
  }
  if (curPos4 == 4) {
    nextBtn4.setAttribute("disabled", "true");
  }
}

function init4() {
  prevBtn4.setAttribute("disabled", "true");
  prevBtn4.addEventListener("click", prev4);
  nextBtn4.addEventListener("click", next4);
}

init4();

// ------------------------------------------
// 클래스가 move인 a 태그를 눌렀을때 발생되게 하는 이벤트

$(document).ready(function ($) {
  $("move").click(function (event) {
    event.preventDefault();

    $("html,body").animate({ scrollTop: $(this.hash).offset().center }, 500);
  });
});

// $(this.hash) a태그에 있는 해쉬 값으로 스크롤링 되며 이동
// 500 은 스크롤 속도
