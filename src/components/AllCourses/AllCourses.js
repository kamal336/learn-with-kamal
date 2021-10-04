import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AllCoursce from '../AllCoursce/AllCoursce';
import useCourses from './../../hooks/useCourses';


const AllCourses = () => {
    const [courses] = useCourses();
    console.log(courses);
    return (
        <Container>
            <Row>
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