import { WINNING_COMBINATIONS } from "../assets/winning-combinations";

export function calculateWinner(gameTurns, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = combination[0];
    const firstSquareValue = gameTurns.find(
      (turn) =>
        turn.square.row === firstSquare.row && turn.square.cel === firstSquare.column
    )?.player;

    if (!firstSquareValue) {
      continue;
    }

    const hasWinningCombination = combination.every((square) => {
      const squareValue = gameTurns.find(
        (turn) =>
          turn.square.row === square.row && turn.square.cel === square.column
      )?.player;
      return squareValue === firstSquareValue;
    });

    if (hasWinningCombination) {
      winner = players[firstSquareValue];
    }
  }
  return winner;

}