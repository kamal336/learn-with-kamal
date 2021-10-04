import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AllCoursce from '../AllCoursce/AllCoursce';
import useCourses from './../../hooks/useCourses';


const AllCourses = () => {
    // use hook
    const [courses] = useCourses();
    console.log(courses);
    return (
        <Container>
            <Row className="top-margin">
                {
                   courses.map(course=> <AllCoursce 
                    course={course}
                   />)
                }
            </Row>
        </Container>
    );
};

export default AllCourses;