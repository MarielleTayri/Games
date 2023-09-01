const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endgameStatus = document.getElementById('endGameStatus');

const playerOne = 'X';
const playerTwo = 'O';
let playerTurn = playerOne;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach(cell => {
  cell.addEventListener('click', playGame, { once: true });
});

function playGame(e) {
  e.target.innerHTML = playerTurn;

  if (checkWin(playerTurn)) {
    updateGameStatus(`wins${playerTurn}`);
    return endGame();
  } else if (checkDraw()) {
    updateGameStatus('draw');
    return endGame();
  }

  updateGameStatus(playerTurn);
  playerTurn = (playerTurn === playerOne) ? playerTwo : playerOne; // Utilisation de l'opérateur d'égalité === pour comparer.
}

function checkWin(player) { // Changement du nom de paramètre pour éviter la confusion avec la variable playerTurn.
  return winningPatterns.some(combination => {
    return combination.every(index => {
      return cells[index].innerHTML === player; // Utilisation de l'opérateur d'égalité === pour comparer.
    });
  });
}

function checkDraw() {
  return [...cells].every(cell => {
    return cell.innerHTML === playerOne || cell.innerHTML === playerTwo; // Utilisation de l'opérateur d'égalité === pour comparer.
  });
}

function updateGameStatus(status) {
  let statusText;

  switch (status) {
    case 'X':
      statusText = "Now player O";
      break;
    case 'O':
      statusText = "Now player X";
      break;
    case 'winsX':
      statusText = "Player X is the winner";
      break;
    case 'winsO':
      statusText = "Player O is the winner";
      break;
    case 'draw':
      statusText = "It's a draw!";
      break;
  }

  gameStatus.innerHTML = statusText;
  endgameStatus.innerHTML = statusText;
}

function endGame() {
  document.getElementById('gameEnd').style.display = "block";
}

window.reloadGame = function() {
  window.location.reload();
};
