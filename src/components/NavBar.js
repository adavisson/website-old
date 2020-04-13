import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {

  return (
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="https://adavisson.github.io">Blog</Nav.Link>
          <NavDropdown title="Social" id="basic-nav-dropdown-social">
            <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/andrew-davisson/">LinkedIn</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://github.com/adavisson">GitHub</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://www.builtincolorado.com/member/akdavisson4/176086">Built In Colorado</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
        <Nav inline>
          <Nav.Link>Weather</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default NavBar;