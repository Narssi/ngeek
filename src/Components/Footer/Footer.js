import React from 'react';
import './Footer.css';
import data from  '../../JSONData/data.json';
import img from '../../JSONData/img.json';


const Footer = () => {
    return (
    <div className='Footer'>
       {
           data.Footer.map((footer) => {
               return(
                <div className = 'Footer'>
                    <div  className='corp'>
                        <h2>{footer.web}</h2>
                        <h1>{footer.Register} {new Date().getFullYear()}</h1>
                        <p>{footer.Version}</p>
                    </div>
                    <div className="lss"></div>
                </div>
               );
           })
       }
    </div>
    );
};

export default Footer;

