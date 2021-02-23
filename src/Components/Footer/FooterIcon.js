
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterImg } from "../../Data/footer-img";

export const FooterIcon = ( ) => {

    return(
        <div className="icons">
        <Row >
            {FooterImg.map((Footer, key) =>{
                return(
                    <Col key={key} className="icons">
                        <img src={`./assets/footer/${Footer.id}.svg`} className="rounded float-left"  alt="img"/>
                    </Col>
                );
            })}
        </Row>    
        </div>
    )
    
}


