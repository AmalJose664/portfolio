import type { Skill } from "../../lib/types";

export function getIconSrc(icon: Skill['icon']): string | null {
	if (!icon) return null;
	if (typeof icon === 'string') {
		return isValidIconSrc(icon) ? icon : null;
	}
	return null;
}
export function isValidIconSrc(src: string): boolean {
	return (
		src.startsWith('data:image') ||
		src.startsWith('https://') ||
		src.startsWith('http://')
	) && !src.startsWith('http://0.0.0.0');
}
