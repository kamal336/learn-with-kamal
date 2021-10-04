import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand><h3 className="text-success border rounded p-2 fw-bold">Learn With Kamal</h3></Navbar.Brand>
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