const GRAVITYTABLE = [
  [0],
  [0],
  [0],
  [0],
  [0],
  [0],
  [0],
  [0],
  [0],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // 9
  [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3], // 10
  [2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3], // 11
  [2, 3, 3, 2, 3, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2, 3, 3], // 12
  [2, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 3, 2, 3], // 13
  [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3], // 14
  [2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3], // 15
  [2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2], // 16
  [2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2], // 17
  [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2], // 18
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 19
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 20
  [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2], // 21
  [1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2], // 22
  [1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2], // 23
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], // 24
  [1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2], // 25
  [1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1], // 26
  [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1], // 27
  [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1], // 28
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 29
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 30
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 31
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], // 32
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1], // 33
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1], // 34
  [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1], // 35
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1], // 36
  [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1], // 37
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], // 38
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 39
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1], // 40
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1], // 41
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], // 42
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], // 43
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], // 44
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0], // 45
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 46
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 47
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 48
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 49
]; // index 0 is top of field

const MOVEMENTTABLE = [
  [25, 19, 13, 7, 1, 0, 1, 7, 13, 19], // green, das no qt
  [21, 15, 10, 6, 1, 0, 1, 6, 10, 15], // yellowgreen, das qt kinda
  [16, 13, 9, 5, 1, 0, 1, 5, 9, 13], // yellow, up to abt 17hz on 29
  [12, 9, 7, 4, 1, 0, 1, 4, 7, 9], // orange , up to 7 left 29 equiv
  [9, 7, 5, 3, 1, 0, 1, 3, 5, 7], // red, frame perfect limit
];

const COLORS = {
  gray: "#404040",
  red: "#ff0000",
  orange: "#ffa000",
  yellow: "#ffff00",
  yellowgreen: "#90ff00",
  green: "#00ff00",
};

function _generateTotalFramesY(level) {
  let totalFramesY = new Array(20);
  totalFramesY[0] = 0;
  for (let i = 1; i < 20; i++) {
    totalFramesY[i] = totalFramesY[i - 1] + GRAVITYTABLE[level][i - 1];
  }

  return totalFramesY;
}

function _generateVisualizer(level) {
  let totalFramesY = _generateTotalFramesY(level);

  let visualizerTable = Array.from(Array(20), () => new Array(10));

  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {
      visualizerTable[y][x] = totalFramesY[y];

      if (visualizerTable[y][x] < MOVEMENTTABLE[4][x])
        visualizerTable[y][x] = -1;
    }
  }

  return visualizerTable;
}

function _getColor(frames, x) {
  let colorindex = 5;
  for (let i = 0; i < 5; i++) {
    if (frames >= MOVEMENTTABLE[i][x]) {
      colorindex = i;
      break;
    }
  }
  switch (colorindex) {
    case 0:
      return COLORS.green;
    case 1:
      return COLORS.yellowgreen;
    case 2:
      return COLORS.yellow;
    case 3:
      return COLORS.orange;
    case 4:
      return COLORS.red;
    default:
      return COLORS.gray;
  }
}

function drawVisualizer(level) {
  if (level < 9 || level > 49) {
    return 0;
  }

  visualizerTable = _generateVisualizer(level);

  let cellSize = 25;
  let field = document.querySelector(".field");
  let fieldctx = field.getContext("2d");

  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {
      fieldctx.fillStyle = _getColor(visualizerTable[y][x], x);
      fieldctx.fillRect(cellSize * x, cellSize * y, cellSize, cellSize);
    }
  }

  return 1;
}
