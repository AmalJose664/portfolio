import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Button from '../ui/Button';
import Width from '../utils/Width';
import { personalInfo } from '../../lib/data';
import { GithubIcon, LinkedinIcon } from '../../lib/navigation';

const transition = {
	y: 40,
	duration: 0.8,
	ease: [0.4, 0, 0.2, 1] as const
};

export default function Hero() {
	return (
		<header className="relative">
			<Width className="flex min-h-screen items-center justify-center">
				<div className="text-center">
					<h1 className="group mb-8 flex flex-col uppercase" aria-label={`Hi, I'm ${personalInfo.name.full}`}>
						<motion.span
							initial={{ y: transition.y, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ...transition }}
						>
							Hi 👋, I'm
						</motion.span>
						<motion.span
							initial={{ y: transition.y, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ...transition, delay: 0.1 }}
							className="text-4xl font-extrabold md:text-6xl"
						>
							{personalInfo.name.first}
							<br />
							<div className="relative inline-block">
								<span className="pointer-events-none relative z-20">{personalInfo.name.last}</span>
								<div className="absolute top-3 z-10 h-full w-full bg-background"></div>
							</div>
						</motion.span>
					</h1>
					<motion.h2
						initial={{ y: transition.y, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ...transition, delay: 0.2 }}
						className="mb-4 font-bold uppercase text-primary"
					>
						{personalInfo.title}
					</motion.h2>
					<motion.p
						initial={{ y: transition.y, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ...transition, delay: 0.3 }}
						className="mb-8 mx-auto max-w-[420px]"
					>
						{personalInfo.bio}
					</motion.p>
					<div className="flex gap-2 justify-center">
						<motion.div
							initial={{ y: transition.y, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ...transition, delay: 0.4 }}
						>
							<Button href={`mailto:${personalInfo.email}`}>
								<Mail />
								Take contact
							</Button>
						</motion.div>
						<motion.div
							initial={{ y: transition.y, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ...transition, delay: 0.45 }}
						>
							<Button
								href={personalInfo.social.github}
								target="_blank"
								variant="outline"
								className="aspect-square p-2 border-[#1fca96]/70!"
							>
								<GithubIcon className="size-4" />
							</Button>
						</motion.div>
						<motion.div
							initial={{ y: transition.y, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ...transition, delay: 0.5 }}
						>
							<Button
								href={personalInfo.social.linkedin}
								target="_blank"
								variant="outline"
								className="aspect-square p-2 border-[#1fca96]/70!"
							>
								<LinkedinIcon className="size-4" />
							</Button>
						</motion.div>
					</div>
				</div>
			</Width>
		</header>
	);
}
