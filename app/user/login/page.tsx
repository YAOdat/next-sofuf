'use client';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth';
import { app } from '../../../config/firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const auth = getAuth(app);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
      window.location.href = '/';
    } catch (error: any) {
      setError(error.message);
      alert(error.message)
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
