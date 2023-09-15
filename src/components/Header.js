import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="left">
        {location.pathname !== '/' && (
          <Link to="/">
            <i className="fa fa-arrow-left fa-lg text-white" />
          </Link>
        )}
      </div>
      <div className="center">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="right">
        <i className="fa fa-microphone" />
        <i className="fa fa-cog" />
      </div>
    </header>
  );
};

export default Header;
