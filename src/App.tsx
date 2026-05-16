import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
	// Initialize theme on mount
	useEffect(() => {
		const stored = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = stored || (prefersDark ? 'dark' : 'light');

		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme);

		if (!stored) {
			localStorage.setItem('theme', theme);
		}
	}, []);

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects/:id" element={<ProjectDetail />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
