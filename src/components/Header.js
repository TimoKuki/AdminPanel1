import React from 'react';
import './Header.css'; // For styling

const Header = () => {
  return (
    <header className="admin-header">
      <div className="logo">
        <h1>AdminPortal</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
      <div className="user-info">
        <span className="username">John Doe</span>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
