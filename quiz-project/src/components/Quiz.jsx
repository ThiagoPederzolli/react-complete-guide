import { useCallback, useState } from "react";
import QUESTIONS from '../questions';

import Question from "./Question";
import Summary from "./Summary";
function Quiz() {
    // const shuffledAnswers = useRef();
    // const [answerSelected, setAnswerSelected] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    // const activeQuestionIndex = answerSelected === '' ? userAnswers.length : userAnswers.length - 1; 
    const activeQuestionIndex = userAnswers.length; 

    const quizIsOver = activeQuestionIndex === QUESTIONS.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer])
    }, []);
 
    const onTimeout = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
    console.log('quizIsOver', quizIsOver);
    if (quizIsOver) {
        return <Summary userAnswers={userAnswers} />
    }
    // with the new state of answerSelected we are rerendering the component
    // when the user selects an answer, and this is trigging the sort again
    // so, the code bellow is one example of how we can avoid that
    // we could use an useState+useEffect approach also, but this is better
    // because helps to avoid the quantity of useEffects on our application
    // but generates a different problem, now the answers doesnt change anymore
    // so the best approach is create a new component
    // if (!shuffledAnswers.current) {
    //     shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    // shuffledAnswers.current.sort(() => Math.random() - 0.5);
    // }
    return (
        <div id="quiz">
            <Question
                // one of the main goals of this component is to understand that:
                // when all this code was on Quiz, we generated a problem because
                // we had two components using the same key.
                // and considering that both needed to be destroyed and mounted again
                // at the same moment, consdering that both had the same key
                // we can create a new component that has the two components
                // and destroy and mount again this new single component
                // avoiding duplicate key problem
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                // questionText={QUESTIONS[activeQuestionIndex].text}
                // answers={QUESTIONS[activeQuestionIndex].answers}
                onSelectAnswer={handleSelectAnswer}
                // selectedAnswer={userAnswers[userAnswers.length - 1]}
                // answerState={answerSelected}
                onTimeout={onTimeout}
            />
        </div>
    )
}

export default Quiz;