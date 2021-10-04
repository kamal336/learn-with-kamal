import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './TopCourse.css'

const TopCourse = (props) => {
    const {img,name,description} = props.course;
    return (
       <Col md={6} lg={3} className="my-3">
        <Card>
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body>
        <Card.Title className="course-title">{name}</Card.Title>
        <Card.Text className="course-text">{description}</Card.Text>
        <Button variant="primary">Enroll Now</Button>
        </Card.Body>
        </Card>
       </Col>
    );
};

export default TopCourse;