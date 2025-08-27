// App.js or your router file
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRouter';
import Profile from './Profile'; //just taken as demo.
import Login from './Login';

<Routes>
  <Route path="/login" element={<Login />} />
  <Route
    path="/profile"
    element={
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    }
  />
</Routes>