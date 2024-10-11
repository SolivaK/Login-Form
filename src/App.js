// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './Admin'; // Import Admin component
import UserDashboard from './User';   // Import User component
import Login from './Login'; // Import Login component

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is user
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123' && role === 'admin') {
      setIsLoggedIn(true);
    } else if (username === 'user' && password === 'user123' && role === 'user') {
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setRole('user');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to={role === 'admin' ? '/admin' : '/user'} />
            ) : (
              <Login 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                role={role}
                setRole={setRole}
                handleSubmit={handleSubmit}
                message={message}
              />
            )
          }
        />
        <Route
          path="/admin"
          element={isLoggedIn && role === 'admin' ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/user"
          element={isLoggedIn && role === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
