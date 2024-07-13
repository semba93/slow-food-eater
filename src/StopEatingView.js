import React, { useState, useEffect } from 'react';
import './StopEatingView.css';
import quotes from './SlowEatQuotes.txt'; // Import the quotes file

const StopEatingView = ({ timer }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch(quotes)
      .then(response => response.text())
      .then(text => {
        const quotesArray = text.split('\n').filter(quote => quote.trim() !== '');
        const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
        setQuote(randomQuote);
      });
  }, []);

  return (
    <div className="stop-eating-view-container">
      <h1>Time left: {timer}</h1>
      <h2>Stop eating!</h2>
      <p className="quote">{quote}</p>
    </div>
  );
};

export default StopEatingView;
