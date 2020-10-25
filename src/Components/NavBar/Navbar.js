import React from 'react';
import './Navbar.css';
import { Nav, Navbar, Grid, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";



const NBmenu = () => {
    return (
        <div>
           <Navbar  bg="light" fixed="top" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Brand href="/" class="logo">NGK</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className = "mx-auto parent">
                    <Link to="/">Inicio</Link>
                    <Link>Reconocimientos</Link>
                    <Link to="/portafolio">Portafolio</Link>
                    <Link>Experiencias</Link>
                    <Link>Contacto</Link>
                </Nav>
                </Navbar.Collapse> 
                
            </Navbar>
       </div>
    );
};

export default NBmenu;