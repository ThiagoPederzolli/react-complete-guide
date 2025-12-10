import { useState } from "react";
import "./Player.css";
import PlayerName from "./PlayerName";
function Player({ name, symbol, isActive, onSaveName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(name);
  console.log("Rendering Player:", { name, symbol, isActive });

  function handleEditClick() {
    setIsEditing(!isEditing);
    onSaveName(symbol, userName);
  }

  return (
      <li className={isActive ? "active" : ""}>
        <span className="player">
            <PlayerName isEditing={isEditing} userName={userName} setUserName={setUserName} />
          <span className="player-symbol">{symbol}</span>
        </span>
          <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
      </li>
    )
}

export default Player;