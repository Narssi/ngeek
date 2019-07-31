import React from 'react';
import './Footer.css';



const Footer = () => {
    return (
    <div className='Footer'>
        <div  className='corp'>
            <h1> {new Date().getFullYear()} © Copyright | NGeek Reyes</h1>
            <p>Version 7.0</p>
        </div>
    </div>
    );
};

export default Footer;