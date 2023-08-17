// 닉네임 받아오기
const storedName = localStorage.getItem("name");
const nameArea = document.querySelector("#wishlist a span");
const span = document.createElement("span");
let userName = storedName;
if (storedName.length > 4) {
  userName = storedName.slice(0, 4) + "...";
}
span.append(userName);
span.style.fontWeight = "bold";
span.style.marginRight = "0";
nameArea.prepend(span, "님의 ");

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
const header = document.querySelector("header");
const mainMenu = header.querySelector(".main-menu");
const flow = header.querySelector(".flow");

document.addEventListener("scroll", () => {
  if (scrollY > 150) {
    header.style.backdropFilter = "blur(25px)";
    flow.style.display = "none";
  } else {
    header.style.backdropFilter = "blur(25px)";
    flow.style.display = "flex";
  }
});

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
const menuSearch = menuIcon[4];
// console.log(menuSearch);

menuSearch.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

x.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});

// 애니메이션 추가
const section1 = document.querySelector(".section1");
const divs = section1.querySelectorAll("div");

console.log(scrollY);

document.addEventListener("scroll", () => {
  if (scrollY > 340) {
    const three = section1.createElement("div");
    // three.classList.add("threejs-container");
  } else if (scrollY > 2000 || scrollY == 0 || scrollY <= 340) {
    // three.classList.remove("threejs-container");
  }
});
