'use client';

import { usePathname } from 'next/navigation';
import pages from '../sanity/schemas/pages';
import Link from 'next/link';

export default function NavMenu() {
	const pathname = usePathname();

	return (
		<nav className='hidden md:flex'>
			{pages.map((navItem, index) => (
				<Link
					key={index}
					href={navItem.url}
					className={`${
						pathname === navItem.url ? 'active' : ''
					} font-montserrat font-gray-900 text-lg h-16 flex items-center hover:bg-brand-yellow transition-all font-bold px-4 border-b-8 border-brand-blue border-opacity-0`}
				>
					{navItem.title}
				</Link>
			))}
		</nav>
	);
}
