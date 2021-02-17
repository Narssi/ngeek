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
                    <Col> <div className="demo1"></div></Col>
                    <Col> 
                        <div className="demo2">
                            <h2>Ultimate Design</h2>
                            <h1>ACOMER CLUB</h1>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <div className="demo4">
                                <h2>Design & Developer</h2>
                                <h1>PORTAFOLIO</h1>
                                <button>VIEW +</button>
                        </div>
                    </Col>
                    <Col> <div className="demo3">demo1</div></Col>
                </Row>
        </div>
    </div>
    
);
};

export default Portafolio;