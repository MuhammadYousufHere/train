import React from "react";

const Input = ({
  type = "text",
  label,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  name,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        value={value}
      />
    </div>
  );
};

export default Input;
