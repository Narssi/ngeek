import React from 'react';
import lk from '../../Assets/lk.svg';
import git from './git.svg';
import gitlab from './gitlab.svg';
import gith from './gith.svg';
import ngk from '../../Assets/NGK.svg';
import './Contacto.css'

const Contacto = () => {
    return(
        <div className='Contacto'>
        <div>
        <h1>Contacto</h1>
            <div className="row">
                <div className="col-sm Redes">
                
                        <div className="imagenes">
                            <img src={lk} className="rounded float-left" className="lk" alt="lk"/>
                            <img src={ngk}  className="rounded float-right" className="ngk" alt="ngk"/>
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