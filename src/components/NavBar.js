import React, {useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  const [iconCode, setIconCode] = useState("")
  const [city, setCity] = useState("")
  const [temp, setTemp] = useState("")
  const appId = '440287f1b78a560637a7abe6f38d3739'


  useEffect(() => {
    const setData = async () => {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=80202&units=imperial&appid=${appId}`)
      const data = await result.json()
      console.log(data)
      setCity(data.name)
      setTemp(data.main.temp)
      setIconCode(data.weather[0].icon)
    }
    setData()
  }, [])

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
      </Navbar.Collapse>
      <Nav className="weather">
        <Navbar.Text>{`${city} ${temp}\xB0 `}
          <img alt="weather icon" src={`https://openweathermap.org/img/wn/${iconCode}.png`} />
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
}
 
export default NavBar;