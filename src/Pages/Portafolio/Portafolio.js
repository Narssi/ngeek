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
                <div className="p-2 nx">Flex item 1</div>          
            </div>
            </li>
            <li className="flex-item">
            <div className="d-flex flex-column">
                <div className="p-2">Flex item 2</div>
            </div>
            </li>
        </ul>
        <ul className="flex-container">
            <li className="flex-item de">
            <div className="d-flex flex-column">
                <div className="p-2">Flex item 3</div>          
            </div>
            </li>
            <li className="flex-item1 des">
                <div className="d-flex flex-column">
                    <div className="p-2 nx">Flex item 4</div>
                </div>
            </li>
        </ul>
        </div>
    </div>
    
);
};

export default Portafolio;