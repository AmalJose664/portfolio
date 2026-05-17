import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Width from '../utils/Width';
import { skills } from '../../lib/data';
import type { Skill } from '../../lib/types';
import SplitText from '../ui/SplitText';
import TechStackUI from '../ui/TechStackUI';

const CATEGORY_ORDER = [
	'programming language',
	'framework and runtime',
	'databases',
	'Specializations',
	'tools',
	'others'
];

const CATEGORY_LABELS: Record<string, string> = {
	'programming language': 'Languages',
	'framework and runtime': 'Frameworks & Runtime',
	'databases': 'Databases',
	'Specializations': 'Specializations',
	'tools': 'Tools & Platforms',
	'others': 'Others'
};


function StaggerContainer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			variants={{
				visible: { transition: { staggerChildren: 0.05 } },
				hidden: {},
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

function StaggerItem({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
				},
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export default function Technologies() {
	const sectionRef = useRef(null);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const checkTheme = () => {
			setIsDark(document.documentElement.classList.contains('dark'));
		};

		checkTheme();

		const observer = new MutationObserver(checkTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});

		return () => observer.disconnect();
	}, []);

	// Group by category
	const skillsArray = Object.values(skills);
	const grouped = CATEGORY_ORDER.reduce(
		(acc, cat) => {
			const items = skillsArray.filter(
				(s) => s.category.toLowerCase() === cat.toLowerCase()
			);
			if (items.length) acc[cat] = items;
			return acc;
		},
		{} as Record<string, Skill[]>
	);

	return (
		<section ref={sectionRef} className="relative z-20 bg-muted/40 backdrop-blur-sm">
			<Width>
				<div className="py-24 md:py-32">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.5 }}
						className="mb-12"
					>
						<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
							Tech Stack
						</p>

						<SplitText className="mb-4 text-4xl font-bold" text='Tools of the trade' />
						<p className="text-sm text-muted-foreground max-w-2xl">
							The languages, frameworks, and platforms I rely on to build mission-critical systems.
						</p>
					</motion.div>

					<div className="flex flex-col gap-10">
						{Object.entries(grouped).map(([category, items]) => (
							<div key={category}>
								<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
									{CATEGORY_LABELS[category] ?? category}
								</p>
								<StaggerContainer className="flex flex-wrap gap-2.5">
									{items.map((skill) => {
										return (
											<StaggerItem key={skill.commonName}>
												<TechStackUI skill={skill} isDark={isDark} />
											</StaggerItem>
										);
									})}
								</StaggerContainer>
							</div>
						))}
					</div>
				</div>
			</Width>
		</section>
	);
}
