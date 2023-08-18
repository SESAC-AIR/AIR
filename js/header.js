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
