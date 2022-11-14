import React from "react";
import "./Button.scss";
const Button = ({
  title,
  onClick,
  varient = "primary",
  borderRadius = "10px",
  width,
  type = "button",
}) => {
  return (
    <button
      style={{ borderRadius, width }}
      className={`btn ${varient}`}
      onClick={onClick}
      type={type}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
