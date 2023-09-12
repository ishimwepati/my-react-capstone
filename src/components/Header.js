// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* Conditionally render the back button */}
            {location.pathname !== '/' && (
              <Link to="/">Go Back to  Home List</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
