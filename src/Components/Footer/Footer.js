import React from 'react';
import './Footer.css';
import { Data } from "../../Data/data-ngk";
import { FooterIcon } from './FooterIcon';

const Footer = () => {
    return (
    <div className='Footer'>

        {Data.map((Footer, key) =>{
            return(
                <div key={key}>
                    <div>
                        <FooterIcon>
                        </FooterIcon>
                    </div>
                    <div  className='corp'>
                        <h1>{Footer.web}</h1>
                        <h2>{Footer.Register} {new Date().getFullYear()}</h2>
                        <p>{Footer.version}</p>
                    </div>
                    <div className="lss"></div>
                </div>
            );
        })}
    </div>
    );
};

export default Footer;

