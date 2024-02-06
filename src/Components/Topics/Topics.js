import React from 'react';
import './Topics.css';
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';



const Topics = () => {
    const dataInfo = useLoaderData();
    const courses = dataInfo.data;


    return (
        <div>
            <div className='topics-container'>

                {
                    courses.map(course =>
                        <Data
                            key={course.id}
                            course={course} >
                        </Data>
                    )
                }

            </div>
        </div>
    );
};

export default Topics;