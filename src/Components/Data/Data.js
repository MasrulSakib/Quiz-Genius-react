import React from 'react';
import './Data.css';
import { useNavigate } from 'react-router-dom';

const Data = ({ course }) => {
    const { name, logo, total, id } = course;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/topics/${id}`)
    }


    return (
        <div className='course-container'>
            <div className='course-details'>
                <div>
                    <img src={logo} alt="" />
                    <h2>{name}</h2>
                    <p>Total: {total}</p>
                    <button onClick={handleNavigate} className='data-btn'>Start</button>
                </div>
            </div>
        </div>
    );
}
export default Data;