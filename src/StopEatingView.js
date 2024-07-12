import React from 'react';
import './StopEatingView.css';

const StopEatingView = ({ timer }) => {
  return (
    <div className="stop-eating-view-container">
      <h1>Time left: {timer}</h1>
      <h2>Stop eating!</h2>
    </div>
  );
};

export default StopEatingView;
