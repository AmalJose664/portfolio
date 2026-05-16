import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
	'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-foreground hover:text-background',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border-foreground bg-background hover:bg-foreground hover:text-background border-2',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-full px-3',
				lg: 'h-11 rounded-full px-8',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {
	href?: string;
	target?: string;
}

export default function Button({
	className,
	variant,
	size,
	href,
	target,
	children,
	...props
}: ButtonProps) {
	if (href) {
		return (
			<a
				href={href}
				target={target}
				className={cn(buttonVariants({ variant, size, className }))}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{children}
		</button>
	);
}
