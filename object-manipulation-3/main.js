console.log('Lodash is loaded:', typeof _ !== 'undefined');

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }
}

const player1 = new Player('Sam');
const player2 = new Player('Frodo');
const player3 = new Player('Merry');
const player4 = new Player('Pippin');

const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
];
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

const pointValues = {
  Ace: 11,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
};

const deck = [];

for (const suit of suits) {
  for (const rank of ranks) {
    const card = { rank, suit };
    deck.push(card);
  }
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const randomShuffle = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[randomShuffle]] = [deck[randomShuffle], deck[i]];
  }
}

shuffleDeck(deck);

const players = [player1, player2, player3, player4];

for (let i = 0; i < 2; i++) {
  for (const player of players) {
    const card = deck.pop();
    player.hand.push(card);
  }
}

for (const player of players) {
  for (const card of player.hand) {
    player.score += pointValues[card.rank];
  }
}

let highestScorePlayer = players[0];
for (let i = 1; i < players.length; i++) {
  if (players[i].score > highestScorePlayer.score) {
    highestScorePlayer = players[i];
  }
}

console.log(
  `The winning player is ${highestScorePlayer.name} with a score of ${highestScorePlayer.score}`
);
console.log(`${highestScorePlayer.name}'s hand:`, highestScorePlayer.hand);
