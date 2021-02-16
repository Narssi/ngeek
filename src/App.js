import React, {Component} from 'react';
import './App.css';
import Perfil from './Pages/Perfil/Perfil';
import Reconocimientos from './Pages/Reconocimiento/Reconocimientos';
import Portafolio from './Pages/Portafolio/Portafolio';
import Habilidades from './Pages/Habilidades/Habilidades';
import Contacto from './Pages/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import NBmenu from './Components/NavBar/Navbar';
import Home from './Pages/Home/Home';
import Experiencia from './Pages/Experiencia/Experiencia';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
 render(){
  return (
   
    <div className="App">
     <NBmenu/>
    <Home/>
    <Portafolio/>
    <Reconocimientos/>
    <Experiencia/>
    <Habilidades/>
    <Contacto/>
    </div>
  );
 }
}

export default App;
