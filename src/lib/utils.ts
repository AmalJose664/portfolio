import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toHumanDate(date: Date) {
	return date.toLocaleDateString('en-UK', { month: 'long', year: 'numeric', day: 'numeric' });
}
