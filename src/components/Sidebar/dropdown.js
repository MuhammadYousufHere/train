import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Dropdown = ({ item, dropdown, close }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div
        className='head'
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span>{item.title}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {showDropdown && (
        <div className='dropdown-content'>
          <ul className='dropdown-list'>
            {dropdown?.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={close}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
