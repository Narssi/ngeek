import React from 'react';
import './Navbar.css';
import { Nav, Navbar, Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Link} from "react-router-dom";

const NBmenu = () => {
    return (
       <div>
           <Navbar  bg="light" fixed="top" expand="lg">
           
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Brand href="/" class="logo">NGK</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className = "mx-auto parent">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link>Reconocimientos</Nav.Link>
                    <Nav.Link href="/src/Pages/Portafolio">Portafolio</Nav.Link>
                    <Nav.Link href="/src/Pages/Reconocimiento">Experiencias</Nav.Link>
                    <Nav.Link href="/">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse> 
                
            </Navbar>
       </div>

       

    );
};

export default NBmenu;