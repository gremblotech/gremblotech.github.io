const FREESPACE = "TETRIS";

async function getBingoPrompts() {
  const jsonfile = await fetch("scripts/bingoprompts.json");
  const res = await jsonfile.json();

  return res;
}

function makeBingoString(prompts) {
  let numbers = new Uint8Array(prompts.length);
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i;
  }

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  while (numbers.length > 24) {
    numbers.pop();
  }

  localStorage.setItem("activeCells", 0); // bithacks incoming

  let res = numbers.toBase64({ omitPadding: true });
  localStorage.setItem("bingoString", res);
  return res;
}

function bingoArrayFromString(string, prompts) {
  let numbers = Uint8Array.fromBase64(string);
  let res = new Array(24);

  for (let i = 0; i < res.length; i++) {
    res[i] = prompts[numbers[i]];
  }

  res.splice(12, 0, FREESPACE);

  return res;
}

function markCell() {
  let actives = parseInt(localStorage.getItem("activeCells"));
  let idx = parseInt(this.id);
  if (this.classList.contains("unmarked-cell")) {
    this.classList.remove("unmarked-cell");
    this.classList.add("marked-cell");
    actives += 1 << idx;
  } else {
    this.classList.remove("marked-cell");
    this.classList.add("unmarked-cell");
    actives -= 1 << idx;
  }
  localStorage.setItem("activeCells", actives);
}

function throwBoardToDOM(bingoArray) {
  const table = document.querySelector(".board");
  let actives = parseInt(localStorage.getItem("activeCells"));

  let row;
  let data;

  // yes i know you can avoid nested for with modulo.
  // i don't give a shit! this is easier to read.
  for (let y = 0; y < 5; y++) {
    row = document.createElement("tr");
    row.classList.add("row", `row-${y}`);
    for (let x = 0; x < 5; x++) {
      data = document.createElement("td");
      data.classList.add("cell");
      data.id = `${y * 5 + x}`;
      if (((actives >> (y * 5 + x)) & 1) === 1) {
        data.classList.add("marked-cell");
      } else {
        data.classList.add("unmarked-cell");
      }

      data.innerHTML = bingoArray[y * 5 + x];
      data.addEventListener("click", markCell);
      row.appendChild(data);
    }
    table.appendChild(row);
  }
}

async function initializeBingoBoard() {
  const prompts = await getBingoPrompts();

  let bingoString = localStorage.getItem("bingoString")
    ? localStorage.getItem("bingoString")
    : null;
  if (!bingoString) bingoString = makeBingoString(prompts);

  const bingoBoardArray = bingoArrayFromString(bingoString, prompts);
  throwBoardToDOM(bingoBoardArray);
}

initializeBingoBoard();
