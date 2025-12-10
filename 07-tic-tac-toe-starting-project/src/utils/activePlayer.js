export function getActivePlayer(turns) {
  return turns.length % 2 === 0 ? "X" : "O";
}