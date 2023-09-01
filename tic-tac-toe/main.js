const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endgameStatus = document.getElementById('endGameStatus');

const playerOne = 'X';
const playerTwo = 'O';
let playerTurn = playerOne;

cells.forEach(cell => {
  cell.addEventListener('click', playGame, { once: true});
});

function playGame(e) {
  e.target.innerHTML = playerTurn;

  updateGameStatus(playerTurn);
  playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

function updateGameStatus(status) {
  let statusText;

  switch (status) {
    case 'X':
      statusText = "Now player O"
      break;
    case 'O':
      statusText = "Now player X"
      break;
    case 'winsX':
      statusText = "Player X is the winner"
      break;
    case 'winsO':
      statusText = "Player O is the winner"
      break;
    case 'draw':
      statusText = "It's a draw !"
      break;
  }

  gameStatus.innerHTML = statusText;
  endgameStatus.innerHTML = statusText;
}
