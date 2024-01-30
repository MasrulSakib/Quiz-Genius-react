import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './QuizDetails.css';

const QuizDetails = () => {

    const quiz = useLoaderData([]);
    const QuestionSet = quiz.data.questions;
    // console.log(quiz.data.questions[0]);
    return (
        <div className='quiz-containers'>
            <h3>Topic: {quiz.data.name}: </h3>
            <div>
                {
                    QuestionSet.map((element, index) =>
                        <Questions key={index}
                            quesData={element}
                        ></Questions>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;