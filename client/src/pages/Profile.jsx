import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';
import background from '../assets/background_profile.png';
import useAuthStore from '../../lib/store';


function logout() {
  useAuthStore.getState().logout();
  localStorage.removeItem('token');
  window.location.href = '/login';
}


export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const token = useAuthStore(state => state.auth.user)

  useEffect(() => {
    const controller = new AbortController();
    const fetchProfile = async () => {
      try {
        const res = await fetch('https://pitchers-showdown-server.onrender.com/api/profile', { 
            method: 'GET',
            headers: {'x-access-token': token },
            signal: controller.signal,
            mode: 'cors'
         });
        if (!res.ok) {
          throw new Error(`Failed to fetch profile (${res.status})`);
        }
        const data = await res.json();
        setProfile(data);
        setError('');
      } catch (err) {
        console.log(err);
        if (err.name === 'AbortError') return;
        setError('Could not load profile. Redirecting to login...');
        timerRef.current = setTimeout(() => {
          navigate('/login', { replace: true });
        }, 5000); 
      }
    };

    fetchProfile();

    return () => {
      controller.abort();
      if (timerRef.current) {
          clearTimeout(timerRef.current);
      }
    };
  }, [navigate]);

  if (error) return <div className="profile-error">{error}</div>;
  if (!profile) 
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
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
            overflow: 'hidden',
        }} >
        <div className='card'>
            <center>
            <div className='header'>
              Loading...
            </div>
            </center>
        </div>
    </div>
  );

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
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
            overflow: 'hidden',
  }}
    >

      <main className='centerWrap'>
        <div className='card'>
            <div className='header'>
              Your Investments!
            </div>
            <div className='subheader'> 
              Remaining Investment Amount: {useAuthStore.getState().balance.toLocaleString()}
            </div>
          <div className='listWrap'>
            <div className='list'>
              {profile.investments.map((inv) => (
                <div className='item' key={inv.team}>
                  <div className='teamName'>{inv.team}</div>
                  <div className='amount'>{inv.amt.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <button className='logout' onClick={logout}>
        Logout →
      </button>
    </div>
  );
} 