
// 역사 슬라이드 
const swiper1 = new Swiper(".swiper1", {
  // centeredSlides: false,
  loop: false,
  slideToClickedSlide: false,
  slidesPerView: 3,
  spaceBetween: 10,
  navigator: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

// 신발 슬라이드
var slides = document.querySelector(".slides"),
    slide = document.querySelectorAll(".slides li"),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector(".prev"),
    slideWidth = 300,
    slideMargin = 30,
    nextBtn = document.querySelector(".next");

    slides.style.width =(slideWidth + slideMargin) * slideCount - slideMargin + "px";

    function moveSlide(num){
      slides.style.left = -num * 330 + "px";
      currentIdx = num;
    }
    nextBtn.addEventListener("click", () => {
      if(currentIdx < slideCount - 4.5){
        moveSlide(currentIdx + 1);
      }
      else{
        moveSlide(0);
      }
    });

    prevBtn.addEventListener("click", () => {
      if(currentIdx > 0){
        moveSlide(currentIdx - 1);
      }
      else{
        moveSlide(slideCount - 4.5);
      }
    });


//신발 슬라이드 호버 효과
const shoesSlide = document.querySelector(".slides");
const shoesSlides = shoesSlide.querySelectorAll("li");
const hoverBox = shoesSlide.querySelectorAll(".shoes-hover");

// console.log(shoesSlides);
// console.log(hoverBox);

for(let i = 0; i < 10; i++) {
  shoesSlides[i].addEventListener("mouseenter", () => {
    hoverBox[i].style.display = "flex";
  });

  shoesSlides[i].addEventListener("mouseleave", () => {
    hoverBox[i].style.display = "none";
  });
}


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

