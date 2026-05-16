import type { Experience, Project, Tool, Skill } from './types';

// Personal Information
export const personalInfo = {
	name: {
		first: 'Amal',
		last: 'Jose',
		full: 'Amal Jose'
	},
	title: 'Full stack Developer',
	bio: 'Detail-oriented developer specializing in JavaScript, TypeScript, and backend systems. Passionate about building robust, scalable applications with meticulous attention to code quality and Linux-based infrastructure.',
	email: 'amal446446@gmail.com',
	phone: '+91 8301943079',
	location: {
		city: 'Kochi',
		state: 'Kerala',
		full: 'Kochi, Kerala',
		mapUrl: 'https://maps.google.com'
	},
	social: {
		github: 'https://github.com/AmalJose664',
		linkedin: 'https://www.linkedin.com/in/amal-jose664/',
		twitter: 'https://x.com/AmalJose664',
		instagram: 'https://www.instagram.com/__amal___jose___/'
	},
	profileImage: ''
};

// Footer Information
export const footerInfo = {
	thankYouTitle: 'Thanks for stopping by!',
	thankYouMessage: "I love connecting with fellow developers and working on interesting projects. Feel free to reach out if you'd like to chat about tech, collaboration, or just say hello.",
	aboutText: 'Building high-performance backend systems that scale.',
	copyright: '2026 Amal Jose. All rights reserved.'
};

// Experience Data
export const experiences: Experience[] = [

];

