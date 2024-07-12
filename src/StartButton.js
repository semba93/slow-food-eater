import React from 'react';
import './StartButton.css';

const StartButton = ({ onClick }) => {
  return (
    <div className="start-button-container">
      <button className="start-button" onClick={onClick}>Start eating!</button>
    </div>
  );
};

export default StartButton;
