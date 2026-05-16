import { forwardRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

type PolymorphicProps<E extends ElementType> = {
	as?: E;
	children?: ReactNode;
	className?: string;
	variant?: 'default' | 'hover' | 'always';
} & ComponentPropsWithoutRef<E>;

const ShadowBox = forwardRef(
	<E extends ElementType = 'div'>(
		{
			as,
			children,
			className,
			variant = 'default',
			...props
		}: PolymorphicProps<E>,
		ref: React.Ref<any>
	) => {
		const Component = as || 'div';

		const variantClasses = {
			default: 'shadow-[inset_0_1px_0_rgba(80,235,220,0.15)] hover:shadow-[inset_0_1px_0_rgba(80,235,220,0.25),0_0_32px_rgba(16,185,129,0.45),0_0_16px_rgba(16,185,129,0.3)]',
			hover: 'hover:shadow-[inset_0_1px_0_rgba(80,235,220,0.25),0_0_32px_rgba(16,185,129,0.45),0_0_16px_rgba(16,185,129,0.3)]',
			always: 'shadow-[inset_0_1px_0_rgba(80,235,220,0.25),0_0_32px_rgba(16,185,129,0.45),0_0_16px_rgba(16,185,129,0.3)]',
		};

		return (
			<Component
				ref={ref}
				className={cn(
					'transition-shadow duration-300 ease-out',
					variantClasses[variant],
					className
				)}
				{...props}
			>
				{children}
			</Component>
		);
	}
);

ShadowBox.displayName = 'ShadowBox';

export default ShadowBox;