// Projects Data
export const projects: Project[] = [
	{
		id: 'qwoocwd4u1',
		title: 'Lynfera',
		description: 'Lynfera is an open-source, Vercel-like cloud deployment platform that automates frontend hosting and features a high-throughput, real-time log monitoring pipeline.',
		thumbnail: 'https://i.ibb.co/rKw7NgSN/lynfera-root.webp',
		stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Clickhouse', 'Kafka', 'Express.js', 'Reverse proxy', 'Docker', 'Github App', 'CI/CD'],
		live: 'https://app.lynfera.qzz.io',
		images: [
			'https://i.ibb.co/qLmXyXXh/lynfera-landing.webp',
			'https://i.ibb.co/rKw7NgSN/lynfera-root.webp',
			'https://i.ibb.co/KQfW7HF/lynfera-home.webp',
			'https://i.ibb.co/mF1dJNYr/lynfera-docs.webp',
			'https://i.ibb.co/SX3FYV9d/lynfera-deployment.webp',
			'https://i.ibb.co/bgkMsRwm/lynfera-analytics.webp'
		],
		features: [
			'Automated Deployment Pipeline',
			'Real-Time Log Streaming',
			'High-Performance Analytics',
			'Dynamic Reverse-Proxy Routing',
			'Deployment Versioning & Rollbacks',
			'Open-Source System and Documentations',
			'Github App connectivity'
		],
		contributers: [
			{ name: 'Amal Jose', href: 'https://github.com/AmalJose664' }
		],
		content: [
			{
				title: 'Overview',
				text: [
					'Lynfera is a custom, open-source cloud deployment platform engineered to automate the hosting, deployment, and monitoring of modern frontend frameworks like React, Vite, and Vue.js.',
					'Designed as a Vercel-like solution, it transforms a manual 15-minute build and upload process into an automated pipeline that deploys applications in under 60 seconds.'
				]
			},
			{
				title: 'Technical Implementation',
				text: [
					'Built with Next.js and Express, the architecture utilizes Docker and AWS ECS for isolated containerized builds, deploying final static assets directly to AWS S3.',
					'The platform features a high-throughput monitoring pipeline using Apache Kafka to ingest over 10,000 log events per second, paired with ClickHouse DB for sub-second analytical queries on millions of traffic records.',
					'A custom reverse-proxy routing layer dynamically maps subdomains to S3 assets, while MongoDB and Redis power a robust versioning system that enables instant deployment rollbacks.'
				]
			}
		],
		resources: [
			{ label: 'GitHub Repository', href: 'https://github.com/AmalJose664/Lynfera' },
			{ label: 'Live Demo', href: 'https://app.lynfera.qzz.io' },
			{ label: 'API Documentation', href: 'https://app.lynfera.qzz.io/docs' }
		],
		updatedAt: new Date('2026-03-15')
	},
	{
		id: 'dcix3uen3a',
		title: 'Connectify Chats',
		description: 'Connectify is a real-time, high-concurrency messaging platform featuring private chats, public groups, and live notifications inspired by WhatsApp Web. It utilizes a scalable WebSocket and Redis architecture to ensure seamless communication and instant message delivery.',
		thumbnail: 'https://i.ibb.co/qLDh3MgH/connectify-home-page.webp',
		stack: ['React.js', 'NeonDb', 'PostgreSQL', 'WebSocket', 'Django', 'Python', 'Django-channels'],
		live: 'https://connectify-roan-five.vercel.app/',
		images: [
			'https://i.ibb.co/qLDh3MgH/connectify-home-page.webp',
			'https://i.ibb.co/cXrk6GT6/connectify-groups-page.webp',
			'https://i.ibb.co/nMcy3QjN/connectify-settings-page.webp',
		],
		features: [
			'Real-time WebSocket-based messaging and typing indicators',
			'In-browser message notifications and alerts',
			'Public and private group chat management',
			'Secure JWT-based authentication and session handling',
			'Integrated file and media sharing capabilities',
			'Optimized user discovery via an O(1) friend-connect algorithm'
		],
		contributers: [
			{ name: 'Amal Jose', href: 'https://github.com/AmalJose664' }
		],
		content: [
			{
				title: 'Overview',
				text: [
					'Connectify is an advanced, full-featured communication platform modeled after WhatsApp Web, designed to deliver real-time messaging, user notifications, and dynamic group interactions.',
					'The application focuses on high-concurrency performance and seamless user experiences, supporting features like interactive typing indicators, secure file sharing, and comprehensive friend systems.'
				]
			},
			{
				title: 'Technical Implementation',
				text: [
					'The platform features a decoupled architecture with a React.js frontend and a Django backend, utilizing Django Channels to handle over 500 concurrent WebSocket connections for real-time data streaming.',
					'System performance is optimized using Redis for real-time message queueing, which effectively reduced primary MongoDB database write operations by 40% under heavy testing loads.',
					'The application implements secure JWT-based session handling and features a custom friend-connect algorithm that optimizes user discovery, reducing search time complexity to O(1).'
				]
			}
		],
		resources: [
			{ label: 'GitHub Repository', href: 'https://github.com/AmalJose664/connectify-Chat' },
			{ label: 'Live Demo', href: 'https://connectify-roan-five.vercel.app/' }
		],
		updatedAt: new Date('2024-11-20')
	},
	{
		id: '8nry8sfpnk',
		title: 'Ping Forge',
		description: 'PingForge is a real-time event monitoring service that delivers instant alerts for SaaS activities like sales, signups, or system bugs directly to your private Discord. It features a dynamic dashboard with secure authentication and built-in subscription management to easily track custom application metrics.',
		thumbnail: 'https://i.ibb.co/NwQmfm3/ping-forge-landing1.webp',
		stack: ['React', 'Next.js', 'Prisma', 'NeonDB', 'Discord API'],
		live: 'https://ping-forge.vercel.app/',
		images: [
			'https://i.ibb.co/NwQmfm3/ping-forge-landing1.webp',
			'https://i.ibb.co/JWkDXj1n/ping-forge-landing.webp',
			'https://i.ibb.co/7xr3dCWc/ping-forge-dashboard.webp',
			'https://i.ibb.co/21q3RwM6/ping-forge-category.webp'
		],
		features: [
			'Real-time SaaS event monitoring for signups, sales, and bugs',
			'Instant Discord API integration for private channel alerts',
			'Dynamic dashboard for custom event creation and management',
			'Secure GitHub and Google authentication via NextAuth',
			'Tiered subscription support with free and pro upgrade logic',
		],
		contributers: [
			{ name: 'Amal Jose', href: 'https://github.com/AmalJose664' }
		],
		content: [
			{
				title: 'Overview',
				text: [
					'PingForge is a dedicated SaaS monitoring and notification tool designed to alert founders and developers about critical platform events like new signups, product sales, and system bugs.',
					'By delivering instant, embedded alerts directly to a user\'s private Discord channels, it helps teams stay connected to their application\'s real-time performance and metrics without needing to constantly check a dashboard.'
				]
			},
			{
				title: 'Technical Implementation',
				text: [
					'Built with a modern Next.js framework and styled with TailwindCSS, the application is highly optimized for SEO and utilizes PostgreSQL for reliable data storage and custom event tracking.',
					'The backend integrates the Discord API to push real-time, formatted notifications and uses NextAuth to provide secure, seamless authentication via GitHub and Google.',
					'The platform also features a dynamic dashboard interface equipped with robust subscription logic, managing custom event limits and seamless upgrade paths across free and pro tiers.'
				]
			}
		],
		resources: [
			{ label: 'GitHub Repository', href: 'https://github.com/AmalJose664/Ping-Forge' },
			{ label: 'Live Demo', href: 'https://ping-forge.vercel.app/' }
		],
		updatedAt: new Date('2024-10-05')
	},
	{
		id: 'mpy20eq8fv',
		title: 'Portfolio',
		description:
			'This is the project you are currently visiting. Wanted to try out and learn some new technologies as well as I needed a portfolio to get my name out there. Since this was a solo project I could select the exact technologies I was most interrested in and learned a lot along the way. Such as end-to-end testing, github actions and server-side vs client-side rendering.',
		updatedAt: new Date('2024-11-11T20:44:00'),
		thumbnail: 'https://i.ibb.co/7tQ7Dk6X/portfolio-landing.png',
		images: ['https://i.ibb.co/7tQ7Dk6X/portfolio-landing.png'],
		stack: ['React.js', 'Vite', 'TypeScript', 'Tailwindcss'],
		contributers: [
			{ name: 'Amal Jose', href: 'https://github.com/AmalJose664' }
		],
		features: ['Light/Dark mode',
			'Progressive web app',],
		resources: [
			{
				label: 'Repository: ',
				href: 'https://github.com/AmalJose664/Personal-website'
			}
		],
		content: [
			{
				text: [
					'My portfolio was a small personal project I started, that only I have worked on. The result is the website you are currently visiting.',
					'Because I was the only person involved in this project, I had the full freedom to choose wathever technologies I wanted.',
					"I also wanted to learn more about testing, continuous integration and continuous delivery. Cypress was a tool I had just heard about and started looking more into. I decided to use it for testing in this project, and have not regretted it. Together with cypress I also looked into and added piplines/actions to my GitHub. So whenever I pushed some new code to the repository, it automatically get's build, tested and then published if every test are passed.",
					'The hardest task for this project was probably to come up with a design I was happy with. I wanted something that I was genuenlly happy with and something that fit me as well as it was easy to understand and use. My first version looked OK+, but it had some flaws. Specially for readability. Some of the fonts were very thin and the contrasts between the background and forground made it a little to hard to read.',
					'This is the current design used today. Although I was happy with the first outcome, there was a lot of tweeking throughout the process.',
					"I'm really happy with the result of the current version. But I also think this is a project I will continue developing as I get new ideas for things I want to add."
				]
			}
		]
	},
];

