import React from 'react';
import logo from '../img/logo.webp';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src={logo} alt="Internship Connect" />
      <nav>
        <Link to="/login">Login</Link>
        {' | '}
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
