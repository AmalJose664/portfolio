import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Width from '../utils/Width';
import ShadowBox from '../ui/ShadowBox';
import { skills } from '../../lib/data';
import type { Skill } from '../../lib/types';

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

function isValidIconSrc(src: string): boolean {
	return (
		src.startsWith('data:image') ||
		src.startsWith('https://') ||
		src.startsWith('http://')
	) && !src.startsWith('http://0.0.0.0');
}

function getIconSrc(icon: Skill['icon']): string | null {
	if (!icon) return null;
	if (typeof icon === 'string') {
		return isValidIconSrc(icon) ? icon : null;
	}
	return null;
}

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
	const grouped = CATEGORY_ORDER.reduce(
		(acc, cat) => {
			const items = skills.filter(
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
						<h1 className="mb-4 text-4xl font-bold">Tools of the trade</h1>
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
										const iconSrc = getIconSrc(skill.icon);
										return (
											<StaggerItem key={skill.skill}>
												<ShadowBox
													as="a"
													href={skill.href !== '/' ? skill.href : undefined}
													target="_blank"
													rel="noopener noreferrer"
													variant="default"
													className="inline-flex items-center gap-2 rounded-xl bg-card px-3.5 py-2 hover:bg-card/80 group"
												>
													{iconSrc && (
														<img
															src={iconSrc}
															alt={skill.skill}
															width={16}
															height={16}
															className={`flex-shrink-0 object-contain ${skill.invert && isDark ? 'invert' : ''}`}
														/>
													)}
													<span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
														{skill.skill}
													</span>
												</ShadowBox>
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
