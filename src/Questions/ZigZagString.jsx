import React, { useState } from "react";

const ZigzagString = () => {
  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  function handleZigZag() {
    const split = input.split(",");
    let finalSting = "";
    for (let i = 0; i < split.length; i++) {
      if (i != 0 && i % 2 != 0) {
        const reversed = split[i].trim().split("").reverse().join("");
        finalSting += reversed;
      } else {
        finalSting += split[i].trim();
      }
    }
    setOutput(finalSting);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="input-box"
      />
      <button onClick={handleZigZag} data-testid="submit-button">
        Submit
      </button>
      <p data-testid="output-result">Output: {output}</p>
    </div>
  );
};

export default ZigzagString;
