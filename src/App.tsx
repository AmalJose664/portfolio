import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const AllProjects = lazy(() => import('./pages/AllProjects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Resume = lazy(() => import('./pages/Resume'));

// Loading fallback component
function PageLoader() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-4">
				<div className="size-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
				<p className="text-sm text-muted-foreground">Loading...</p>
			</div>
		</div>
	);
}

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
				<Suspense fallback={<PageLoader />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<AllProjects />} />
						<Route path="/projects/:id" element={<ProjectDetail />} />
						<Route path="/resume" element={<Resume />} />
					</Routes>
				</Suspense>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
