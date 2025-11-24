import { useState } from 'react';
// ✅ Complete the custom hook below
function useToggle(initialValue = false) {
  // your code here
  const [toggle, setToggle] = useState(initialValue);
  const value = () => setToggle((prev) => !prev)
  
  return [toggle,value]
}

export default function App() {
  // ✅ Use the custom hook inside this component
   const [isOn, toggle] = useToggle(false);

  return (
    /* your toggle function for the onClick method */
    <button onClick={toggle} data-testid="toggle-button">
      {/* Render "ON" or "OFF" based on state */}
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
