import React from 'react';
import './App.css';
import Perfil from './Pages/Perfil/Perfil';
import Reconocimientos from './Pages/Reconocimiento/Reconocimientos';
import Portafolio from './Pages/Portafolio/Portafolio';
import Habilidades from './Pages/Habilidades/Habilidades';
import Contacto from './Pages/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import NBmenu from './Components/NavBar/Navbar';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div>
      <div>
        <NBmenu></NBmenu>
      </div>
      <div>
      <Home></Home>
      </div>
        <div>
        <Perfil></Perfil>
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
