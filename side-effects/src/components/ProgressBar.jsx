import { useState, useEffect } from 'react';

function ProgressBar({ timer }) {
     const [remainingTime, setRemainigTime] = useState(timer);
      useEffect(() => {
        const interval = setInterval(() => {
          setRemainigTime(prevTime => prevTime - 10);
        }, 10)
    
        return () => {
          clearInterval(interval);
        }
      }, []);
    return (
      <progress value={remainingTime} max={timer} />

    )
}

export default ProgressBar;