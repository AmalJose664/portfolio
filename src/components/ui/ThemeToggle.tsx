import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="rounded-lg p-2 hover:bg-accent transition-colors"
			aria-label="Toggle theme"
		>
			{theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
		</button>
	);
}