// Technologies/Tools Data (Old format - keeping for compatibility)
export const tools: Tool[] = [
	{
		name: 'TypeScript',
		file: 'typescript.png',
		options: { bg: 'bg-blue-400/20' }
	},
	{
		name: 'Svelte',
		file: 'svelte.png',
		options: { bg: 'bg-orange-400/20' }
	},
	{
		name: 'Tailwind',
		file: 'tailwind.png',
		options: { bg: 'bg-blue-400/20' }
	},
	{
		name: 'Drizzle',
		file: 'drizzle.png',
		options: { bg: 'bg-neutral-600/20' }
	},
	{
		name: 'Java',
		file: 'java.png',
		options: { bg: 'bg-blue-400/20' }
	},
	{
		name: 'Spring Boot',
		file: 'spring-boot.png',
		options: { bg: 'bg-green-400/20' }
	},
	{
		name: 'PostgreSQL',
		file: 'postgresql.png',
		options: { bg: 'bg-blue-400/20' }
	},
	{
		name: 'Git',
		file: 'git.png',
		options: { bg: 'bg-orange-600/20' }
	},
	{
		name: 'Docker',
		file: 'docker.webp',
		options: { bg: 'bg-blue-400/20' }
	},
	{
		name: 'DigitalOcean',
		file: 'digitalocean.png',
		options: { bg: 'bg-neutral-400/20' }
	},
	{
		name: 'Ansible',
		file: 'ansible.png',
		options: { bg: 'bg-neutral-400/20', invert: true }
	},
	{
		name: 'Figma',
		file: 'figma.png',
		options: { bg: 'bg-violet-400/20' }
	}
];

