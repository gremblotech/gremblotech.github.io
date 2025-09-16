const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
const suits = ["S", "H", "C", "D"];

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.color = suit % 2; //0 for black, 1 for red
    this.string = `${ranks[rank]}${suits[suit]}`;
  }
}

class Deck {
  constructor() {
    let rank;
    let suit;
    this.deck = [];

    for (let i = 0; i < 52; i++) {
      rank = Math.floor(i / 4);
      suit = i % 4;
      this.deck.push(new Card(rank, suit)); //Makes deck with order SA, HA, CA, DA, etc.
    }
  }

  shuffle() {
    let r;

    for (let i = this.deck.length - 1; i > 0; i--) {
      r = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[r]] = [this.deck[r], this.deck[i]]; //Swaps deck[i] and deck[r]
    } //Basic shuffle algorithm
  }
}

class GameTable {
  constructor(deck) {
    this.table = Array.from(Array(8), () => new Array(0));
    this.freeCells = Array.from(Array(4), () => new Array(0));
    this.solvedCells = Array.from(Array(4), () => new Array(0));

    let column;
    for (let i = 0; i < 52; i++) {
      column = i % 8;
      this.table[column].push(deck.deck[i]);
    } //Deals deck to starting game position
  }

  getOpenCells() {
    let openCells = 0;
    for (let i = 0; i < 8; i++) {
      if (this.table[i].length === 0) openCells++;
    }
    return openCells;
  }

  isLegalStack(start, depth) {
    if (depth > this.getOpenCells() + 1) return false; //Check stack height

    let stack = [];
    for (let i = 0; i < depth; i++) {
      stack.push(this.table[start][i]);
    }

    for (let i = 0; i < stack.length - 1; i++) {
      if (stack[i].color === stack[i + 1].color) return false;
      if (stack[i].rank + 1 != stack[i + 1].rank) return false;
    }

    return true;
  }

  isLegalMove(start, depth, end) {
    if (this.table[end].length === 0) return true;

    let startCard = this.table[start][depth - 1];
    let endCard = this.table[end][0];

    if (startCard.color === endCard.color) return false; //Illegal if same color
    if (startCard.rank + 1 != endCard.rank) return false; //Illegal if not reducing rank

    return true;
  } //This is nonsense

  makeMove(start, depth, end) {
    if (!this.isLegalStack(start, depth)) return false;
    if (!this.isLegalMove(start, depth, end)) return false;

    let stack = [];
    for (let i = 0; i < depth; i++) {
      stack.push(this.table[start].shift());
    }
    for (let i = 0; i < depth; i++) {
      this.table[end].unshift(stack.pop());
    }

    return true;
  }

  solveCard(start) {
    let startRank = this.table[start][0].rank;
    let startSuit = this.table[start][0].suit;
    let endRank = this.solvedCells[startSuit].rank || -1;
    if (startRank != endRank + 1) return false;

    this.solvedCells[startSuit].unshift(this.table[start].shift());

    return true;
  }
}

let deck = new Deck();
deck.shuffle();
table = new GameTable(deck);
