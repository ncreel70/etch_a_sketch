let container = document.getElementById("container");
let phoneScreen = window.matchMedia("screen and (max-width: 600px)");
let colorToggle = document.getElementById("colorToggle");
let colorToggleLabel = document.getElementById("slider-label");

document.getElementById("start").addEventListener("click", () => {
  let gridSize = document.getElementById("gridSize").value;
  let dimension = 1 / gridSize;
  document.getElementById("container").innerHTML = "";

  container.style.border = "1px solid black";
  container.style.borderRadius = "50px";

  for (let i = 0; i < gridSize; i++) {
    let divRow = document.createElement("div");
    divRow.className = "row";

    for (let k = 0; k < gridSize; k++) {
      let divCell = document.createElement("div");
      divCell.className = "cell";
      divRow.appendChild(divCell);
      if (phoneScreen.matches) {
        divCell.style.height = dimension * 70 + "vh";
        divCell.style.width = dimension * 100 + "vw";
      } else {
        divCell.style.height = dimension * 100 + "vh";
        divCell.style.width = dimension * 60 + "vw";
      }

      divCell.onmouseover = mouseHoverColorChange;
    }

    container.appendChild(divRow);
  }
});

colorToggle.addEventListener("click", () => {
  if (colorToggle.checked) {
    colorToggleLabel.innerText = "RAINBOW";
  } else {
    colorToggleLabel.innerText = "BLACK";
  }
});

function mouseHoverColorChange(elementId) {
  if (colorToggle.checked) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    this.style.background = `rgb(${r},${g},${b})`;
  } else {
    this.style.background = "black";
  }
}
