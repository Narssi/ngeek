import React from 'react';
import './Footer.css';
import data from  '../../JSONData/data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lk from '../../Assets/lk.svg';
import ngk from '../../Assets/NGK.svg';
import gith  from '../../Assets/gith.svg';

const Footer = () => {
    return (
    <div className='Footer'>
       {
           data.Footer.map((footer) => {
               return(
                <div className = 'Footer'>
                    <div className="icons">
                    <Row >
                        <Col sm >
                        <img src={lk} className="rounded float-left lk"  alt="lk"/>
                        </Col>
                        <Col sm>
                        <img src={ngk}  className="rounded float-right ngk" alt="ngk"/>
                        </Col>
                        <Col sm>
                        <img src={gith}  className="rounded float-right gith" alt="gith"/>
                        </Col>
                    </Row>    
                    </div>
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

