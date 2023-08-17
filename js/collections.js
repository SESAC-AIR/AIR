const shoeToggle = document.querySelectorAll(".shoeToggle button");
const lows = document.querySelectorAll(".shoe-box.low");
const highs = document.querySelectorAll(".shoe-box.high");

shoeToggle.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("checked");
    this.querySelector("i").classList.toggle("fa-square-check");
    this.querySelector("i").classList.toggle("fa-square");

    if (this.id === "lowBtn") {
      lows.forEach((shoeBox) => shoeBox.classList.toggle("hide"));
    } else {
      highs.forEach((shoeBox) => shoeBox.classList.toggle("hide"));
    }
  });
});

function collectionVisual() {
  const visualImg = document.querySelector(
    ".colVisual .imgArea .imgWrap:nth-child(2)"
  );
  let i = 1;
  setInterval(function () {
    visualImg.style.backgroundImage = `url("../img/collections/aj${++i}.webp")`;
    if (i > 4) i = 1;
  }, 1000);
}
collectionVisual();
