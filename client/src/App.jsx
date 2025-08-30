import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRouter';
import Homepage from './pages/Homepage'
import BusinessPage from './pages/Business/BusinessPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Teams from './components/Teams';

function App() {
  return (
    <BrowserRouter>
      <header className='fixed top-0 start-0 end-0 py-5 px-10 bg-[rgba(0,0,0,0.75)] z-999 flex justify-center sm:justify-end'>
        <nav className='nav' style={{ display: 'inline-flex' }}>
          <Link to='/'>Home</Link>
          <Link to='/business'>Teams</Link>
          <Link to='/profile'>Investments</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/teams" element={<Teams />} /> 
        <Route path="business/:teamId" element={<BusinessPage />} />
      </Routes>    
    </BrowserRouter>
  )  
}

export default App
