import React, { useState, useEffect } from 'react';
import './App.css';
import StartButton from './StartButton';
import EatingView from './EatingView';
import StopEatingView from './StopEatingView';
import MealFinishedButton from './MealFinishedButton';

const App = () => {
  const [started, setStarted] = useState(false);
  const [eating, setEating] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval = null;
    if (started && eating && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (started && eating && timer === 0) {
      setEating(false);
      setTimer(5);
    } else if (started && !eating && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (started && !eating && timer === 0) {
      setEating(true);
      setTimer(10);
    }
    return () => clearInterval(interval);
  }, [started, eating, timer]);

  return (
    <div className="App">
      {!started && <StartButton onClick={() => { setStarted(true); setEating(true); }} />}
      {started && eating && <EatingView timer={timer} />}
      {started && !eating && <StopEatingView timer={timer} />}
      {started && <MealFinishedButton onClick={() => { setStarted(false); setEating(false); setTimer(10); }} />}
    </div>
  );
}

export default App;
