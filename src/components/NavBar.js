import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { usePosition } from 'use-position'
import { withRouter } from 'react-router-dom'
import clsx from 'clsx'
import {
  AppBar,
  Collapse,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { navStyle } from '../styles/theme'

const NavBar = (props) => {
  const [open, setOpen] = useState(false)
  const [listOpen, setListOpen] = useState(false)
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

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleSocialClick = () => {
    setListOpen(!listOpen)
  }

  const materialNav = () => {
    const classes = navStyle()

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          <Link
            color="secondary"
            className={classes.link}
            href={`https://openweathermap.org/city/${cityId}`}
            target="_blank"
          >
            <Typography variant="h6" nowrap>
            {`${city} ${parseInt(temp)}\xB0F `}
            <img
              alt="weather icon"
              src={`https://openweathermap.org/img/wn/${iconCode}.png`}
            />
            </Typography>
          </Link>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon color="primary" />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button key="Home" onClick={() => {
              props.history.push('/')
              setOpen(false)}}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="Projects" onClick={() => {
              props.history.push('/projects')
              setOpen(false)}}
            >
              <ListItemText primary="Projects" />
            </ListItem>
            <Link className={classes.link} color="secondary" href="https://adavisson.github.io/">
              <ListItem button key="Blog">
                  <ListItemText primary="Blog" />
              </ListItem>
            </Link>
            <Divider className={classes.divider}/>
            <ListItem button onClick={handleSocialClick}>
              <ListItemText primary="Social" />
              {listOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link className={classes.link} color="secondary" href="https://www.linkedin.com/in/andrew-davisson/">
                  <ListItem button className={classes.nested} key="LinkedIn">
                    <LinkedInIcon style={{paddingRight: "5px" }}/>
                    <ListItemText primary="LinkedIn" />
                  </ListItem>
                </Link>
                <Link className={classes.link} color="secondary" href="https://github.com/adavisson">
                  <ListItem button className={classes.nested} key="Github">
                    <GitHubIcon style={{paddingRight: "5px" }}/>
                    <ListItemText primary="Github" />
                  </ListItem>
                </Link>
                <Link className={classes.link} color="secondary" href="https://www.builtincolorado.com/member/akdavisson4/176086">
                  <ListItem button className={classes.nested} key="Built In Colorado">
                    <ListItemText primary="Built In Colorado" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </div>
    )
  }

  return (
    <>
      {!true && bootStrapNav()}
      {true && <React.Fragment>{materialNav()}</React.Fragment>}
    </>
  )
}

export default withRouter(NavBar)
