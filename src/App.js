import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';
import './index.css';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
