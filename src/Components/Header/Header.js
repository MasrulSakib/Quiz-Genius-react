import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-container'>
            <div className='logo-container'>
                <h2>Quiz</h2>
                <h2>Genius</h2>
            </div>

            <div>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistic</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;