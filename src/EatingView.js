import React from 'react';
import './EatingView.css';
import eatingGif from './eating.gif'; // Add your eating gif here

const EatingView = ({ timer }) => {
  return (
    <div className="eating-view-container">
      <h1>Time left: {timer}</h1>
      <img src={eatingGif} alt="Guy eating pasta" className="eating-gif" />
    </div>
  );
};

export default EatingView;
