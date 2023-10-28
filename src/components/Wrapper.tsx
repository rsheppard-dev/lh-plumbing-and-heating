import { cn } from '@/lib/utils';
import { ReactNode, createElement } from 'react';

type Props = {
	title?: string;
	className?: string;
	children: ReactNode;
	as?: 'div' | 'section' | 'article';
};

export default function Wrapper({
	title,
	className,
	children,
	as = 'div',
}: Props) {
	return createElement(
		as,
		{
			'aria-label': title,
			className: cn('mx-auto w-full max-w-screen-xl px-4', className),
		},
		children
	);
}
