import React, { useState } from 'react';
import "./style.css";

function EvenOrOddChecker() {
  const [input, setInput] = useState('');
  const [isNumber, setIsNumber] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const handleClick = () => {
    if (!isNaN(Number(input)) && input !== '') {
      setIsNumber(true);
      setLoading(true);
      setTimeout(() => {
        const num = input;
        if (num % 2 === 0) {
          setResult(`${num} is an even number`);
        } else {
          setResult(`${num} is a odd number`);
        }
        setLoading(false);
      }, 1000);
    }else{
        setIsNumber(false)
      setInput('')
      setResult('')
    }
  };

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {isNumber ? ' ' : <p>enter a valid Input</p>}

      <button onClick={handleClick} className="check-button">
        Check
      </button>

      <div className="result-area">
        <div className="result">
          {loading ? <p>checking...</p> : <p>{result}</p>}
        </div>
      </div>
    </div>  
  );
}

export default EvenOrOddChecker;
