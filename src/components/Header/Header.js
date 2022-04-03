import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header bg-black d-lg-flex justify-content-lg-between align-items-lg-center'>
            <h1 className='text-white'><Link to='/'>PS5 Mania</Link></h1>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/review'>Review</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header; 