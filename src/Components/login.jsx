import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }

   
    if (username === 'sreenath' && password === '771') {
      console.log('Login successful!');
      alert('Login successful!');
  
      navigate('/tracker');
    } else {
      console.log('Invalid username or password. Please try again.');
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
