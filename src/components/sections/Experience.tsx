import { motion } from 'framer-motion';
import { useRef } from 'react';
import Width from '../utils/Width';
import { experiences } from '../../lib/data';
import { toHumanDate } from '../../lib/utils';
import type { Experience as ExperienceType } from '../../lib/types';

function ExperienceCard({ experience, index }: { experience: ExperienceType; index: number }) {
	const flyDirection = index % 2 === 0 ? -1 : 1;

	return (
		<motion.article
			initial={{ x: 100 * flyDirection, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
			className="flex flex-col"
		>
			<div className="mb-2 flex flex-grow gap-4 rounded-lg border border-teal-700/40! bg-card/80 p-4 backdrop-blur-sm">
				<a
					href={experience.company.href}
					target="_blank"
					rel="noopener noreferrer"
					className={`flex aspect-square size-20 items-center border p-2 ${experience.company.bg}`}
				>
					<img
						src={`/img/logos/${experience.company.logo}`}
						alt={experience.company.name}
						className="object-contain"
						loading="lazy"
					/>
				</a>
				<div>
					<h2 className="text-lg font-bold">
						{experience.company.name} - {experience.title}
					</h2>
					<p className="mb-4 text-sm text-muted-foreground">
						{experience.date.start ? toHumanDate(experience.date.start) : ''} -{' '}
						{experience.date.end ? toHumanDate(experience.date.end) : 'Present'}
					</p>
					<p className="text-sm leading-7">{experience.description}</p>
				</div>
			</div>
			{experience.technologies && (
				<ul className="flex gap-4 self-center text-sm text-muted-foreground">
					{experience.technologies.map((technology) => (
						<li key={technology}>{technology}</li>
					))}
				</ul>
			)}
		</motion.article>
	);
}

export default function Experience() {
	const sectionRef = useRef(null);
	if (experiences.length === 0) return null
	return (
		<Width>
			<section ref={sectionRef} className="pt-16 md:pt-32" id="experience">
				<h1 className="mb-8 text-center text-3xl font-bold md:mb-12">Experience</h1>
				<div className="grid gap-16 md:grid-cols-2 md:gap-4">
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} index={index} />
					))}
				</div>
			</section>
		</Width>
	);
}
