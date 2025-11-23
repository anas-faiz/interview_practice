import React, { useState } from "react";
import "./styles.css";

export default function LeapYear() {
  const [yearInput, setYearInput] = useState("");

  const [result, setResult] = useState("");

  const [error, setError] = useState("");

  function handleClick() {
    if (!yearInput.trim()) {
      setError("Please enter a year");
      return;
    }

    const year = Number(yearInput);

    if (isNaN(year) || year <= 0) {
      setError("Enter a valid year");
      return;
    }

    // leap year logic
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      setResult(`${year} is a Leap Year`);
      setError(null);
    } else {
      setResult(`${year} is not a Leap Year`);
      setError(null);
    }
  }

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        value={yearInput}
        onChange={(e) => setYearInput(e.target.value)}
      />

      <button onClick={handleClick} data-testid="check-btn">
        Check
      </button>
      {error && <p data-testid="error-msg">{error}</p>}
      {result && (
        <p data-testid="result">
          <strong> {result}</strong>
        </p>
      )}
    </div>
  );
}
