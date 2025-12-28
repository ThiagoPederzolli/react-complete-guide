import { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelectAnswer }) {
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    
    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isAnwserSelected = selectedAnswer === answer;
                let cssStyle;
                if (answerState === 'answered' && isAnwserSelected) cssStyle = 'selected';
                if ((answerState === 'correct' || answerState === 'wrong') && isAnwserSelected) cssStyle = answerState;

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelectAnswer(answer)}
                            className={cssStyle}
                            disabled={answerState !== ''}
                        >
                            {answer}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
export default Answers;