import { useState } from "react";

function CopyClipboard() {
  const [input, setInput] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(false);

  async function handleCopy(input) {
    if (input.length < 1 || input.trim().length < 1) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    } else {
      const data = await navigator.clipboard.writeText(input);

      console.log(data);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              handleCopy(input);
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
          {isCopied && <p data-testid="copied-message">Copied!</p>}
          {error && (
            <p data-testid="error-message">Type some values to copy </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;