// Skills Data (New format - categorized)
export const skills: Skill[] = [
	// Programming Languages
	{
		skill: 'JavaScript',
		category: 'programming language',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
	},
	{
		skill: 'TypeScript',
		category: 'programming language',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		href: 'https://www.typescriptlang.org/'
	},
	{
		skill: 'Python',
		category: 'programming language',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
		href: 'https://www.python.org/'
	},
	{
		skill: 'Java',
		category: 'programming language',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
		href: 'https://www.java.com/'
	},
	{
		skill: 'C',
		category: 'programming language',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
		href: 'https://en.wikipedia.org/wiki/C_(programming_language)'
	},
	{
		skill: 'C++',
		category: 'programming language',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
		href: 'https://isocpp.org/'
	},

	// Frameworks & Runtime
	{
		skill: 'React',
		category: 'framework and runtime',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		href: 'https://react.dev/'
	},
	{
		skill: 'Next.js',
		category: 'framework and runtime',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
		invert: true,
		href: 'https://nextjs.org/'
	},
	{
		skill: 'Node.js',
		category: 'framework and runtime',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
		href: 'https://nodejs.org/'
	},
	{
		skill: 'Express',
		category: 'framework and runtime',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
		invert: true,
		href: 'https://expressjs.com/'
	},
	{
		skill: 'Tailwind CSS',
		category: 'framework and runtime',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
		href: 'https://tailwindcss.com/'
	},
	{
		skill: 'Django',
		category: 'framework and runtime',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
		invert: true,
		href: 'https://www.djangoproject.com/'
	},

	// Databases
	{
		skill: 'PostgreSQL',
		category: 'databases',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
		href: 'https://www.postgresql.org/'
	},
	{
		skill: 'MongoDB',
		category: 'databases',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
		href: 'https://www.mongodb.com/'
	},
	{
		skill: 'Redis',
		category: 'databases',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
		href: 'https://redis.io/'
	},
	{
		skill: 'MySQL',
		category: 'databases',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
		href: 'https://www.mysql.com/'
	},

	// Specializations
	{
		skill: 'REST APIs',
		category: 'Specializations',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
		href: 'https://restfulapi.net/'
	},
	{
		skill: 'Responsive Design',
		category: 'Specializations',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		href: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design'
	},
	{
		skill: 'CI/CD',
		category: 'Specializations',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
		href: 'https://about.gitlab.com/topics/ci-cd/',
		invert: true,
	},

	// Tools & Platforms
	{
		skill: 'Git',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
		href: 'https://git-scm.com/'
	},
	{
		skill: 'GitHub',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
		invert: true,
		href: 'https://github.com/'
	},
	{
		skill: 'Docker',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
		href: 'https://www.docker.com/'
	},
	{
		skill: 'VS Code',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
		href: 'https://code.visualstudio.com/'
	},
	{
		skill: 'AWS',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
		invert: true,
		href: 'https://aws.amazon.com/'
	},
	{
		skill: 'Vercel',
		category: 'tools',
		icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',
		invert: true,
		href: 'https://vercel.com/'
	},
	{
		skill: 'Nginx',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
		href: 'https://nginx.org/'
	},
	{
		skill: 'Render',
		category: 'tools',
		icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nNVVu07DQBA8KBAUNNCBhHg0KSiQoKBDIt6Fig4plGn4jVR8Qgp+IRWPcGeTItSIkj54L4ZI+QWkQxvrzOEECfBZKCtN4bn1jL172hXCiYZpzALJGmp5DVq+Aql31MpMQJPzkcK65UCrR+aAom03NxOHl2gDtXz6RtAUMjjqqXXUcvBDcfMrAy7LhC9/CEidBfHdHsbRbh5B0lljsZPh1WI1bm8yDul2lbnT59ac5RgirbkjTvJCGDMjfAWSusl+k2S3qN5xLLfSiqQQoNWbY1AragD5HrhXEfrtHe8G6DzwYVEDpHAJtTy38G4wFr4Ngvh+BUldWng3gLJ7AGUbBGWXaCym7prCPzRZZoOJB5X3YVd6oLNIDnrd+RGXhBXLVfudZeZ4yeQXDp9l7ydhhbl9ai24ml96YJN4/X0uoLA+MtWq+aeVOfUGH4njtyeIZLk4AAAAAElFTkSuQmCC',
		href: 'https://render.com/'
	},
	{
		skill: 'Kubernetes',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
		href: 'https://kubernetes.io/'
	},
	{
		skill: 'Supabase',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
		href: 'https://supabase.com/'
	},
	{
		skill: 'Linux',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
		href: 'https://www.linux.org/'
	},
	{
		skill: 'Neovim',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg',
		href: 'https://neovim.io/'
	},
	{
		skill: 'Netlify',
		category: 'tools',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
		href: 'https://www.netlify.com/'
	},

	// Other
	{
		skill: 'Blender',
		category: 'others',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg',
		href: 'https://www.blender.org/'
	},
];
