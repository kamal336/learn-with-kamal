import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from "../../images/my-bg.png"

const About = () => {
    return (
        <Container>
            <Row className="d-flex align-items-center top-margin">
                 <Col>
                 <h1 className="text-info">Passionate Web Development</h1>
                 <p className="text-success">Smart online courses is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference Accepts applications from prospective Note that the tours are booked well in advance and only a certain difference to the community. number of parents can be accommodated on each tour on first come first serve basis. Also it should be noted that the tour does not guarantee that the child will be accepted. Accepts applications from prospective parents Judged throughout the year and those interested are encouraged to contact the school by way of telephone or e-mail by using the contact form to get information difference to the community we serve and that provides.</p>
                 </Col>

                 <Col md={6}>
                    <img className="w-100" src={img} alt="" />
                </Col>
                 
            </Row>
        </Container>
    );
};

export default About;