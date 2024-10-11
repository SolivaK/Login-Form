// src/User.js
import React from 'react';
import './UserDashboard.css'; // Import the CSS file

function UserDashboard({ onLogout }) {
  return (
    <div className="user-dashboard">
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      <div className="user-content">
        <h2>User Dashboard</h2>
        <p>Welcome to the User Dashboard!</p>
        <p>This is where you can manage your user settings.</p>
      </div>
    </div>
  );
}

export default UserDashboard;
