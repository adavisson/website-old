import React from 'react';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <div className="phantom" />
        <div className="footer">
        <Nav className="justify-content-center" >
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/andrew-davisson/">LinkedIn</Nav.Link>
          </Nav.Item>
          <span style={{ padding: "5px 5px"}}>|</span>
          <Nav.Item>
            <Nav.Link href="https://github.com/adavisson">GitHub</Nav.Link>
          </Nav.Item>
          <span style={{ padding: "5px 5px"}}>|</span>
          <Nav.Item>
            <Nav.Link href="https://www.builtincolorado.com/member/akdavisson4/176086">Build In Colorado</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
 
export default Footer;