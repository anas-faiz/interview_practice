import React, { useState } from "react";
import "./styles.css";

function EvenOrOddChecker() {
  const [input, setInput] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const handleClick = () => {
    if (!isNaN(Number(input)) && input !== "") {
      setIsNumber(true);
      setLoading(true);
      setTimeout(() => {
        const num = input;
        if (num % 2 === 0) {
          setResult(`The number ${num} is even.`);
        } else {
          setResult(`The number ${num} is odd.`);
        }
        setLoading(false);
      }, 1000);
    } else {
      setIsNumber(false);
      setInput("");
      setResult("Please enter a valid number.");
    }
  };

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        data-testid="number-input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button
        onClick={handleClick}
        className="check-button"
        data-testid="check-button"
      >
        Check
      </button>

      <div className="result-area">
        <div className="result">
          {loading ? (
            <p data-testid="loading">Checking....</p>
          ) : (
            <p data-testid="result">{result}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
