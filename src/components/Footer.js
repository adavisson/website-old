import React from 'react';
import { Nav } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Footer = () => {
  return (
    <div>
      <div className="phantom" />
        <div className="footer">
        <Nav className="justify-content-center" >
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/andrew-davisson/">
              <LinkedInIcon />
            </Nav.Link>
          </Nav.Item>
          <span style={{ padding: "5px 5px"}}>|</span>
          <Nav.Item>
            <Nav.Link href="https://github.com/adavisson">
              <GitHubIcon />
            </Nav.Link>
          </Nav.Item>
          <span style={{ padding: "5px 5px"}}>|</span>
          <Nav.Item>
            <Nav.Link href="https://www.builtincolorado.com/member/akdavisson4/176086">Built In Colorado</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
 
export default Footer;