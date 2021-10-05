import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
  


const Footer = () => {
    return (
        <Container fluid className="footer bg-secondary text-white text-center p-5">
           <Row className="d-flex align-items-center">
            <Col>
            <div>
            <i class="fab fa-facebook-square icon"></i>
            <i class="fab fa-youtube-square icon"></i>
            <i class="fab fa-twitter icon"></i>
            <i class="fab fa-instagram-square icon"></i>
            <i class="fab fa-linkedin icon"></i>
            </div>
            </Col>
            <Col>
            <h3>Home</h3>
            <p>All Courses</p>
            <p>Admission</p>
            <p>About Us</p>
            <p>Contact</p>
            </Col>
            <Col>
            <h1>Learn With Kamal</h1>
            <p>Copyright &copy; Akter Kamal.<br/> Passionate Web Developer & Web Learner</p>
            </Col>
  </Row>
</Container>
    );
};

export default Footer;

