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
    enName: "Jordan 1 Low SE",
    koName: "에어 조던 1 로우 SE",
    price1: "139,000 원",
    modelNum: "FN8901-164",
    release: "23/07/26",
    color: "WHITE/GAME ROYAL/ICE",
    price2: "159,000 원",
    link: "https://kream.co.kr/products/160097",
    imgs: [
      "../img/wishlist/modal-info/modal 1_에어 조던 1 로우 SE(1).webp",
      "../img/wishlist/modal-info/modal 1_에어 조던 1 로우 SE(2).webp",
      "../img/wishlist/modal-info/modal 1_에어 조던 1 로우 SE(3).webp",
      "../img/wishlist/modal-info/modal 1_에어 조던 1 로우 SE(4).webp",
      "../img/wishlist/modal-info/modal 1_에어 조던 1 로우 SE(5).webp",
    ],
  },
  {
    enName: "Jordan 1 Mid",
    koName: "에어 조던 1 미드 ",
    price1: "250,000 원",
    modelNum: "554725-074",
    release: "20/10/24",
    color: "BLACK/GYM RED-WHITE",
    price2: "109,000 원",
    link: "https://kream.co.kr/products/26133",
    imgs: [
      "../img/wishlist/modal-info/modal 2_에어 조던 1 미드(1).webp",
      "../img/wishlist/modal-info/modal 2_에어 조던 1 미드(2).webp",
      "../img/wishlist/modal-info/modal 2_에어 조던 1 미드(3).webp",
      "../img/wishlist/modal-info/modal 2_에어 조던 1 미드(4).webp",
      "../img/wishlist/modal-info/modal 2_에어 조던 1 미드(5).webp",
    ],
  },
  {
    enName: "Jordan 6 Retro",
    koName: "에어 조던 6 레트로",
    price1: "160,000 원",
    modelNum: "CT8529-100",
    release: "23/02/04",
    color: "WHITE/MEDIUM GREY/COOL GREY",
    price2: "249,000 원",
    link: "https://kream.co.kr/products/96963",
    imgs: [
      "../img/wishlist/modal-info/modal 3_에어 조던 6 레트로(1).webp",
      "../img/wishlist/modal-info/modal 3_에어 조던 6 레트로(2).webp",
      "../img/wishlist/modal-info/modal 3_에어 조던 6 레트로(3).webp",
      "../img/wishlist/modal-info/modal 3_에어 조던 6 레트로(4).webp",
      "../img/wishlist/modal-info/modal 3_에어 조던 6 레트로(5).webp",
    ],
  },
  {
    enName: "Jordan Nu Retro 1 Low",
    koName: "조던 누 레트로 1 로우",
    price1: "116,000 원",
    modelNum: "DV5141-106",
    release: "-",
    color: "WHITE/LIGHT SMOKE",
    price2: "129,000 원",
    link: "https://kream.co.kr/products/120764",
    imgs: [
      "../img/wishlist/modal-info/modal 4_조던 누 레트로 1 로우(1).webp",
      "../img/wishlist/modal-info/modal 4_조던 누 레트로 1 로우(2).webp",
      "../img/wishlist/modal-info/modal 4_조던 누 레트로 1 로우(3).webp",
      "../img/wishlist/modal-info/modal 4_조던 누 레트로 1 로우(4).webp",
      "../img/wishlist/modal-info/modal 4_조던 누 레트로 1 로우(5).webp",
    ],
  },
  {
    enName: "Jordan Sophia",
    koName: "조던 소피아",
    price1: "99,000 원",
    modelNum: "DO8863-300",
    release: "-",
    color: "PISTACHIO FROST/WHITE/BARE",
    price2: "109,200 원",
    link: "https://kream.co.kr/products/113379",
    imgs: [
      "../img/wishlist/modal-info/modal 5_조던 소피아(1).webp",
      "../img/wishlist/modal-info/modal 5_조던 소피아(2).webp",
      "../img/wishlist/modal-info/modal 5_조던 소피아(3).webp",
      "../img/wishlist/modal-info/modal 5_조던 소피아(4).webp",
      "../img/wishlist/modal-info/modal 5_조던 소피아(5).webp",
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
