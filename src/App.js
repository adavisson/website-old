import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'
import { theme } from './styles/theme'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  )
}

export default App
