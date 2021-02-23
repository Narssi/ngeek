import React from 'react';
import './Experiencia.css';
import Carousel from 'react-bootstrap/Carousel';
import {ExperienceTarget} from '../../Components/Experience-target/experience-target';
const Experiencia = () => {
    return (
        <div className="Experiencia">
                <div className="tittle">
                    <h1>Trabajos</h1>
                    <h2>Experiencia Profesional</h2>
                    
                </div>
                <div className="carrusel">
                <Carousel>
                    <Carousel.Item interval={2000} className="demos">    
                    </Carousel.Item>
                    <Carousel.Item className="demos">
                    </Carousel.Item>
                    <Carousel.Item className="demos">
                    </Carousel.Item>
                    </Carousel>
               </div>
               
                <ExperienceTarget/>
                
               
        </div>
    );
};  

export default Experiencia;