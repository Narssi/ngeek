import React from 'react';
import link from './link.svg';
import git from './git.svg';
import gitlab from './gitlab.svg';
import gith from './gith.svg';
import './Contacto.css'

const Contacto = () => {
    return(
        <div className='Contacto'>
        <div>
        <h1>Contacto</h1>
            <div className="row">
                <div className="col-sm Redes">
                <h1>Sigueme en mis<br></br> Redes Sociales</h1>
                        <div className="imagenes">
                            <img src={link} className="rounded float-left" className="link" alt="link"/>
                            <img src={git}  className="rounded float-right" className="git" alt="git"/>
                            <img src={gith}  className="rounded float-right" className="gith" alt="gith"/>
                            <img src={gitlab}  className="rounded float-right" className="gitlab" alt="gitlab"/>
                        </div>
                </div>
               
            </div>
        </div>
        
        </div>
    );
}
export default Contacto;