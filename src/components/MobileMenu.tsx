'use client';

import { Popover, Transition } from '@headlessui/react';
import { FaWindowClose } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import pages from '../sanity/schemas/pages';
import Link from 'next/link';

export default function MobileMenu() {
	return (
		<Popover>
			<Popover.Button
				title='Mobile Menu'
				className='block md:hidden hover:scale-110 transition-transform'
			>
				<GiHamburgerMenu aria-hidden className='h-8 w-8 fill-brand-blue' />
			</Popover.Button>

			<Popover.Overlay className='fixed inset-0 bg-black opacity-40' />
			<Transition
				enter='transition duration-200 ease-out'
				enterFrom='opacity-0 translate-x-72'
				enterTo='opacity-100 translate-x-0'
				leave='transition duration-200 ease-out'
				leaveFrom='opacity-100 translate-x-0'
				leaveTo='opacity-0 translate-x-72'
				className='absolute top-0 right-0'
			>
				<Popover.Panel className='w-72 border-l-8 border-yellow-300 bg-brand-yellow flex flex-col p-4 text-gray-900 min-h-screen'>
					<Popover.Button title='Close Menu' className='self-end text-8xl px-4'>
						<FaWindowClose
							aria-hidden
							className='w-8 h-8 fill-white hover:fill-brand-blue transition-colors'
						/>
					</Popover.Button>

					<nav
						className='flex flex-col p-4 divide-y-2 divide-yellow-300'
						aria-label='mobile'
					>
						{pages.map((navItem, index) => (
							<Popover.Button
								as={Link}
								key={index}
								href={navItem.url}
								className={`font-montserrat font-gray-900 text-lg font-bold py-2 hover:text-brand-blue transition-colors`}
							>
								{navItem.title}
							</Popover.Button>
						))}
					</nav>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
