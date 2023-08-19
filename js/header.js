// 닉네임 받아오기
const storedName = localStorage.getItem("name");
const nameArea = document.querySelector("#wishlist a span");
const span = document.createElement("span");
let userName = storedName;
if (storedName.length > 8) {
  userName = storedName.slice(0, 8) + "...";
}
span.append(userName);
span.style.fontWeight = "bold";
span.style.marginRight = "0";
nameArea.prepend(span, "님의 ");


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
