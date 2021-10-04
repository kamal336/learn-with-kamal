import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Amission.css'

const Admission = () => {
    return (
        <Container>
            <Row className="top-margin">
                
                <h3>Country Students</h3>
                <p>Country student who can payment by bkash,nogod,dutch bangla mobile banking and all debit card</p>

                <h3>For International Students</h3>
                <p>Students who are not from country may apply online independently through the website. International students can download the application form from our website and send it to our Academic Advisers with all Scanned Copy of Academic Papers, Photographs, and References from their local authority. After checking out all documents the Academic Adviser will give confirmation for your study at Learn with kamal.</p>
                <h5>If you want to apply directly please check that you have attached the following documents:</h5>
            <ul className="ms-4">
                <li>Photocopies of all your educational certificates</li>
                <li>References from the Schools/Colleges Authority or other</li>  
               <li>Responsible Authority for Education. The References must</li>
                <li>be on Headed Paper from an academic or an employer and 4.4.the original, not photocopies.</li>
                 <li>4 passport size photos.</li>
            </ul>
            <h3>Session:</h3>
            <p>Learn With Kamal offer 4 session in a year (March, June, Spetember and December)</p>
            <h3>Application submission time:</h3>
            <p>Available in Four Sessions-March, June, September & December. Student must send the application to the authority before month of session start time. The session starts after the 15th of the session month.</p>
            </Row>
        </Container>
    );
};

export default Admission;