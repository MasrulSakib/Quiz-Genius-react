import React, { useState } from 'react';
import './Topics.css';
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';


const Topics = () => {
    const dataInfo = useLoaderData();
    const [course, setCourse] = useState([])
    const handleAddCourses = data => {
        console.log()
    }


    const courses = dataInfo.data;
    console.log(courses);
    return (
        <div>
            <div className='topic-text'>
                <p>Quiz Genius is an engaging and intellectually stimulating online platform designed to challenge and entertain users with a diverse range of quizzes and trivia. At Quiz Genius, we believe in fostering a fun and interactive learning experience, providing a space where users can test their knowledge across various topics and compete with friends or fellow enthusiasts. The platform features an extensive collection of quizzes spanning science, history, pop culture, technology, and more, ensuring there's something for every curious mind. Our user-friendly interface and intuitive navigation powered by React technology make exploring and participating in quizzes a seamless and enjoyable process. Quiz Genius goes beyond traditional trivia, offering dynamic and thought-provoking questions that cater to both casual participants and avid quiz enthusiasts. Whether you're looking to challenge yourself or engage in friendly competition, Quiz Genius provides an inclusive and entertaining environment.</p>

            </div>
            <div className='topics-container'>

                {
                    courses.map(course => <Data key={course.id} course={course} ></Data>)
                }
            </div>
        </div>
    );
};

export default Topics;