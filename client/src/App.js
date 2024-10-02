import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import BusinessUI from './pages/BusinessUI';

import AllBusiness from './pages/AllBusiness'

export default function App() {
	return (
		<>
			<Router>
				<Nav />	
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/business/all" element={<AllBusiness />} />
					<Route path="/login" element={<Login/>} />
					<Route path="/business/:id/" element={<BusinessUI/>} />
				</Routes>
			</Router>
		</>
	);
}
