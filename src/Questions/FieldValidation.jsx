import { useState } from "react";
import "./styles.css";

function AsteriskFieldValidation() {
  const [nameInput, setNameInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const [nameError, setNameError] = useState("");
  const [locationError, setLocationError] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Reset previous errors and success message
    setNameError("");
    setLocationError("");
    setIsSubmitted(false);

    let hasError = false;

    if (nameInput.trim() === "") {
      setNameError("Name is required");
      hasError = true;
    }

    if (locationInput.trim() === "") {
      setLocationError("Location is required");
      hasError = true;
    }

    if (!hasError) {
      setIsSubmitted(true);
    }
  }

  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>

      <form className="form"
        data-testid="form"
        onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className="input"
            data-testid="name-input"
            type="text"
            placeholder="Enter your name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          {nameError && <p className="inline-error"
            data-testid="name-error"
          >{nameError}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            className="input"
            data-testid="location-input"
            type="text"
            placeholder="Enter your location"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
          />
          {locationError && <p className="inline-error"
            data-testid="location-error"
          >{locationError}</p>}
        </div>

        <button type="submit" className="submit-button"
        data-testid="submit-button">
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div data-testid="success-mesage">
          <p>Submitted Successfully!</p>
          <p>Name: {nameInput}</p>
          <p>Location: {locationInput}</p>
        </div>
      )}
    </div>
  );
}

export default AsteriskFieldValidation;
