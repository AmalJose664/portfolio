import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
	images: { src: string; alt: string }[];
}

export default function Carousel({ images }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	if (images.length === 0) return null;

	return (
		<div className="relative mb-12 overflow-hidden rounded-lg">
			{/* Main Image */}
			<div className="relative aspect-video bg-muted">
				<img
					src={images[currentIndex].src}
					alt={images[currentIndex].alt}
					className="h-full w-full object-cover"
					loading="eager"
				/>

				{/* Navigation Arrows */}
				{images.length > 1 && (
					<>
						<button
							onClick={goToPrevious}
							className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
							aria-label="Previous image"
						>
							<ChevronLeft className="size-6" />
						</button>
						<button
							onClick={goToNext}
							className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
							aria-label="Next image"
						>
							<ChevronRight className="size-6" />
						</button>
					</>
				)}
			</div>

			{/* Dots Indicator */}
			{images.length > 1 && (
				<div className="mt-4 flex justify-center gap-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
								}`}
							aria-label={`Go to image ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
