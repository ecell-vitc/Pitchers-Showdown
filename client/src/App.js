import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
	return (
		<>
			<Router>
				<Nav />	
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login/>} />
				</Routes>
			</Router>
		</>
	);
}
