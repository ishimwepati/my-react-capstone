// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.svg'; // Replace with the actual path to your logo image

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Your Logo" style={{ width: '80px', height: '80px' }} />
        </div>
        <ul>
          <li>
            {/* Conditionally render the back button */}
            {location.pathname !== '/' && (
              <Link to="/">Go Back to Home List</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
