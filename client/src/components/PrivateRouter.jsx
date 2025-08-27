import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get('/api/profile', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    })
    .then(() => setAuth(true))
    .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <div>Loading</div>;
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;