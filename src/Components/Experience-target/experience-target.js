import React from 'react';
import { experienceData } from "../../Data/experience-img";
import './experiencetarget.css';

export const ExperienceTarget = ( ) => {
    return(
        <div >
        <ul className="flex-container">
        {experienceData.map((experience, key) =>{
            return(       
            <li key={key} className="flex-item3">
                <div className="dl">
                <img src={`./assets/experience/${experience.id}.svg`} className="rounded"  alt="img"/>
                <p>{experience.text}</p>
                </div>
            </li>
            );
        })}
        </ul>
        </div>
    )
}