import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useFormikContext } from "formik";

import React from "react";
import "./input.scss";
const UiInput = ({
  label,
  type = "text",
  onChange,
  value,
  name,
  placeholder,
  id,
  onFocus,
  bold,
  withIcon,
  onBlur,
  children,
}) => {
  const style = {
    fontWeight: bold && "600",
    fontSize: bold && "1rem",
  };
  return (
    <div className='input-group'>
      <label htmlFor={id} style={{ visibility: label ? "visible" : "hidden" }}>
        {label}
      </label>
      <div className='input-box'>
        <input
          type={type}
          value={value}
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          onFocus={onFocus}
          style={style}
        />
        {withIcon && <FontAwesomeIcon icon={faChevronRight} size='1x' />}
        {children}
      </div>
    </div>
  );
};

export default UiInput;
