import React from 'react';
import { Circle } from 'react-shapes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Circle r={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
      </header>
    </div>
  );
}

export default App;
