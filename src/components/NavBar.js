import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { usePosition } from 'use-position'
import { withRouter } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { navStyle } from '../styles/theme'

const NavBar = (props) => {
  const [expanded, setExpanded] = useState(false)
  const [iconCode, setIconCode] = useState('')
  const [city, setCity] = useState('')
  const [cityId, setCityId] = useState('5419384')
  const [temp, setTemp] = useState('')
  const appId = '440287f1b78a560637a7abe6f38d3739'
  const { latitude, longitude, error } = usePosition()

  useEffect(() => {
    const setData = async () => {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          latitude || 39.74
        }&lon=${longitude || -104.99}&units=imperial&appid=${appId}`
      )
      const data = await result.json()
      setCity(data.name)
      setTemp(data.main.temp)
      setIconCode(data.weather[0].icon)
      setCityId(data.id)
    }
    setData()
  }, [latitude, longitude])

  const bootStrapNav = () => {
    return (
      <Navbar expanded={expanded} sticky="top" expand="lg">
        <Navbar.Brand
          onClick={() => {
            if (expanded) {
              setExpanded(false)
            }
            props.history.push('/')
          }}
        >
          Home
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => {
                if (expanded) {
                  setExpanded(false)
                }
                props.history.push('/resume')
              }}
            >
              Resume
            </Nav.Link>
            <Nav.Link href="https://adavisson.github.io">Blog</Nav.Link>
            <NavDropdown title="Social" id="basic-nav-dropdown-social">
              <NavDropdown.Item
                target="_blank"
                href="https://www.linkedin.com/in/andrew-davisson/"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://github.com/adavisson"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.builtincolorado.com/member/akdavisson4/176086"
              >
                Built In Colorado
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => {
                if (expanded) {
                  setExpanded(false)
                }
                props.history.push('/projects')
              }}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="weather">
          <Nav.Link
            href={`https://openweathermap.org/city/${cityId}`}
            target="_blank"
          >
            {`${city} ${parseInt(temp)}\xB0F `}
            <img
              alt="weather icon"
              src={`https://openweathermap.org/img/wn/${iconCode}.png`}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }

  const materialNav = () => {
    const classes = navStyle(theme => ({
      offset: theme.mixins.toolbar,
    }))

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.offeset} />
      </div>
    )
  }

  return (
    <>
    {true && bootStrapNav()}
    {!true && (
      <React.Fragment>
        {materialNav()}
      </React.Fragment>
    )}
    </>
  )
}

export default withRouter(NavBar)
