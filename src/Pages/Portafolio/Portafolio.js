import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@material-ui/core/Grid';
import './Portafolio.css';

import Buttom from 'react-bootstrap/Button';




const Portafolio = () => {
    
    return (
    <div className='portafolio'>
        <div className="body-t">
        <ul className="flex-container">
            <li className="flex-item1">
            <div className="d-flex flex-column">
                <div className="p-2 nx"></div>          
            </div>
            </li>
            <li className="flex-item">
            <div className="d-flex flex-column">
                <div className="p-2">
                    <p>Ultimate Design</p>
                    <p>ACOMER CLUB</p>
                </div>
            </div>
            </li>
        </ul>
        <ul className="flex-container">
            <li className="flex-item de">
            <div className="d-flex flex-column">
                <div className="p-2">
                    <p>Design & Developer</p>
                    <p>PORTAFOLIO</p>
                    <button>VER +</button>
                </div>          
            </div>
            </li>
            <li className="flex-item1 des">
                <div className="d-flex flex-column">
                    <div className="p-2 nx"></div>
                </div>
            </li>
        </ul>
        </div>
    </div>
    
);
};

export default Portafolio;