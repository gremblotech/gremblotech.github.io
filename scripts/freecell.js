const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
const suits = ["S", "H", "C", "D"];

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.color = suit % 2; //0 for black, 1 for red
    this.string = `${suits[suit]}${ranks[rank]}`;
  }
}

function createDeck() {
  let rank;
  let suit;
  let deck = [];

  for (i = 0; i < 52; i++) {
    rank = Math.floor(i / 4);
    suit = i % 4;
    deck.push(new Card(rank, suit)); //Creates deck with order SA, HA, CA, DA, etc.
  }

  return deck;
}

function shuffleDeck(deck) {
  let random;
  let swap;

  for (i = deck.length - 1; i > 0; i--) {
    random = Math.floor(Math.random() * (i + 1));
    swap = deck[i];
    deck[i] = deck[random];
    deck[random] = deck[i];
  } //Basic shuffle algorithm

  return deck;
}

function makeGameTable(deck) {
  let gameTable = Array.from(Array(12), () => new Array(0)); //gameTable indexes 8-11 are Free Cells
  let column;

  for (i = 0; i < deck.length; i++) {
    column = i % 8;
    gameTable[column].push(deck[i]);
  } //Does not populate Free Cells

  return gameTable; //gameTable[n][0] acts as the frontmost card
}

function getFreeCells(gameTable) {
  let freeCells = 0;

  for (i = 0; i < gameTable.length; i++) {
    if ((gameTable[i].length = 0)) freeCells++;
  }

  return freeCells;
}

function isLegalMove(start, depth, end, gameTable) {
  let freeCells = getFreeCells(gameTable);

  if (depth > freeCells + 1) return false; //Is stack movable
  if (end.length === 0) return true; //Open cell always legal
  if (end > 8) return false; //Not allow stacking on free cells

  let startCard = gameTable[start][depth - 1];
  let endCard = gameTable[end][0];

  if (startCard.color === endCard.color) return false; //Illegal if same color
  if (startCard.rank + 1 != endCard.rank) return false; //Illegal if not reducing rank

  return true;
}

function makeMove(start, depth, end, gameTable) {
  if (!isLegalMove(start, depth, end, gameTable)) return false;

  let stack = [];
  for (i = 0; i < depth; i++) {
    stack.push(gameTable[start].shift());
  }
  for (i = 0; i < depth; i++) {
    gameTable[end].unshift(stack.pop());
  }

  return gameTable;
}
