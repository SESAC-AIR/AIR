// imgbox 에 hover 했을 때.hover-wrap을 선택해서 show 클래스 제어
const imgBox = document.querySelectorAll(".img-box");
const hoverWrap = document.querySelectorAll(".hover-wrap");

for (let i = 0; i < 5; i++) {
  imgBox[i].addEventListener("mouseenter", function () {
    hoverWrap[i].classList.add("show");
  });

  imgBox[i].addEventListener("mouseleave", function () {
    hoverWrap[i].classList.remove("show");
  });
}

const sw = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 800, //like transition
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//
const modalInfo = [
  {
    enName: "Jordan1",
    koName: "조던1",
    price1: "480,000 원",
    modelNum: "DZ5485-612",
    release: "22/12/01",
    color: "black",
    price2: "200,000 원",
    link: "https://kream.co.kr/products/160097",
    imgs: [
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
    ],
  },
  {
    enName: "Jordan2",
    koName: "조던1",
    price1: "480,000 원",
    modelNum: "DZ5485-612",
    release: "22/12/01",
    color: "black",
    price2: "200,000 원",
    link: "https://kream.co.kr/products/160097",
    imgs: [
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
    ],
  },
  {
    enName: "Jordan3",
    koName: "조던1",
    price1: "480,000 원",
    modelNum: "DZ5485-612",
    release: "22/12/01",
    color: "black",
    price2: "200,000 원",
    link: "https://kream.co.kr/products/160097",
    imgs: [
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
    ],
  },
  {
    enName: "Jordan4",
    koName: "조던1",
    price1: "480,000 원",
    modelNum: "DZ5485-612",
    release: "22/12/01",
    color: "black",
    price2: "200,000 원",
    link: "https://kream.co.kr/products/160097",
    imgs: [
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
    ],
  },
  {
    enName: "Jordan5",
    koName: "조던1",
    price1: "480,000 원",
    modelNum: "DZ5485-612",
    release: "22/12/01",
    color: "black",
    price2: "200,000 원",
    link: "https://kream.co.kr/products/160097",
    imgs: [
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
      "../img/wishlist/에어 조던 로우 SE.webp",
    ],
  },
];

const modalBtn = document.querySelectorAll(".show-modal");
const modalPg = document.querySelector(".modal-details");

const section = document.querySelector("section");
const header = document.querySelector("header");

for (let i = 0; i < 5; i++) {
  modalBtn[i].addEventListener("click", function () {
    modalPg.classList.add("show");
    document.body.style.pointerEvents = "none";
    section.style.filter = "blur(5px) grayscale(100%)";
    header.style.filter = "blur(5px) grayscale(100%)";

    // 객체 정보 넘겨주기
    const productEn = document.querySelector(".product-en");
    const productKo = document.querySelector(".product-ko");
    const price1 = document.querySelector(".price span:nth-child(2)");
    const modelNum = document.getElementById("model-number");
    const releseDate = document.getElementById("release");
    const color = document.getElementById("color");
    const price2 = document.getElementById("price2");
    const link = document.querySelector(".modal-details a");
    const imgSrc = document.querySelectorAll(".modal-left img");

    productEn.innerText = modalInfo[i].enName;
    productKo.innerText = modalInfo[i].koName;
    price1.innerText = modalInfo[i].price1;
    modelNum.innerText = modalInfo[i].modelNum;
    releseDate.innerText = modalInfo[i].release;
    color.innerText = modalInfo[i].color;
    price2.innerText = modalInfo[i].price2;
    link.setAttribute("href", modalInfo[i].link);
    for (let j = 0; j < 5; j++) {
      imgSrc[j].setAttribute("src", modalInfo[i].imgs[j]);
    }
  });
}

const closeModal = document.querySelector(".fa-x");
closeModal.addEventListener("click", function () {
  modalPg.classList.remove("show");
  section.style.filter = "none";
  header.style.filter = "none";
  document.body.style.pointerEvents = "all";
});
