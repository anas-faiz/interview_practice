import { useState } from 'react';

function CharacterCount() {
  const [maxLength, setMaxLength] = useState(50);
  const [input, setInput] = useState("");

  const charCount = input.length;

  return (
    <div className="characterCount">
      <h1>Character Count</h1>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              value={maxLength}
              onChange={(e) => setMaxLength(Number(e.target.value))}
              data-testid="maxlength"
            />
          </label>
        </div>

        <textarea
          className="text"
          placeholder="Start Typing"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          data-testid="textarea"
        ></textarea>

        <div className="char-info" data-testid="char-info">{`${charCount} / ${maxLength}`}</div>

        <div className="warnings">

          {maxLength > 0 &&
            charCount / maxLength >= 0.9 &&
            charCount <= maxLength &&<p className="warning-text" data-testid="warning-text">
              {"You are close to the limit!"}
          </p>}

          {charCount > maxLength &&
            <p className="error-message" data-testid="error-text">
              {`Limit exceeded by ${charCount - maxLength} characters`}
          </p>}

        </div>
      </div>
    </div>
  );
}

export default CharacterCount;
