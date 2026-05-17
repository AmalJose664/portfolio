export interface Experience {
	title: string;
	company: {
		name: string;
		logo: string;
		href: string;
		bg: string;
	};
	location: string;
	date: {
		start: Date | null;
		end: Date | null;
	};
	description: string;
	technologies?: string[];
}

export interface Project {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	stack: string[];
	live?: string;
	images: string[];
	features: string[];
	contributers: {
		name: string;
		href: string;
	}[];
	content: {
		title?: string;
		text: string[];
	}[];
	resources: {
		label: string;
		href: string;
	}[];
	updatedAt: Date;
}

export interface SkillIcon {
	light: string;
	dark: string;
}

export interface Skill {
	name: string; // Display name
	commonName: string; // Key for accessing (e.g., 'javascript', 'express')
	category: string;
	icon: string;
	href: string;
	invert?: boolean;
}

export interface SkillsObject {
	[key: string]: Skill;
}

export interface Tool {
	name: string;
	file: string;
	options: { bg: string; invert?: boolean };
}

export interface SideProject {
	id: string;
	title: string;
	description: string;
	stack: string[];
	github?: string;
	live?: string;
}

export interface Education {
	title: string;
	institution: string;
	location?: string;
	startDate?: Date;
	endDate?: Date | 'Present';
	description?: string;
}

export interface Certification {
	title: string;
	issuer: string;
	date?: Date;
	description?: string;
	url?: string;
}
