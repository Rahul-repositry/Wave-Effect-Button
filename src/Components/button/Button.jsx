import React, { useEffect, useRef } from "react";
import "./style.css";
import buttonHook from "./buttonHook";

const Button = ({
  title = "Button",
  type,
  color = "black",
  txtColor = "white",
  fontSize = "18",
}) => {
  const buttonRef = useRef();
  buttonHook(buttonRef, {});
  return (
    <>
      {type === "filled" && (
        <button
          className="filled"
          style={{
            background: color,
            fontSize: `${fontSize}px`,
            color: txtColor,
          }}
          ref={buttonRef}
        >
          <a href="#">{title}</a>
        </button>
      )}
      {type === "outline" && (
        <button
          className="filled"
          style={{
            border: `1px solid ${color}`,
            fontSize: `${fontSize}px`,
            color: txtColor,
          }}
        >
          <a href="#">{title}</a>
        </button>
      )}
    </>
  );
};

export default Button;
