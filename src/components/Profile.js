import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-card">
        <h3>User Information</h3>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
