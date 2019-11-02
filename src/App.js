import React from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleLetter from './components/BubbleLetter';

function App() {
  return (
    <>
      <div id="container">
        <BubbleLetter letter={'W'} />
        <BubbleLetter letter={'E'} />
        <BubbleLetter letter={'L'} />
        <BubbleLetter letter={'C'} />
        <BubbleLetter letter={'O'} />
        <BubbleLetter letter={'M'} />
        <BubbleLetter letter={'E'} />
      </div>
      <p id="construction">
        This page is currently under construction. Thank you for your patience!
      </p>
    </>
  );
}

export default App;
