import { lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CodeXml, Lightbulb, Users, ExternalLink, Radio } from 'lucide-react';
import Width from '../components/utils/Width';
import { projects, skills } from '../lib/data';
import TechStackUI from '../components/ui/TechStackUI';

// Lazy load Carousel
const Carousel = lazy(() => import('../components/ui/Carousel'));

function toHumanDateTime(date: Date) {
	return date.toLocaleDateString('en-UK', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
}

export default function ProjectDetail() {
	const { id } = useParams<{ id: string }>();
	const project = projects.find((p) => p.id === id);

	if (!project) {
		return <Navigate to="/" replace />;
	}

	const images = project.images.map((src, index) => ({
		src,
		alt: `${project.title} screenshot ${index + 1}`
	}));

	return (
		<Width className="pb-32 pt-24">
			<Suspense
				fallback={
					<div className="mb-12 flex aspect-video items-center justify-center rounded-lg bg-muted">
						<div className="size-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
					</div>
				}
			>
				<Carousel images={images} />
			</Suspense>
			<article>
				<section className="mb-8">
					{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-primary"
						>
							<Radio className="size-4" /> Live
						</a>
					)}
					<h1 className="text-3xl font-extrabold">{project.title}</h1>
					<p className="text-sm text-muted-foreground">
						Last updated: {toHumanDateTime(project.updatedAt)}
					</p>
				</section>

				<section className="mb-12">
					<div className="mb-8">
						<h2 className="mb-2 flex items-center gap-2">
							<CodeXml />
							Technologies
						</h2>
						<ul className="flex flex-wrap gap-x-2 gap-y-4">
							{project.stack.map((tech) => {
								let techRefined = tech.toLocaleLowerCase().replaceAll(".", "")
								if (techRefined.includes("/")) {
									techRefined = techRefined.replaceAll("/", "")
								}
								const object = skills[techRefined]
								if (!object) {
									return (
										<li key={tech} className="rounded-full bg-muted px-4 flex items-center justify-center text-sm text-muted-foreground">
											{tech}
										</li>
									)
								}
								return (
									<>
										{skills[techRefined] && <TechStackUI skill={skills[techRefined]} isDark />}
									</>
								)
							})}
						</ul>
					</div>

					<div className="mb-8">
						<h2 className="mb-2 flex items-center gap-2">
							<Lightbulb />
							Features
						</h2>
						<ul className="flex flex-wrap gap-x-2 gap-y-4">
							{project.features.map((feature) => (
								<li key={feature} className="rounded-full bg-muted px-4 py-1 text-xs text-muted-foreground">
									{feature}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="mb-2 flex items-center gap-2">
							<Users />
							Contributors
						</h2>
						<ul className="flex flex-wrap gap-x-2 gap-y-4">
							{project.contributers.map((contributer) => (
								<li
									key={contributer.name}
									className="rounded-full bg-muted px-4 py-1 text-xs text-muted-foreground hover:bg-accent"
								>
									<a
										href={contributer.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2"
									>
										{contributer.name} <ExternalLink className="size-3" />
									</a>
								</li>
							))}
						</ul>
					</div>
				</section>

				{project.content.map((content, index) => (
					<section key={index} className="mb-12 max-w-[80ch]">
						{content.title && <h2 className="mb-4 text-xl font-bold">{content.title}</h2>}
						{content.text.map((text, textIndex) => (
							<p key={textIndex} className="mb-4 leading-8 opacity-90">
								{text}
							</p>
						))}
					</section>
				))}

				<section>
					<h2 className="mb-4 text-xl font-bold">Resources</h2>
					<ul className="ml-6 list-disc space-y-1">
						{project.resources.map((resource) => (
							<li key={resource.label}>
								{resource.label}:{' '}
								<a
									href={resource.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary underline"
								>
									{resource.href}
								</a>
							</li>
						))}
					</ul>
				</section>
			</article>
		</Width>
	);
}
