import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all the fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Signing up with:', username, password);
    alert('Signup successful!');

    
    navigate('/tracker');
  };

  return (
    <div className="signup-container">
      <h1>SIGNUP</h1>
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

        <label htmlFor="confirmPassword">CONFIRM PASSWORD:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
