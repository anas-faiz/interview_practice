import "./styles.css";
import { useState } from "react";
import usePrevious from "./usePrevious";

export default function Counter() {
  const [currentCount, setCurrentCount] = useState(0);

  const dec = () => setCurrentCount(currentCount - 1);

  const inc = () => setCurrentCount(currentCount + 1);

  const reset = () => setCurrentCount(0);

  const previousCount = usePrevious(currentCount);

  return (
    <div className="App">
      <h2>Current Count: {currentCount}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={inc}>Increment</button>
    </div>
  );
}
