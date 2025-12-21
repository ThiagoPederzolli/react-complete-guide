import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// as the variable is defined outside the component, it will persist across renders
// and will be shared among all instances of the component
// let timer;

function TimerChallenge({ title, targetTime }) {
   const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    const timerRef = useRef(null);
    const modalRef = useRef(null);
    if (timeRemaining <= 0) {
        clearInterval(timerRef.current);
        modalRef.current.showModal();
    }

    function handleResetClick() {
        setTimeRemaining(targetTime * 1000);
    }
    function handleStartClick() {        
        timerRef.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10)
        }, 10);
    }

    function handleStopClick() {
        clearInterval(timerRef.current);
        modalRef.current.showModal();
    }
  return (
    <>
    <ResultModal
        ref={modalRef}
        result={timeRemaining}
        targetTime={targetTime}
        onReset={handleResetClick}
    />
    <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
    <button onClick={timeIsActive ? handleStopClick :  handleStartClick}>
        {timeIsActive ? 'Stop' : 'Start'} Challenge
    </button>
    <p className="active">
        {timeIsActive ? 'Time is running...' : 'Timer inactive'}
    </p>
  </section>
  </>
  );
}

export default TimerChallenge;