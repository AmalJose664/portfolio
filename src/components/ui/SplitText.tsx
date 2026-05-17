import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface SplitTextProps {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
	ease?: string | ((t: number) => number);
	splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
	from?: gsap.TweenVars;
	to?: gsap.TweenVars;
	threshold?: number;
	rootMargin?: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
	textAlign?: React.CSSProperties['textAlign'];
	onLetterAnimationComplete?: () => void;
}

// Custom split text function (free alternative to GSAP SplitText)
const splitTextIntoElements = (
	text: string,
	_splitType: string
): { chars: string[]; words: string[]; lines: string[] } => {
	const words = text.split(' ');
	const chars: string[] = [];

	words.forEach((word, wordIndex) => {
		word.split('').forEach((char) => {
			chars.push(char);
		});
		if (wordIndex < words.length - 1) {
			chars.push(' ');
		}
	});

	return {
		chars,
		words,
		lines: [text] // Simple line splitting (can be enhanced)
	};
};

const SplitText: React.FC<SplitTextProps> = ({
	text,
	className = '',
	delay = 50,
	duration = 1.25,
	ease = 'power3.out',
	splitType = 'chars',
	from = { opacity: 0, y: 40 },
	to = { opacity: 1, y: 0 },
	threshold = 0.1,
	rootMargin = '-100px',
	tag = 'p',
	textAlign = 'center',
	onLetterAnimationComplete
}) => {
	const ref = useRef<HTMLElement>(null);
	const animationCompletedRef = useRef(false);
	const onCompleteRef = useRef(onLetterAnimationComplete);
	const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

	// Keep callback ref updated
	useEffect(() => {
		onCompleteRef.current = onLetterAnimationComplete;
	}, [onLetterAnimationComplete]);

	useEffect(() => {
		if (document.fonts.status === 'loaded') {
			setFontsLoaded(true);
		} else {
			document.fonts.ready.then(() => {
				setFontsLoaded(true);
			});
		}
	}, []);

	useGSAP(
		() => {
			if (!ref.current || !text || !fontsLoaded) return;
			if (animationCompletedRef.current) return;

			const el = ref.current;
			const elements = el.querySelectorAll('.split-char, .split-word');

			if (elements.length === 0) return;

			const startPct = (1 - threshold) * 100;
			const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
			const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
			const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
			const sign =
				marginValue === 0
					? ''
					: marginValue < 0
						? `-=${Math.abs(marginValue)}${marginUnit}`
						: `+=${marginValue}${marginUnit}`;
			const start = `top ${startPct}%${sign}`;

			gsap.fromTo(
				elements,
				{ ...from },
				{
					...to,
					duration,
					ease,
					stagger: delay / 1000,
					scrollTrigger: {
						trigger: el,
						start,
						once: true,
						fastScrollEnd: true,
						anticipatePin: 0.4
					},
					onComplete: () => {
						animationCompletedRef.current = true;
						onCompleteRef.current?.();
					},
					willChange: 'transform, opacity',
					force3D: true
				}
			);

			return () => {
				ScrollTrigger.getAll().forEach(st => {
					if (st.trigger === el) st.kill();
				});
			};
		},
		{
			dependencies: [
				text,
				delay,
				duration,
				ease,
				splitType,
				JSON.stringify(from),
				JSON.stringify(to),
				threshold,
				rootMargin,
				fontsLoaded
			],
			scope: ref
		}
	);

	const renderContent = () => {
		const split = splitTextIntoElements(text, splitType);

		if (splitType.includes('chars')) {
			return split.chars.map((char, index) => (
				<span
					key={index}
					className="split-char inline-block"
					style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
				>
					{char === ' ' ? '\u00A0' : char}
				</span>
			));
		}

		if (splitType.includes('words')) {
			return split.words.map((word, index) => (
				<span key={index} className="split-word inline-block">
					{word}
					{index < split.words.length - 1 && '\u00A0'}
				</span>
			));
		}

		return text;
	};

	const style: React.CSSProperties = {
		textAlign,
		wordWrap: 'break-word',
		willChange: 'transform, opacity'
	};

	const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
	const Tag = (tag || 'p') as React.ElementType;

	return (
		<Tag ref={ref} style={style} className={classes}>
			{renderContent()}
		</Tag>
	);
};

export default SplitText;
