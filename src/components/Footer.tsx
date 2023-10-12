import pages from '@/sanity/schemas/pages';
import { Logo } from './SVG';
import Wrapper from './Wrapper';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-brand-yellow w-full'>
			<Wrapper className='py-4 flex items-center'>
				<div className='grow space-y-2'>
					<h4 className='block font-bold font-montserrat text-sm text-brand-blue'>
						Site Map
					</h4>
					{pages.map(page => (
						<Link
							href={page.url}
							key={page.title}
							className='block font-source-sans text-xs font-bold text-zinc-700 hover:underline'
						>
							{page.title}
						</Link>
					))}
				</div>
				<div className='grow'>
					<Logo aria-hidden className='w-32' />
				</div>
			</Wrapper>
		</footer>
	);
}
