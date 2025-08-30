import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRouter';
import Profile from './Profile'; //just taken as demo.
import Login from './Login';
import Homepage from './Homepage';

import Teams from './components/Teams';
import BusinessPage from './pages/Business/BusinessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/teams" element={<Teams />} />
        <Route path="business/:teamId" element={<BusinessPage />} />
      </Routes>    
    </BrowserRouter>
  )  
}

export default App
