import { Link } from 'react-router-dom';
import { Radio, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Width from '../components/utils/Width';
import { GithubIcon } from '../lib/navigation';
import { projects, sideProjects } from '../lib/data';
import type { Project, SideProject } from '../lib/types';

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

function SideProjectCard({ project, index }: { project: SideProject; index: number }) {
	return (
		<motion.article
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4, delay: index * 0.08 }}
			className="group relative"
		>
			{/* Gradient border effect */}
			<div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			{/* Card content */}
			<div className="relative h-full rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-transparent group-hover:bg-card/80">
				{/* Header with title and links */}
				<div className="mb-4 flex items-start justify-between gap-3">
					<h3 className="text-lg font-bold leading-tight transition-colors group-hover:text-primary">
						{project.title}
					</h3>
					<div className="flex shrink-0 gap-2">
						{project.github && (
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-lg bg-muted p-2 transition-all hover:bg-primary/10 hover:text-primary"
								aria-label="View source code"
							>
								<GithubIcon className="size-4" />
							</a>
						)}
						{project.live && (
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-lg bg-primary/10 p-2 text-primary transition-all hover:bg-primary/20"
								aria-label="View live demo"
							>
								<ExternalLink className="size-4" />
							</a>
						)}
					</div>
				</div>

				{/* Description */}
				<p className="mb-4 text-sm leading-relaxed text-muted-foreground">
					{project.description}
				</p>

				{/* Tech stack - minimal dots */}
				<div className="flex flex-wrap gap-2">
					{project.stack.map((tech, i) => (
						<span
							key={tech}
							className="border px-2 rounded-full py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
							style={{ transitionDelay: `${i * 50}ms` }}
						>
							{tech}
							{i < project.stack.length - 1 && <span className="ml-2 text-primary">•</span>}
						</span>
					))}
				</div>

				{/* Hover indicator line */}
				<div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-500 group-hover:w-full" />
			</div>
		</motion.article>
	);
}

export default function AllProjects() {
	return (
		<Width className="pb-32 pt-24">
			{/* Main Projects Section */}
			<section className="mb-32">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-16"
				>
					<h1 className="mb-4 text-4xl font-bold">All Projects</h1>
					<p className="text-lg text-muted-foreground">
						A collection of my featured work and side projects
					</p>
				</motion.div>

				<div className="space-y-16 lg:space-y-12">
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} isEven={index % 2 === 0} />
					))}
				</div>
			</section>

			{/* Side Projects Section */}
			<section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
					className="mb-12"
				>
					<h2 className="mb-4 text-3xl font-bold">Side Projects</h2>
					<p className="text-muted-foreground">
						Smaller experiments and learning projects I've built along the way
					</p>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{sideProjects.map((project, index) => (
						<SideProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</section>
		</Width>
	);
}
