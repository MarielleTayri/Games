const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endgameStatus = document.getElementById('endgameStatus');

const playerOne = 'X'
const playerTwo = 'O';
let playerTurn = playerOne;

cells.forEach(cell => {
  cell.addEventListener('click', playGame, { once: true});
})

function playGame(e) {
  e.target.innerHTML = playerTurn;

  playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}
