import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="1 Second Challenge" targetTime={1} />
      <TimerChallenge title="10 Second Challenge" targetTime={10} />
      <TimerChallenge title="15 Second Challenge" targetTime={15} />
      </div>
    </>
  );
}

export default App;
