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

        <div className="demo">
            <Row >
                    <Col> <div className="demo1">demo1</div></Col>
                    <Col> <div className="demo2">demo1</div></Col>
                </Row>
                <Row >
                    <Col> <div className="demo4">demo1</div></Col>
                    <Col> <div className="demo3">demo1</div></Col>
                </Row>
        </div>
    </div>
    
);
};

export default Portafolio;