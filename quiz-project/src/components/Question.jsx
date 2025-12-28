import { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from '../questions';
function Question({
    questionIndex,
    // questionText,
    // answers,
    onSelectAnswer,
    // selectedAnswer,
    // answerState,
    onTimeout
}) {
    const [questionAnswered, setQuestionAnswered] = useState({
        selectedAnswer: '',
        isCorrectAnswer: null,
    })

    let timer = 10000;

    if(questionAnswered.selectedAnswer) {
        timer = 1000;
    }

    if(questionAnswered.isCorrectAnswer !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setQuestionAnswered({
            selectedAnswer: answer,
            isCorrectAnswer: null,
        })
        setTimeout(() => {
            setQuestionAnswered({
                selectedAnswer: answer,
                isCorrectAnswer: answer === QUESTIONS[questionIndex].answers[0],
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000)
        }, 1000);
    }
    // const answerState = !!questionAnswered.selectedAnswer ? questionAnswered.isCorrectAnswer : '';
    let answerState = '';
    if (!!questionAnswered.selectedAnswer && questionAnswered.isCorrectAnswer !== null) {
        answerState = questionAnswered.isCorrectAnswer ? 'correct' : 'wrong';
    } else if (!!!!questionAnswered.selectedAnswer) {
        answerState = 'answered'
    }
    return (
        <div id="question">
                <QuestionTimer
                    // whenever the key prop value changes
                    // react will destroy the old component instance
                    // and create a new one
                    // key={activeQuestionIndex}
                    // the key related to the timer is because we arent reseting
                    // the interval on questionTimer, so passing a Key, will destroy and mount a new QuestionTimer
                    key={timer}
                    timeout={timer}
                    //one problem that we are facing is that we are running this function
                    // either the user selected or not an answer, but we need to run only
                    // if we didnt receive an answer
                    onTimeout={questionAnswered.selectedAnswer === '' ? onTimeout : null}
                    mode={answerState}
                />
                <h2>{QUESTIONS[questionIndex].text}</h2>
                <Answers
                    // key={activeQuestionIndex}
                    answers={QUESTIONS[questionIndex].answers}
                    selectedAnswer={questionAnswered.selectedAnswer}
                    answerState={answerState}
                    onSelectAnswer={handleSelectAnswer}
                />
            </div>
    )
}

export default Question;