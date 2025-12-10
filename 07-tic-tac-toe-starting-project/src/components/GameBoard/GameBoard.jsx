import { getCurrentGameBoard } from "../../utils/currentGameBoard";
import "./GameBoard.css";
function GameBoard({ onClick, turns }) {
  const gameBoard = getCurrentGameBoard(turns);
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleCellClick(rowIndex, cellIndex) {
    //     setGameBoard(prevBoard => {
    //         const newBoard = prevBoard.map(row => row.slice());
    //         newBoard[rowIndex][cellIndex] = activePlayer;
    //         return newBoard;
    //     });
    //     onClick();
    // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex} >
            <ol>
                {row.map((playerSymbol, cellIndex) => (
                <button
                  key={cellIndex}
                  onClick={() => onClick(rowIndex, cellIndex)}
                  disabled={playerSymbol !== ''}
                >
                    {playerSymbol}
                </button>
            ))}
            </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;