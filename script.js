document.getElementById("start").addEventListener("click", () => {
  document.getElementById("container").innerHTML = "";
  let container = document.getElementById("container");
  let gridSize = document.getElementById("gridSize").value;
  let dimension = 960 / gridSize;

  for (let i = 0; i < gridSize; i++) {
    let divRow = document.createElement("div");
    divRow.className = "row";
    divRow.style.height = dimension + "px";

    for (let k = 0; k < gridSize; k++) {
      let divCell = document.createElement("div");
      divCell.className = "cell";
      divCell.id = "cell" + k + i;
      divRow.appendChild(divCell);
      divCell.style.height = "100%";
      divCell.style.width = dimension + "px";
      divCell.style.gridAutoColumns = "auto";
      divCell.onmouseover = mouseHoverColorChange;
    }

    container.appendChild(divRow);
  }

  function mouseHoverColorChange(elementId) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    this.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
  }

  document.getElementsByClassName("row").height = dimension;
});
