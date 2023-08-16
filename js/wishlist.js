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
