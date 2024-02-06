import React, { createContext, useState } from 'react';
import Options from '../Options/Options';
import './Questions.css';
import { EyeIcon } from '@heroicons/react/24/solid';

export const QuizContext = createContext();

const Questions = ({ quesData }) => {
    const { question, correctAnswer, options } = quesData;

    const [showText, setShowText] = useState(false);
    const handleText = () => {
        setShowText(!showText);
    }

    return (

        <QuizContext.Provider value={correctAnswer}>
            <div className='option-list'>
                <ul>
                    <li>
                        <div className='icon'>
                            <div>
                                {question}
                            </div>
                            <div>
                                <p className="eyeIcon">
                                    <EyeIcon onClick={handleText} /> {showText && <span>{correctAnswer}</span>}</p>
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