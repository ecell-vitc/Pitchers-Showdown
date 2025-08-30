import useAuthStore from '../../lib/store';
import '../styles/Login.css';
import background from '../assets/background_login.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuthStore()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://pitchers-showdown-server.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        mode: 'cors'
      });

      const data = await response.json();
    if (!response.ok) {
        setError(data.message || 'Login failed');
        return;
    }
        
      localStorage.setItem('token', data.jwtToken);
      login(data.jwtToken, data.balance);
      navigate('/profile');
    } catch (err) {
      console.error(err)
      setError('An unexpected error occurred!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <center>
        <div className="logincard">
          <div className="loginheader">Welcome!</div>
          <div className="loginsubheader">Participant Login</div>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="textboxlabel">E mail</div>
            <input
              className="textbox"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <div className="textboxlabel">Password</div>
            <input
              className="textbox"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <center>
              <button className="loginbtn" type="submit" disabled={loading}>
                <div className="loginbtntext">
                  {loading ? 'Logging in...' : 'Login'}
                </div>
              </button>
            </center>
          </form>
          {error && (
            <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
          )}
        </div>
      </center>
    </div>
  );
}