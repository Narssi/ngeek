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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
          <NBmenu/>
          <Switch>
            <Route  path="/" exact component={Home}/>

            <Route path="/portafolio" component={Portafolio}/>
            
          </Switch>
        </div>
    </Router>
  );
}

export default App;
