import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
	images: { src: string; alt: string }[];
}

export default function Carousel({ images }: CarouselProps) {
	const [current, setCurrent] = useState(1);
	const [animating, setAnimating] = useState(false);
	const [paused, setPaused] = useState(false);
	const [key, setKey] = useState(0);
	const progressRef = useRef<HTMLDivElement>(null);

	// Auto-play
	useEffect(() => {
		if (paused) return;

		const timeout = setTimeout(() => {
			goNext();
		}, 5000);

		return () => clearTimeout(timeout);
	}, [current, paused]);

	const goNext = () => {
		setAnimating(true);
		setCurrent((prev) => prev + 1);
		setKey((prev) => prev + 1);

		setTimeout(() => {
			setAnimating(false);
			setCurrent((prev) => {
				if (prev > images.length) {
					return 1;
				}
				return prev;
			});
		}, 200);
	};

	const goPrev = () => {
		setAnimating(true);
		setCurrent((prev) => prev - 1);
		setKey((prev) => prev + 1);

		setTimeout(() => {
			setAnimating(false);
			setCurrent((prev) => {
				if (prev === 0) {
					return images.length;
				}
				return prev;
			});
		}, 200);
	};

	const goToSlide = (index: number) => {
		setCurrent(index + 1);
		setKey((prev) => prev + 1);
	};

	if (images.length === 0) return null;

	// Create extended array with duplicates for infinite loop effect
	const extendedImages = [images[images.length - 1], ...images, images[0]];

	return (
		<div
			className="mb-12"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			{/* Image Container */}
			<div className="flex overflow-hidden rounded-lg">
				{extendedImages.map((image, index) => (
					<img
						key={`${image.src}-${index}`}
						src={image.src}
						alt={image.alt}
						className={`aspect-video w-full flex-shrink-0 bg-muted object-contain ${animating ? 'transition-transform duration-200' : ''
							}`}
						style={{ transform: `translateX(-${current * 100}%)` }}
						loading={index === current ? 'eager' : 'lazy'}
					/>
				))}
			</div>

			{/* Progress Bar */}
			<div className="mb-2 mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
				<div
					key={key}
					ref={progressRef}
					className={`h-full bg-primary ${paused ? '' : 'animate-progress'}`}
					style={{ width: paused ? progressRef.current?.style.width || '0%' : '0%' }}
				/>
			</div>

			{/* Controls */}
			<div className="flex items-center justify-center gap-4">
				<button
					onClick={goPrev}
					disabled={animating}
					className="aspect-square rounded-md p-1 transition-colors hover:bg-accent disabled:opacity-50"
					aria-label="Previous image"
				>
					<ChevronLeft className="size-6" />
				</button>

				{/* Dots */}
				<ul className="flex gap-1">
					{images.map((_, index) => (
						<li key={index}>
							<button
								onClick={() => goToSlide(index)}
								className="size-4 rounded-full bg-muted p-0.5 transition-colors hover:bg-accent"
								aria-label={`Go to image ${index + 1}`}
							>
								{current - 1 === index && (
									<span className="block h-full w-full rounded-full bg-primary"></span>
								)}
							</button>
						</li>
					))}
				</ul>

				<button
					onClick={goNext}
					disabled={animating}
					className="aspect-square rounded-md p-1 transition-colors hover:bg-accent disabled:opacity-50"
					aria-label="Next image"
				>
					<ChevronRight className="size-6" />
				</button>
			</div>
		</div>
	);
}
