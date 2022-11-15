import React, { useState, useRef } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import flag from '../../assets/flag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCaretDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown/Dropdown';
import { data } from './data';
import useOutsideClick from '../../hooks/useOutsideClick';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = () => {
  const [navTop, setNavTop] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const productRef = useRef();
  const ticketsRef = useRef();
  useOutsideClick(ticketsRef, () => setShowTicket(false));
  useOutsideClick(productRef, () => setShowDropdown(false));
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavTop(0);
    } else {
      setNavTop(-110);
    }
    prevScrollpos = currentScrollPos;
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const showTicketOptions = () => {
    setShowTicket(!showTicket);
  };

  return (
    <>
      <div
        className='navbar-container'
        style={{ top: navTop + 'px' }}
      >
        <nav className='navbar-body'>
          <div className='logo-box'>
            <Link
              to='/'
              className='logo'
            >
              <img
                src={logo}
                alt='connecto'
              />
            </Link>
          </div>
          <div className='mobile'>
            <div className='flag'>
              <img
                src={flag}
                alt='us'
              />
            </div>
            <div
              className='burger'
              onClick={handleSidebar}
            >
              <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
            </div>
          </div>
          <ul className='screen'>
            <li
              onClick={handleDropDown}
              ref={productRef}
            >
              Products
              <FontAwesomeIcon
                icon={faCaretDown}
                size='xl'
              />
              {showDropdown && <Dropdown options={data.products} />}
            </li>

            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li
              onClick={showTicketOptions}
              ref={ticketsRef}
            >
              Tickets
              <FontAwesomeIcon
                icon={faCaretDown}
                size='xl'
              />
              {showTicket && <Dropdown options={data.tickets} />}
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <img
                src={flag}
                alt='us'
              />
            </li>
          </ul>
          <ul className='tab '>
            <li>
              <Link href='/'>Login</Link>
            </li>
            <li>
              <Link href='/'>Help</Link>
            </li>
            <div className='flag'>
              <img
                src={flag}
                alt='us'
              />
            </div>
          </ul>
        </nav>
      </div>
      <Sidebar
        toggle={showSidebar}
        close={() => setShowSidebar(false)}
      />
    </>
  );
};

export default Navbar;
