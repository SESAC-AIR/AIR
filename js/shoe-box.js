// imgbox 에 hover 했을 때.hover-wrap을 선택해서 show 클래스 제어
const imgBox = document.querySelectorAll(".img-box");
const hoverWrap = document.querySelectorAll(".hover-wrap");

for (let i = 0; i < 4; i++) {
  imgBox[i].addEventListener("mouseenter", function () {
    hoverWrap[i].classList.add("show");
  });

  imgBox[i].addEventListener("mouseleave", function () {
    hoverWrap[i].classList.remove("show");
  });
}

// heart 누르기
const heartCircles = document.querySelectorAll(".heart-circle");

heartCircles.forEach((heartCircle) => {
  heartCircle.addEventListener("click", function () {
    let heart = this.querySelector("i");
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
  });
});
