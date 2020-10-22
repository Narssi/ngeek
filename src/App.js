import React from 'react';
import logo from './logo.svg';
import './App.css';
import Perfil from './Components/Perfil/Perfil';
import ExLaboral from './Components/ExperienciaLab/ExLaboral';
import DatosExt from './Components/DatosExtras/DatosExt';
import MVA from './Components/MVA/MVA';
import Reconocimientos from './Components/Reconocimiento/Reconocimientos';
import Portafolio from './Components/Portafolio/Portafolio';
import Habilidades from './Components/Habilidades/Habilidades';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import { Nav, Navbar } from 'react-bootstrap';



function App() {
  return (
    <div>

    <Navbar bg="light" expand="lg">
      <Navbar.Brand> NGK </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Homes</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
     
    </Navbar>

        <div className="App">
            <header className="App-header">
             
            </header>   
        </div>

        <div>
        <Perfil></Perfil>
        </div>

        <div>
          <ExLaboral></ExLaboral>
        </div>

        <div>
          <DatosExt></DatosExt>
        </div>

        <div>
          <MVA></MVA>
        </div>

        <div>
        <Reconocimientos></Reconocimientos>
        </div>

        <div>
        <Portafolio></Portafolio>
        </div>

        <div>
        <Habilidades></Habilidades>
        </div>
        
        <div>
        <Contacto></Contacto>
        </div>

        <div>
          <Footer></Footer>
        </div>


    </div>

    
  );
}

export default App;
