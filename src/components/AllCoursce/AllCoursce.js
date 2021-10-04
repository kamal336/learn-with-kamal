import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const AllCoursce = (props) => {
    const {name,img,description} = props.course;
    console.log(props.course);
    return (
        <Col md={6} lg={4} className="my-3">
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

export default AllCoursce;