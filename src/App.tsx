import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GameLoop } from './GameLoop';
import { TestSensor } from './classes/system/Sensors/TestSensor';

function App() {
  const gl = new GameLoop();
  gl.Start();
  gl.addGameObject(new TestSensor());
  gl.Stop();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Look at me</p>
      </header>
    </div>
  );
}

export default App;
