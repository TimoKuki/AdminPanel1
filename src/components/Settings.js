import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-card">
        <h3>Preferences</h3>
        <p>Change your application settings here.</p>
        <button className="settings-button">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
