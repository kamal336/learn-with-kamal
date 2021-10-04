import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="footer bg-secondary text-white text-center p-5">
           <Row>
            <Col>
             <h3>About Us</h3>
             <p>General Information</p>
             <p>Who We Are</p>
             <p>Our Teachers</p>
            </Col>
            <Col>
            <h3>Home</h3>
            <p>All Courses</p>
            <p>Admission</p>
            <p>Contact</p>
            </Col>
            <Col>
            <h1>Learn With Kamal</h1>
            <p>&copy; Akter Kamal. Passionate Web Developer</p>
            </Col>
  </Row>
</Container>
    );
};

export default Footer;

