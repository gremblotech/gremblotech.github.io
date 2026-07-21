const FREESPACE = "TETRIS";

async function getBingoPrompts() {
  const jsonfile = await fetch("scripts/bingoprompts.json");
  const newfile = await jsonfile.json();

  return newfile;
}

function randomBingoArray(prompts) {
  // shuffle
  for (let i = prompts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [prompts[i], prompts[j]] = [prompts[j], prompts[i]];
  }

  // prune
  while (prompts.length > 24) {
    prompts.pop();
  }

  prompts.splice(12, 0, FREESPACE);

  return prompts;
}

function markCell(element) {
  if (element.classList.contains("unmarked-cell")) {
    element.classList.remove("unmarked-cell");
    element.classList.add("marked-cell");
  } else {
    element.classList.remove("marked-cell");
    element.classList.add("unmarked-cell");
  }
}

function throwBoardToDOM(bingoArray) {
  const table = document.querySelector(".board");

  let row;
  let data;

  // yes i know you can avoid nested for with modulo.
  // i don't give a shit! this is easier to read.
  for (let y = 0; y < 5; y++) {
    row = document.createElement("tr");
    row.classList.add("row", `row-${y}`);
    for (let x = 0; x < 5; x++) {
      data = document.createElement("td");
      data.classList.add("cell", `cell-${y * 5 + x}`, "unmarked-cell");
      data.innerHTML = bingoArray[y * 5 + x];
      data.setAttribute("onclick", "markCell(this)");
      row.appendChild(data);
    }
    table.appendChild(row);
  }
}

async function initializeBingoBoard() {
  const prompts = await getBingoPrompts();
  const bingoBoardArray = randomBingoArray(prompts);
  throwBoardToDOM(bingoBoardArray);
}

initializeBingoBoard();
