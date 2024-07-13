import React, { useState, useEffect } from 'react';
import './EatingView.css';
import eatingGif from './eating.gif'; // Add your eating gif here
import quotes from './NutritionQuotes.txt'; // Import the quotes file

const EatingView = ({ timer }) => {
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
    <div className="eating-view-container">
      <h1>Time left: {timer}</h1>
      <img src={eatingGif} alt="Guy eating pasta" className="eating-gif" />
      <p className="quote">{quote}</p>
    </div>
  );
};

export default EatingView;
