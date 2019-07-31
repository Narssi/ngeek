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



function App() {
  return (
    <div>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
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
