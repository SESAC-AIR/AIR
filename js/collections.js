// pagination
const colSections = document.querySelectorAll(".colContainer");
const colTit = document.querySelector(".colTit h2 span");
const colIndicator = document.querySelector("#colIndicator");
const pageBtn = colIndicator.querySelectorAll("button");
const listContainer = colIndicator.querySelector(".list-container");
const list = listContainer.querySelector("ul");
const lis = list.querySelectorAll("li");
let lastPage = Number(list.querySelector("li:last-child").innerText);
let thisPage = Number(list.querySelector("li.clicked").innerText);
let listWidth = listContainer.offsetWidth;
let listView = listWidth / 40;

// resize
addEventListener("resize", () => {
  thisPage = Number(list.querySelector("li.clicked").innerText);
  listWidth = listContainer.offsetWidth;
  listView = listWidth / 40;
  // if (thisPage % listView === 0) {
  //   list.style.transform = `translate(${
  //     -listWidth * parseInt(thisPage - 1 / listView)
  //   }px)`;
  // }
  list.style.transform = `translate(${
    -listWidth * parseInt((thisPage - 1) / listView)
  }px)`;
});

lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis[thisPage - 1].classList.remove("clicked");
    this.classList.add("clicked");
    thisPage = Number(this.firstChild.innerText);
    colTit.innerText = thisPage;

    colSections.forEach((col) => {
      col.classList.add("hide");
    });
    colSections[thisPage - 1].classList.remove("hide");
  });
});

pageBtn.forEach((button) => {
  button.addEventListener("click", function () {
    lis[thisPage - 1].classList.remove("clicked");

    if (this.className === "btnLeft" && thisPage > 1) {
      if (thisPage % listView === 1) {
        list.style.transform = `translate(${
          -listWidth * (parseInt(thisPage / listView) - 1)
        }px)`;
      }
      thisPage--;
    } else if (this.className === "btnRight" && thisPage < lastPage) {
      if (thisPage % listView === 0) {
        list.style.transform = `translate(${
          (-listWidth * thisPage) / listView
        }px)`;
      }
      thisPage++;
    }
    lis[thisPage - 1].classList.add("clicked");
    colTit.innerText = thisPage;

    colSections.forEach((col) => {
      col.classList.add("hide");
    });
    colSections[thisPage - 1].classList.remove("hide");
  });
});

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
