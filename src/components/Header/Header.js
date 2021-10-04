import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >Learn With Kamal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink className="navlink" to="/home">Home</NavLink>
              <NavLink className="navlink" to="/courses">All Courses</NavLink>
              <NavLink className="navlink" to="/admission">Admission</NavLink>
              <NavLink className="navlink" to="/about">About Us</NavLink>
              <NavLink className="navlink" to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;