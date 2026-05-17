import { Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Width from '../utils/Width';
import { projects } from '../../lib/data';
import type { Project } from '../../lib/types';
import SplitText from '../ui/SplitText';

function ProjectCard({ project, isEven }: { project: Project; isEven: boolean }) {
	const flyDirection = isEven ? -1 : 1;

	return (
		<motion.article
			initial={{ x: 100 * flyDirection, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
			className="items-center lg:grid lg:grid-cols-2 mb-40"
		>
			<Link
				to={`/projects/${project.id}`}
				className="group relative mb-4 block"
				style={!isEven ? { gridColumn: '2 / 2', gridRow: '1 / 1' } : undefined}
			>
				<div className="absolute inset-0 transition-colors group-hover:bg-transparent dark:bg-neutral-950/60"></div>
				<img
					src={project.thumbnail}
					alt={project.title}
					className="aspect-video object-cover"
					loading="lazy"
				/>
			</Link>
			<motion.div
				initial={{ x: 100 * flyDirection, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: .4 }}
				className={`z-10 ${isEven ? 'lg:-ml-10' : 'lg:-mr-10'}`}
				style={!isEven ? { gridColumn: '1 / 1', gridRow: '1 / 1' } : undefined}
			>
				<div className={`mb-2 flex items-center ${isEven ? 'lg:flex-row-reverse' : ''} gap-4`}>
					<h2 className="text-2xl font-bold">{project.title}</h2>
					{project.live && (
						<a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary">
							<Radio className="size-4" />
							Live
						</a>
					)}
				</div>
				<div className="mb-2 rounded-lg border border-teal-700/40! bg-card p-4 text-sm lg:bg-card/80 lg:shadow-lg lg:backdrop-blur-sm">
					<p className="mb-4 leading-6">{project.description}</p>
					<Link to={`/projects/${project.id}`} className="underline">
						Read more
					</Link>
				</div>
				<p className={`text-sm text-muted-foreground ${isEven ? 'lg:text-right' : ''}`}>
					{project.stack.slice(0, 5).join(' • ')}
				</p>
			</motion.div>
		</motion.article>
	);
}

export default function Projects() {
	return (
		<Width>
			<section className="mt-12 pb-12 md:mt-20" id="projects">
				{/* <motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
					className="mb-16 text-4xl font-bold text-center"
				>
					Projects
				</motion.h1> */}
				<div className='flex items-center w-full justify-center mb-16 '>
					<SplitText text='Projects' className='text-4xl font-bold text-center' />
				</div>
				<div className="space-y-16 lg:space-y-12">
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} isEven={index % 2 === 0} />
					))}
				</div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mt-16 flex justify-center"
				>
					<Link
						to="/projects"
						className="group relative inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-8 py-3 font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary/20"
					>
						View All Projects
						<svg
							className="size-4 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</Link>
				</motion.div>
			</section>
		</Width>
	);
}
