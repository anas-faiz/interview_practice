import React, { useState } from "react";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState(null);
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleCalulateAge = () => {
    if (!birthDate) return setError("Please select a date"), setAge(null);

    const today = new Date();
    const birth = new Date(birthDate);

    if (birth > today)
      return setError("Birthdate cannot be in the future"), setAge(null);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      months--;
    }

    if (months < 0) (months += 12), years--;

    setError("");
    setAge({ years, months, days });
  };

  return (
    <div className="conatiner">
      <h2 className="title"></h2>
      <label className="label" data-testid="label-birthdate">
        Enter/Select a birthdate:
      </label>
      <input
        id="birthdate"
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="input-date"
        data-testid="input-birthdate"
      />
      <button
        className="btn-calc"
        data-testid="btn-calculate"
        onClick={handleCalulateAge}
      >
        Calculate Age
      </button>
      {error && (
        <p data-testid="error-msg" className="error-msg">
          {error}
        </p>
      )}
      {age && (
        <p data-testid="age-result" className="age-result">
          {age.years + " years"}
          <span>{" " + age.months + " months"}</span>
          <span>{" " + age.days + " days"}</span>
        </p>
      )}
    </div>
  );
}

export default AgeCalculator;
