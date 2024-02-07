import React, { createContext, useState } from 'react';
import Options from '../Options/Options';
import './Questions.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';

export const QuizContext = createContext();

const Questions = ({ quesData }) => {
    const { question, correctAnswer, options } = quesData;

    const handleText = () => {
        toast.info(correctAnswer);
    }

    return (

        <QuizContext.Provider value={correctAnswer}>
            <div className='option-list'>
                <ul>
                    <li>
                        <div className='icon'>
                            {question}
                            <div>
                                <p className="eyeIcon">
                                    <EyeIcon onClick={handleText} /></p>
                            </div>
                        </div>
                    </li>

                    <div >
                        {
                            options.map((option, index) => <Options key={index} option={option}> </Options>)
                        }

                    </div>

                </ul>

            </div>
        </QuizContext.Provider>
    );
};

export default Questions;