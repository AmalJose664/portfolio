import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import Width from '../components/utils/Width';
import { personalInfo, projects, skills, education, certifications } from '../lib/data';
import { GithubIcon, LinkedinIcon } from '../lib/navigation';

export default function Resume() {
	const skillsArray = Object.values(skills);
	const groupedSkills = skillsArray.reduce((acc, skill) => {
		const category = skill.category;
		if (!acc[category]) {
			acc[category] = [];
		}
		acc[category].push(skill);
		return acc;
	}, {} as Record<string, typeof skillsArray>);

	const categoryTitles: Record<string, string> = {
		'programming language': 'Languages',
		'framework and runtime': 'Frameworks & Runtime',
		'databases': 'Databases',
		'tools': 'Tools & Platforms',
		'Specializations': 'Specializations',
		'others': 'Others'
	};

	return (
		<Width className="pb-32 pt-24">
			<div className="mx-auto max-w-4xl">
				{/* Header */}
				<div className='space-y-10'>
					<motion.header
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="pb-8"
					>
						<h1 className="mb-2 text-4xl font-bold">{personalInfo.name.full}</h1>
						<p className="mb-4 text-xl text-primary">{personalInfo.title}</p>

						<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
							<a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-foreground">
								<Mail className="size-4" />
								{personalInfo.email}
							</a>
							<span className="flex items-center gap-1.5">
								<MapPin className="size-4" />
								{personalInfo.location.full}
							</span>
							<a
								href={personalInfo.social.github}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1.5 hover:text-foreground"
							>
								<GithubIcon className="size-4" />
								GitHub
							</a>
							<a
								href={personalInfo.social.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1.5 hover:text-foreground"
							>
								<LinkedinIcon className="size-4" />
								LinkedIn
							</a>
						</div>
					</motion.header>
					<DivLine />
					{/* About */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h2 className="mb-4 text-2xl font-bold">About</h2>
						<p className="leading-relaxed text-muted-foreground">{personalInfo.bio}</p>
					</motion.section>
					<DivLine />
					{/* Skills */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h2 className="mb-6 text-2xl font-bold">Technical Skills</h2>
						<div className="space-y-6">
							{Object.entries(groupedSkills).map(([category, categorySkills]) => (
								<div key={category}>
									<h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
										{categoryTitles[category] || category}
									</h3>
									<div className="flex flex-wrap gap-2">
										{categorySkills.map((skill) => (
											<span
												key={skill.commonName}
												className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
											>
												{skill.name}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</motion.section>
					<DivLine />
					{/* Education & Certifications */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.25 }}
					>
						<h2 className="mb-6 text-2xl font-bold">Education</h2>
						<div className="space-y-6">
							{/* Formal Education */}
							{education.map((edu, index) => (
								<div key={index} className="border-l-2 border-primary pl-4">
									<div className="mb-2 flex items-start justify-between gap-4">
										<div>
											<h3 className="text-lg font-bold">{edu.title}</h3>
											<p className="text-sm font-medium text-muted-foreground">
												{edu.institution}
												{edu.location && ` • ${edu.location}`}
											</p>
											{(edu.startDate || edu.endDate) && (
												<p className="text-sm text-muted-foreground">
													{edu.startDate && new Date(edu.startDate).getFullYear()}
													{edu.startDate && edu.endDate && ' - '}
													{edu.endDate && (edu.endDate === 'Present' ? 'Present' : new Date(edu.endDate).getFullYear())}
												</p>
											)}
										</div>
									</div>
									{edu.description && (
										<p className="text-sm leading-relaxed text-muted-foreground">
											{edu.description}
										</p>
									)}
								</div>
							))}
						</div>
					</motion.section>

					<DivLine />
					{/* Featured Projects */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h2 className="mb-6 text-2xl font-bold">Featured Projects</h2>
						<div className="space-y-6">
							{projects.slice(0, 3).map((project) => (
								<div key={project.id} className="border-l-2 border-primary pl-4">
									<div className="mb-2 flex items-start justify-between gap-4">
										<div>
											<h3 className="text-lg font-bold">{project.title}</h3>
											<p className="text-sm text-muted-foreground">
												{new Date(project.updatedAt).toLocaleDateString('en-US', {
													month: 'short',
													year: 'numeric'
												})}
											</p>
										</div>
										<div className="flex gap-2">
											{project.live && (
												<a
													href={project.live}
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary hover:text-primary/80"
													aria-label="View live demo"
												>
													<ExternalLink className="size-4" />
												</a>
											)}
										</div>
									</div>
									<p className="mb-3 text-sm leading-relaxed text-muted-foreground">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.stack.slice(0, 6).map((tech) => (
											<span
												key={tech}
												className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</motion.section>
					<DivLine />
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.25 }}
					>
						<h2 className="mb-6 text-2xl font-bold">Certifications</h2>
						<div className="space-y-6">
							{/* Certifications */}
							{certifications.map((cert, index) => (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.25 * index }}
									key={index} className="border-l-2 border-muted-foreground/30 pl-4">
									<div className="mb-3 flex items-start justify-between gap-4">
										<div>
											<h3 className="text-lg font-bold">{cert.title}</h3>
											<p className="text-sm text-muted-foreground">
												{cert.issuer}
												{cert.date && ` • ${new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
											</p>
										</div>
										{cert.url && (
											<a
												href={cert.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:text-primary/80"
												aria-label="View certificate"
											>
												<ExternalLink className="size-4" />
											</a>
										)}
									</div>
									{cert.description && (
										<p className="text-sm leading-relaxed text-muted-foreground">
											{cert.description}
										</p>
									)}
								</motion.div>
							))}
						</div>
					</motion.section>
				</div>
			</div>
		</Width>
	);
}


const DivLine = () => <motion.div initial={{ opacity: 0, y: 20 }}
	whileInView={{ opacity: 1, y: 0 }}
	transition={{ duration: 0.5, delay: 0.25 }} className="h-px w-full bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />