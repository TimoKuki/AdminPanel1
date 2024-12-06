import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styles for Header

const Header = () => {
  return (
    <header className="header">
      <h1>Admin Portal</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

