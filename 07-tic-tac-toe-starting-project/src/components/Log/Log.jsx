import "./Log.css";
function Log({ turns, players }) {
    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={index}>
                    Player {players[turn.player]} placed on row {turn.square.row + 1}, cell {turn.square.cel + 1}
                </li>
            ))}
        </ol>
    );
}

export default Log;