import React, { useState } from "react";
import "./styles.css";

export default function GetWeekday() {
  const [dateInput, setDateInput] = useState(null);
  const [day, setDay] = useState("");

  function findWeekday() {
    if (!dateInput) return;

    const [year, month, day] = dateInput.split("-");
    const date = new Date(Date.UTC(year, month - 1, day));

    const options = {
      weekday: "long",
      timeZone: "UTC",
    };

    const dayName = date.toLocaleDateString("en-US", options);
    setDay(dayName);
  }

  return (
    <div className="container">
      <h1>Get Weekday</h1>
      <input
        type="date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        data-testid="date-input"
      />
      <button onClick={findWeekday} data-testid="find-day-btn">
        Find Day
      </button>
      {day && (
        <div>
          the date falls on a <strong data-testid="result">{day}</strong>
        </div>
      )}
    </div>
  );
}
