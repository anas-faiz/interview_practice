import React, { useState } from "react";
import { colorNameToHex } from "./colorData";
import "./styles.css";

const ColorExplorer = ({ name }) => {
  const [colorInput, setColorInput] = useState("");
  const [color, setColor] = useState(null);
  const [error, setError] = useState("");

  function handleSearch() {
    const hex = colorNameToHex(colorInput.trim().toLowerCase());
    if (hex) {
      setColor({ name: colorInput, hex });
      setError("");
    } else {
      setError("Sorry,I couldn't recognize that color");
      setColor(null);
    }
  }

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={colorInput}
          onChange={(e) => setColorInput(e.target.value)}
        />
        <button onClick={handleSearch} data-testid="search-button">
          🔍
        </button>
      </div>
      {error && (
        <p className="error" data-testid="error-msg">
          {error}
        </p>
      )}
      {color && (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: color.hex }}
          ></div>
          <p data-testid="color-name">
            <strong>Name:</strong> {color.name}
          </p>
          <p data-testid="color-hex">
            <strong>Hex:</strong> {color.hex}
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorExplorer;
