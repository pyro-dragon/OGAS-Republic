import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GameLoop } from './GameLoop';
import { TestSensor } from './classes/system/Sensors/TestSensor';
import { NotBlock } from './classes/system/LogicBlocks/NotBlock';
import { IfBlock } from './classes/system/LogicBlocks/IfBlock';
import { ConsoleLogOutput } from './classes/system/Outputs/ConsoleLogOutput';
import { Value } from './classes/system/Value';

function App() {
  const gl = new GameLoop();
  const testSensor = new TestSensor();
  const notBlock = new NotBlock();
  const ifBlock = new IfBlock();
  const display = new ConsoleLogOutput();
  const display2 = new ConsoleLogOutput();
  gl.addGameObject(testSensor);
  notBlock.setInput("0", testSensor.output);
  gl.addGameObject(notBlock);
  ifBlock.setInput("0", notBlock.outputs.get("0") || new Value("emergency", 0));
  ifBlock.setInput("1", new Value("always true", true));
  gl.addGameObject(ifBlock);
  display.input = ifBlock.output;
  gl.addGameObject(display);
  display2.input = testSensor.output;
  gl.addGameObject(display2);
  return (
    <div>
      <button onClick={gl.Start}>Start</button>
      <button onClick={gl.Stop}>Stop</button>
    </div>
  );
}

export default App;
