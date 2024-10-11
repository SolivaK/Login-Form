// src/Admin.js
import React from 'react';
import './AdminDashboard.css'; // Import the CSS file

function AdminDashboard({ onLogout }) {
  return (
    <div className="admin-dashboard">
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      <div className="admin-content">
        <h2>Admin Dashboard</h2>
        <p>Welcome to the Admin Dashboard!</p>
        <p>This is where you can manage your admin settings.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
