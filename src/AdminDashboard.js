import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate back to login page
    navigate('/');
  };

  const buttonStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: '#ff4c4c', // Red for visibility
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    zIndex: 1000, // Ensure the button is above other elements
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <button onClick={handleLogout} style={buttonStyle}>
        Logout
      </button>
      <h1>Admin Dashboard</h1>
      {/* Admin Dashboard content goes here */}
    </div>
  );
}

export default AdminDashboard;
