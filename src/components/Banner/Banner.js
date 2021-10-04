import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Container>
           <Row>
           <div className="banner-container">
               <div className="banner">
                   <h1 className="banner-title">Complete Web Development  Learn With Kamal</h1>
                   <p className="banner-text">We learn very carefully and comprehensive way. It may be your passionate course.</p>
               </div>
           </div>
           </Row>
        </Container>
    );
};

export default Banner;