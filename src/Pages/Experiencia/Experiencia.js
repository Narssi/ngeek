import React from 'react';
import './Experiencia.css';


const Experiencia = () => {
    return (
        <div className="Experiencia">
                <h1>Experiencia Profesional</h1>
                <h2>Trabajos</h2>

                <div>
                    <ul class="flex-container">
                        <li class="flex-item4">1</li>
                        <li class="flex-item4">2</li>
                    </ul>
               </div>
                
               <div>
                <ul class="flex-container">
                    <li class="flex-item3">
                       <div className="dl">
                       <img src={require ('../../Assets/6.svg')}/>
                        <p>Experiencia Profesional</p>
                       </div>
                    </li>
                    <li class="flex-item3">
                        <div className="dl">
                            <img src={require ('../../Assets/corazon.svg')}/>
                            <p>Apasionado</p>
                        </div>
                    </li>
                    <li class="flex-item3">
                        <div className="dl">
                             <img src={require ('../../Assets/auto.svg')}/>
                            <p>Autodidacta</p>
                        </div>
                    </li>
                    <li class="flex-item3">
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