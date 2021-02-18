import React from 'react';
import './Reconocimientos.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Reconocimientos = () => (
    <div className='Reconocimientos'>
            <Row >
                <Col sm className="img1">
                  <div className="Info">
                    <h2>Design & Developer</h2>
                    <h1>CURSOS</h1>
                    <Link to="/diplomas"><button>VIEW +</button></Link>
                  </div>
                  <div className="st"></div>
                </Col>
                <Col sm className="img2">
                  <div className="Info">
                    <h2>Design & Developer</h2>
                    <h1>CURSOS</h1>
                  </div>
                  <div className="st"></div>
                </Col>
                <Col sm className="img3">
                <div className="Info">
                    <h2>Design & Developer</h2>
                    <h1>CURSOS</h1>
                  </div>
                  <div className="st"></div>
                </Col>
            </Row>    
    </div>
);

export default Reconocimientos;