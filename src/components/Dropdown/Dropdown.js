import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";
const Dropdown = ({ options = [], style }) => {
  return (
    <div className='dropdown-container' style={style}>
      <div className='dropdown-content'>
        <ul>
          {options.map((item) => {
            return (
              <li key={item.title}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
