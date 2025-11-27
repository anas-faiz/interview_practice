import React, { useState, useEffect } from "react";
import "./styles.css";

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) return "Good Morning! ☀";
  if (hour >= 12 && hour < 17) return "Good Afternoon! 🌤";
  if (hour >= 17 && hour < 21) return "Good Evening! 🌆";
  return "Good Night! 🌙✨";
}

export default function Greeting() {
  const [time, setTime] = useState(() => new Date()); // Lazy initializer

  useEffect(() => {
    // Update only once per second, stable interval
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();
  const greeting = getGreeting(hour);

  // Freeze time format → predictable for testing
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      className="modal-content"
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 data-testid="greeting" style={{ marginBottom: "12px" }}>
        {greeting}
      </h2>

      <p
        data-testid="time"
        className="updated-time fade"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        {formattedTime}
      </p>
    </div>
  );
}
