import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
	title?: string;
	className?: string;
	children: ReactNode;
};

export default function Wrapper({ title, className, children }: Props) {
	return (
		<section
			aria-label={title}
			className={cn('mx-auto w-full max-w-screen-xl px-4', className)}
		>
			{children}
		</section>
	);
}
