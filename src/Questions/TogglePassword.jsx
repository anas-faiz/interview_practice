import  { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

function TogglePassword() {

  const [isHidden,setIsHidden] =useState(true)

  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={isHidden ? "password" : "text"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick = {()=>setIsHidden(!isHidden)}
        >
          {isHidden ?  <EyeOff size={18}/> : <Eye/> }
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {isHidden ? "Password Hidden" : "Password Visible"}
      </span>
    </div>
  );
}

export default TogglePassword;
