import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Button from '../ui/Button';
import Width from '../utils/Width';
import { personalInfo } from '../../lib/data';
import { GithubIcon, LinkedinIcon } from '../../lib/navigation';
import SplitText from '../ui/SplitText';

const VoxelDog = lazy(() => import('../ui/VoxelDog'));

const transition = {
	y: 40,
	duration: 0.8,
	ease: [0.4, 0, 0.2, 1] as const
};

export default function Hero() {
	return (
		<header className="relative bg-gradient-to-b from-background via-background to-muted/40">
			<Width className="flex min-h-screen items-center justify-center">
				<div className="grid items-center gap-40 lg:grid-cols-2 ">
					{/* Text Content */}
					<div className="text-center lg:text-left group">
						<h1 className="group mb-8 flex flex-col uppercase" aria-label={`Hi, I'm ${personalInfo.name.full}`}>
							<motion.span
								initial={{ y: transition.y, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ ...transition }}
							>
								Hi 👋, I'm
							</motion.span>
							<motion.div
								initial={{ y: transition.y, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ ...transition, delay: 0.1 }}
								className="text-4xl font-extrabold md:text-6xl"
							>
								<SplitText
									text={personalInfo.name.full}
									tag="span"
									className="relative z-20"
									splitType="chars"
									delay={80}
									duration={0.8}
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
								/>
							</motion.div>
						</h1>
						<motion.h2
							initial={{ y: transition.y, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ...transition, delay: 0.2 }}
							className="mb-4 font-bold uppercase text-primary"
						>
							<div className='flex items-center justify-between pr-1 lg:pr-40 w-fit gap-6 lg:gap-0 lg:w-full ml-28 md:ml-0'>
								<div>
									<span className='group-hover:hidden'>Developer</span>
									<span className='hidden group-hover:block'>{personalInfo.title}</span>
								</div>

								<img src="/img/profile_pictures/profileimage_small.png" alt="Image Me " className='w-12 h-auto border rounded-full' />

							</div>
						</motion.h2>
						<motion.p
							initial={{ y: transition.y, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ...transition, delay: 0.3 }}
							className="mb-8 mx-auto lg:mx-0 max-w-[420px]"
						>
							{personalInfo.bio}
						</motion.p>
						<div className="flex gap-2 justify-center lg:justify-start">
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

					{/* 3D Model */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="flex justify-center lg:justify-end"
					>
						<Suspense
							fallback={
								<div className="flex h-[280px] w-[280px] items-center justify-center md:h-[480px] md:w-[480px]">
									<div className="size-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
								</div>
							}
						>
							<VoxelDog />
						</Suspense>
					</motion.div>
				</div>
			</Width>
		</header>
	);
}
