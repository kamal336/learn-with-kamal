import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import TopCourse from '../TopCourse/TopCourse';

const TopCourses = () => {
    const [courses] = useCourses(); 
    
    const topCourses = courses.slice(0,4);
    return (
        <Container>
           <h2 className="text-center text-success fw-bold mt-2">Top Courses</h2>
            <Row>
                {
                    topCourses.map(course => <TopCourse 
                      key={course.id}
                      course={course}

                    />)
                }
            </Row>
        </Container>
    );
};

export default TopCourses;