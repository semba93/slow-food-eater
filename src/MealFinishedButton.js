import React from 'react';
import './MealFinishedButton.css';

const MealFinishedButton = ({ onClick }) => {
  return (
    <div className="meal-finished-button-container">
      <button className="meal-finished-button" onClick={onClick}>Meal finished!</button>
    </div>
  );
};

export default MealFinishedButton;
