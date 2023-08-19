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

const swiper = document.querySelector(".swiper1");
const swiperWrapper = swiper.querySelector(".swiper-wrapper");
const slides = swiperWrapper.querySelectorAll(".swiper-slide");

// console.log(slides);

// slides.addEventListener("click", () => {
//   window.location.href = "./history.html"
// });

