import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import GameOver from "./components/GameOver/GameOver";
import Player from "./components/Player/Player";
import Log from "./components/Log/Log";
import { calculateWinner } from "./utils/calculateWinner";
import { getActivePlayer } from "./utils/activePlayer";

// function deriveActivePlayer(gameTurns) {
//   let currentPlayer = 'X';
//   if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
//     currentPlayer = 'O';
//   }
//   return currentPlayer;
// }

// const initialGameBoard = [
//   ['', '', ''],
//   ['', '', ''],
//   ['', '', ''],
// ];

function App() {
  const [players, setPlayers] = useState(
    { "X": "Player 1", "O": "Player 2" },
    
  );
  const [gameTurns, setGameTurns] = useState([]);

  //  let gameBoard = initialGameBoard;
  // for (const turn of gameTurns) {
  //   const { row, cel } = turn.square;
  //   gameBoard[row][cel] = turn.player;
  // }

  // for (const combination of WINNING_COMBINATIONS) {
  //   const firstSquareValue = gameBoard[combination[0].row][combination[0].column];
  //   const secondSquareValue = gameBoard[combination[1].row][combination[1].column];
  //   const thirdSquareValue = gameBoard[combination[2].row][combination[2].column];
  //   if (
  //     firstSquareValue !== '' &&
  //     firstSquareValue === secondSquareValue &&
  //     firstSquareValue === thirdSquareValue
  //   ) {
  //     winner = firstSquareValue;
  //     break;
  //   }
  // }

  const activePlayerComputed = getActivePlayer(gameTurns);
  console.log("Active Player Computed:", activePlayerComputed);
  const winner = calculateWinner(gameTurns, players);
  const hasDraw = gameTurns.length === 9 && !winner;
  
  function handlePlayersNameUpdate(symbol, name) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: name,
    }));
  }        
  
  function handleActivePlayerChange(rowIndex, cellIndex) {
    setGameTurns(prevTurns => {
      let currentTurn = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentTurn = 'O';
      }
      const updatedTurns = [{square: {row: rowIndex, cel: cellIndex}, player: currentTurn},
        ...prevTurns
      ];
      return updatedTurns;
    });
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player animated-element" >
          <Player
            onSaveName={handlePlayersNameUpdate}
            name="Player 1"
            symbol="X"
            isActive={activePlayerComputed === "X"}
          />
          <Player
            onSaveName={handlePlayersNameUpdate}
            name="Player 2"
            symbol="O"
            isActive={activePlayerComputed === "O"}
          />
        </ol>
        {(winner || hasDraw)  && <GameOver winner={winner} onRematch={() => setGameTurns([])} />}
        <GameBoard
          onClick={handleActivePlayerChange}
          turns={gameTurns}
        /> 
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  )
}

export default App
