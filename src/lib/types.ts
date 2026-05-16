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
	href: string;
	icon: string;
	skill: string;
	category: string;
	invert?: boolean;
}

export interface Tool {
	name: string;
	file: string;
	options: { bg: string; invert?: boolean };
}
