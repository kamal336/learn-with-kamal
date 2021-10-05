import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
          <Row className="top-margin">
           <Col lg={6}>
           <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Email address</Form.Label>
                 <Form.Control type="email" placeholder="Enter Your Email" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-bold">Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Your Message" />
               </Form.Group>
               <Button variant="secondary me-3">Send</Button>
               <Button variant="secondary">Reset</Button>
            </Form>
           </Col>

           <Col lg={6}>
              <div className="mb-3">
                  <img className="img-fluid" src="https://www.techetron.com/wp-content/uploads/2015/01/dhakamaps.jpg" alt="" />
              </div>
           </Col>
          </Row>
        </Container>
    );
};

export default Contact;