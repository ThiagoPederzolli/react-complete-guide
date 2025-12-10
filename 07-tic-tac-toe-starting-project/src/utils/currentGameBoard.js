const initialGameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

export function getCurrentGameBoard(turns) {
  let gameBoard = [...initialGameBoard.map(row => [...row])];
  for (const turn of turns) {
    const { row, cel } = turn.square;
    gameBoard[row][cel] = turn.player;
  }
  return gameBoard;
}