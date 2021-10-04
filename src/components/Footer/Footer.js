import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
  


const Footer = () => {
    return (
        <Container fluid className="footer bg-secondary text-white text-center p-5">
           <Row>
            <Col>
            <div>
            <i class="fab fa-facebook-square icon"></i>
            <i class="fab fa-youtube-square icon"></i>
            <i class="fab fa-twitter icon"></i>
            <i class="fab fa-instagram-square icon"></i>
            <i class="fab fa-linkedin icon"></i>
            </div>
            <div>
            <h3>About Us</h3>
             <p>General Information</p>
             <p>Who We Are</p>
            </div>
            </Col>
            <Col>
            <h5>Home</h5>
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

