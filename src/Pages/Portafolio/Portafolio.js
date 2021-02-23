import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portafolio.css';
import { Link } from 'react-router-dom';




const Portafolio = () => {
    
    return (
    <div className='portafolio'>

        <div className="demo">
            <Row >
                <Col><div className="demo1"></div></Col>
                <Col> 
                    <div className="demo2">
                        <div className="xx">
                            <h2>Ultimate Design</h2>
                            <h1>ACOMER CLUB</h1>
                        </div>
                    </div>
                </Col>
            </Row>
                <Row >
                    <Col>
                        <div className="demo4">
                            <div className="xx">
                            <h2>Design & Developer</h2>
                                <h1>PORTAFOLIO</h1>
                                <Link className="ruta" to="/portlist"><button>VIEW +</button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col> <div className="demo3"></div></Col>
                </Row>
        </div>
    </div>
    
);
};

export default Portafolio;