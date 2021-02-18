import React from 'react';
import './Experiencia.css';


const Experiencia = () => {
    return (
        <div className="Experiencia">
                <div className="tittle">
                    <h1>Experiencia Profesional</h1>
                    <h2>Trabajos</h2>
                </div>

                <div>
                    <ul className="flex-container">
                        <li className="flex-item4">1</li>
                        <li className="flex-item4">2</li>
                    </ul>
               </div>
                
               <div>
                <ul className="flex-container">
                    <li className="flex-item3">
                       <div className="dl">
                       <img src={require ('../../Assets/6.svg')}/>
                        <p>Experiencia Profesional</p>
                       </div>
                    </li>
                    <li className="flex-item3">
                        <div className="dl">
                            <img src={require ('../../Assets/corazon.svg')}/>
                            <p>Apasionado</p>
                        </div>
                    </li>
                    <li className="flex-item3">
                        <div className="dl">
                             <img src={require ('../../Assets/auto.svg')}/>
                            <p>Autodidacta</p>
                        </div>
                    </li>
                    <li className="flex-item3">
                    <div className="dl">
                        <img src={require ('../../Assets/team.svg')}/>
                        <p>Trabajo en Equipo</p>
                    </div>
                    </li>
                </ul>
               </div>
                
        </div>
    );
};  

export default Experiencia;