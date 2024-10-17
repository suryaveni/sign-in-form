// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="login-box">
        <div className="logo">
          <h1>Zero <span>To Hero</span></h1>
        </div>
        <form className="login-form">
          <h2>Sign In</h2>
          <div className="input-group">
            <input type="text" placeholder="Username or email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn">Sign In</button>
          <div className="extras">
            <p><a href="#">Deleted OTP Account?</a></p>
            <p>New user? <a href="#">Register</a></p>
            <p><a href="#">Privacy Notice</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
