import { lazy, Suspense } from 'react';
import Hero from '../components/sections/Hero';

// Lazy load below-the-fold sections
const Technologies = lazy(() => import('../components/sections/Technologies'));
const Experience = lazy(() => import('../components/sections/Experience'));
const Projects = lazy(() => import('../components/sections/Projects'));

// Section loader
function SectionLoader() {
	return (
		<div className="flex min-h-[400px] items-center justify-center">
			<div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
		</div>
	);
}

export default function Home() {
	return (
		<>
			<Hero />
			<Suspense fallback={<SectionLoader />}>
				<Technologies />
			</Suspense>
			<Suspense fallback={<SectionLoader />}>
				<Experience />
			</Suspense>
			<Suspense fallback={<SectionLoader />}>
				<Projects />
			</Suspense>
		</>
	);
}
