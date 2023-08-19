const swiper1 = new Swiper(".swiper1", {
  // centeredSlides: false,
  loop: true,
  slideToClickedSlide: true,
  slidesPerView: 3,
  spaceBetween: 10,
});

const swiper2 = new Swiper(".swiper2", {
  // centeredSlides: false,
  loop: true,
  slideToClickedSlide: true,
  slidesPerView: 4,
  spaceBetween: 40,
});

// const swiper3 = new Swiper(".swiper3", {
//     // centeredSlides: false,
//     loop: true,
//     // slideToClickedSlide: true,
//     slidesPerView: 7.5,
//     spaceBetween: 220,
//     autoplay: true,
//     speed: 5000,
//     // delay: 0,
// });

// 헤더 부분 배경 및 flow 삭제
// const header = document.querySelector("header");
// const mainMenu = header.querySelector(".main-menu");
// const flow = header.querySelector(".flow");

// document.addEventListener("scroll", () => {
//   if (scrollY > 150) {
//     header.style.backdropFilter = "blur(25px)";
//     flow.style.display = "none";
//   } else {
//     header.style.backdropFilter = "blur(25px)";
//     flow.style.display = "flex";
//   }
// });

// search 모달창

const modalSearch = document.querySelector(".modal-search");
const x = modalSearch.querySelector(".fa-xmark");
const search = modalSearch.querySelector(".search");
const field = search.querySelector(".field");
const inputSearch = field.querySelector("input[type='search']");
// console.log(inputSearch);
const hashtag = modalSearch.querySelector("p");
// const hashTag = field.querySelector(".hash-tag");
inputSearch.addEventListener("focus", function () {
  hashtag.style.display = "block";
  // console.log(this);
});

inputSearch.addEventListener("focusout", function () {
  hashtag.style.display = "none";
  // console.log(this);
});

const menu = document.querySelector(".menu");
const menuIcon = menu.querySelectorAll("li");
const menuSearch = menuIcon[3];
// console.log(menuSearch);

menuSearch.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

x.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});

// 애니메이션 추가
const shoes = document.querySelector(".threejs-container");
shoes.style.transition = "1s";

document.addEventListener("scroll", () => {
    if (scrollY >= 0 && scrollY < 1490) {
        shoes.classList.add("threejs-container");
        shoes.style.opacity = 1;
    }else if(scrollY >= 1490){
        shoes.style.opacity = 0;
        shoes.classList.remove("threejs-container");
}
});

// section1 애니메이션

// 마이클 조던
gsap.to(".img1", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    scrub: 1,
  },
  rotate: -45,
  x: -100,
  y: -300,
  opacity: 0,
});

gsap.to(".img2", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    scrub: 1,
  },
  rotate: 45,
  x: 100,
  y: -300,
  opacity: 0,
});

// content-title opacity 효과
gsap.to(".section1-title", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    scrub: 1,
  },
  y: -200,
  opacity: 0,
});

// 텍스트 opacity 효과

gsap.from(".content1", {
  scrollTrigger: {
    trigger: ".section1",
    start: "0% top",
    end: "10% top",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  y: -100,
});

gsap.from(".content2", {
  scrollTrigger: {
    trigger: ".section1",
    start: "30% top",
    end: "40% top",
    scrub: 1,
  },
  opacity: 0,
  x: 400,
  // y: 100,
});

gsap.from(".content3", {
  scrollTrigger: {
    trigger: ".section1",
    start: "50% top",
    end: "60% top",
    scrub: 1,
  },
  opacity: 0,
  x: -400,
  // y: 100,
});
