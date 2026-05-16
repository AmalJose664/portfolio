import { useEffect, useState } from 'react';

const Signature = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Check initial theme
		const checkTheme = () => {
			setIsDark(document.documentElement.classList.contains('dark'));
		};

		checkTheme();

		// Watch for theme changes
		const observer = new MutationObserver(checkTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	}, []);

	return (
		<a
			href="/"
			aria-label="Go to home page"
			className="absolute left-4 top-5 z-50 h-12 w-24 cursor-pointer lg:left-[calc(50%-600px)]"
		>
			<img
				src="/img/signature.png"
				alt="Logo"
				className="h-full w-full object-cover"
				style={{ filter: isDark ? 'invert(1)' : 'none' }}
			/>
		</a>
	);
};

export default Signature;
