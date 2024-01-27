import React from 'react';

const Questions = ({ quesData }) => {
    console.log(quesData);
    const { question, correctAnswer } = quesData;
    return (
        <div>
            <ul>
                <li>{question}</li>
            </ul>

        </div>
    );
};

export default Questions;