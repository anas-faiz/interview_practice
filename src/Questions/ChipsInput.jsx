import React, { useState } from 'react';
import './style.css';

function ChipsInput() {
  const [query, setQuery] = useState('');
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      e.preventDefault();
      const newChip = {
        id: Date.now() + Math.random(), // unique id
        value: query.trim()
      };
      setChips([...chips, newChip]);
      setQuery('');
    }
  };

  const handleRemove = (id) => {
    setChips(chips.filter(chip => chip.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press Enter"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ padding: "8px", width: "200px" }}
      />

      <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
        {chips.map((chip) => (
          <button
            key={chip.id}
            className="ChipsBox"
            onClick={() => handleRemove(chip.id)}
          >
            {chip.value} ✕
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
