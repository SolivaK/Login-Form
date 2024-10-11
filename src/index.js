// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Ensure you have index.css, or remove this line if you don't want styles
import App from './App';  // Ensure App.js exists


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
