import React from 'react';
import './Data.css';

const Data = ({ course }) => {

    const { name, logo, total } = course;

    return (
        <div className='course-container'>
            <div className='course-details'>
                <img src={logo} alt="" />
                <h2>{name}</h2>
                <p>Total: {total}</p>
                <button className='data-btn'>Start</button>
            </div>

        </div>
    );
};

export default Data;