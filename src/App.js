import React, { useState, useEffect } from 'react';
import './App.css';
import StartButton from './StartButton';
import EatingView from './EatingView';
import StopEatingView from './StopEatingView';
import MealFinishedButton from './MealFinishedButton';

const App = () => {
  const [started, setStarted] = useState(false);
  const [eating, setEating] = useState(false);
  const [eatingTime, setEatingTime] = useState(20);
  const [pauseTime, setPauseTime] = useState(10);
  const [timer, setTimer] = useState(eatingTime);

  useEffect(() => {
    let interval = null;
    if (started && eating && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (started && eating && timer === 0) {
      setEating(false);
      setTimer(pauseTime);
    } else if (started && !eating && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (started && !eating && timer === 0) {
      setEating(true);
      setTimer(eatingTime);
    }
    return () => clearInterval(interval);
  }, [started, eating, timer, eatingTime, pauseTime]);

  const handleEatingTimeChange = (event) => {
    const value = Math.min(Math.max(Number(event.target.value), 1), 180);
    setEatingTime(value);
    if (!started) setTimer(value);
  };

  const handlePauseTimeChange = (event) => {
    const value = Math.min(Math.max(Number(event.target.value), 1), 180);
    setPauseTime(value);
  };

  return (
    <div className="App">
      {!started && (
        <>
          <h1 className="title">Slow Food Eater</h1>
          <p className="description">This app helps you pace your eating with alternating eating and resting periods. Click "Start eating!" to begin the cycle and follow the timer instructions!</p>
          <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6357517/' target='_blank' >National Library of Medicine article</a>
          <a href='https://www.cambridge.org/core/journals/proceedings-of-the-nutrition-society/article/slower-selfreported-eating-rate-is-associated-with-favourable-cardiometabolic-risk-factors-in-uk-adults/B8C5A4D18D3C9C1F6E7D2C43B109ADB2' target='_blank'>Cambridge study on cardio-metabolic risk factors</a>
          <a href='https://www.webmd.com/obesity/features/slow-down-you-eat-too-fast' target='_blank'>Slow Down, You Eat Too Fast by WebMD</a>
          <div className="input-container">
            <label htmlFor="eating-time">Eating time (seconds):</label>
            <input
              id="eating-time"
              type="number"
              value={eatingTime}
              onChange={handleEatingTimeChange}
              min="1"
              max="180"
            />
          </div>
          <div className="input-container">
            <label htmlFor="pause-time">Pause time (seconds):</label>
            <input
              id="pause-time"
              type="number"
              value={pauseTime}
              onChange={handlePauseTimeChange}
              min="1"
              max="180"
            />
          </div>
          <StartButton onClick={() => { setStarted(true); setEating(true); }} />
        </>
      )}
      {started && eating && <EatingView timer={timer} />}
      {started && !eating && <StopEatingView timer={timer} />}
      {started && <MealFinishedButton onClick={() => { setStarted(false); setEating(false); setTimer(eatingTime); }} />}
    </div>
  );
}

export default App;
