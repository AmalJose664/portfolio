import { cn } from '../../lib/utils';

interface WidthProps {
	children: React.ReactNode;
	className?: string;
}

export default function Width({ children, className }: WidthProps) {
	return (
		<div
			className={cn('relative m-auto', className)}
			style={{ width: 'min(1200px, 90%)' }}
		>
			{children}
		</div>
	);
}
