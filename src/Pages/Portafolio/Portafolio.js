import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portafolio.css';
import Iphone from './Iphone.png';
import Buttom from 'react-bootstrap/Button';



const Portafolio = () => {
    
    return (
    <div className='Portaf'>
        
        <Container className='portafolio' id="portafolio">
            <Row>
                <Col sm={6}>
                <h1>Portafolio</h1>
                <p>Desarrollo Web, Desarrollo Movil<br></br>UIUX</p>
                <Buttom className='btnP' variant='light'>Proximamente</Buttom>
                </Col>
                <Col sm={6}><img src={Iphone} className="Iphone" alt="Iphone" /></Col>
            </Row>
        </Container>
    </div>
    
);
};

export default Portafolio;