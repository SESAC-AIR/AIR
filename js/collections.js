// pagination
function colPagination() {
  const colSection = document.querySelectorAll(".colContainer");
  const colTit = document.querySelector(".colTit h2 span");
  const colIndicator = document.querySelector("#colIndicator");
  const pageBtn = colIndicator.querySelectorAll("button");
  const listContainer = colIndicator.querySelector(".list-container");
  const list = listContainer.querySelector("ul");
  const li = list.querySelectorAll("li");
  let lastPage = Number(list.querySelector("li:last-child").innerText);
  let thisPage = Number(list.querySelector("li.clicked").innerText);
  let listPos = 0;

  pageBtn.forEach((button) => {
    button.addEventListener("click", function () {
      li[thisPage - 1].classList.remove("clicked");

      if (this.className === "btnLeft" && thisPage > 1) {
        if (thisPage % 5 === 1) {
          list.style.transform = `translate(${
            -200 * (parseInt(thisPage / 5) - 1)
          }px)`;
        }
        // 6 -> 40 * 0
        // 11 -> 40 * 1
        // 16 -> 40 * 2
        thisPage--;
      } else if (this.className === "btnRight" && thisPage < lastPage) {
        if (thisPage % 5 === 0) {
          list.style.transform = `translate(${-40 * thisPage}px)`;
        }
        thisPage++;
      }
      li[thisPage - 1].classList.add("clicked");
      colTit.innerText = thisPage;
    });
  });
}
colPagination();

// visual
function colVisual() {
  const visualImg = document.querySelector(
    ".colVisual .imgArea .imgWrap:nth-child(2)"
  );
  let i = 1;
  setInterval(function () {
    visualImg.style.backgroundImage = `url("../img/collections/aj${++i}.webp")`;
    if (i > 4) i = 1;
  }, 1000);
}
colVisual();

// Products
function shoeTypeToggle() {
  const shoeToggleBtn = document.querySelectorAll(".shoeToggle button");
  const lows = document.querySelectorAll(".shoe-box.low");
  const highs = document.querySelectorAll(".shoe-box.high");

  shoeToggleBtn.forEach((button) => {
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
}
shoeTypeToggle();
