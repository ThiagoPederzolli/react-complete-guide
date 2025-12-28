import { useEffect, useState } from "react"

function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainigTime] = useState(timeout);
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainigTime(prevTime => prevTime - 100);
        }, 100)

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]);

    return (
        <progress id="question-time" value={remainingTime} max={timeout} className={mode} />
    )
}

export default QuestionTimer;