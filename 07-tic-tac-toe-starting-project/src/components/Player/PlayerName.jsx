function PlayerName({ isEditing, userName, setUserName }) {
    return (
        <>
        {!isEditing ? (
            <span className="player-name">{userName}</span>
        ) : (
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
        )}
        </>
    )
}

  export default PlayerName;