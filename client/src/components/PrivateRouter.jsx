import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../lib/store';

const PrivateRoute = ({ children }) => {
  const is_logged = useAuthStore((state) => state.auth.is_logged);

  if (!is_logged) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;