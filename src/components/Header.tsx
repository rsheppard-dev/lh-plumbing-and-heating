import { Logo } from './SVG';
// import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';
import Link from 'next/link';
import ISettings from '@/interfaces/ISettings';

type Props = {
	settings: ISettings;
};

export default function Header({ settings }: Props) {
	return (
		<header className='fixed inset-x-0 z-10'>
			<div className='bg-brand-blue flex items-center px-6 text-white justify-between h-10'>
				<Link href='/' className='font-montserrat font-bold text-xs'>
					{settings.companyName}
				</Link>

				<div className='flex gap-6 items-center'>
					<a
						href={`tel:${settings.phone.replaceAll(' ', '')}`}
						className='flex items-center gap-2 group'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-5 h-5 group-hover:stroke-blue-200 transition-colors'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
							/>
						</svg>
						<span className='hidden md:block font-sourceSans font-bold text-xs transition-colors group-hover:text-brand-yellow'>
							{settings.phone}
						</span>
					</a>

					<a
						href={`mailto:${settings.email}`}
						className='flex items-center gap-2 group'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-5 h-5 group-hover:stroke-blue-200 transition-colors'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
							/>
						</svg>
						<span className='hidden md:block font-sourceSans font-bold text-xs group-hover:text-brand-yellow transition-colors'>
							{settings.email}
						</span>
					</a>

					<a
						href={`https://maps.google.com/?q=${settings.location.lat},${settings.location.lng}&ll=${settings.location.lat},${settings.location.lng}&z=20`}
						target='_blank'
						className='flex items-center gap-2 group'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-5 h-5 group-hover:stroke-blue-200 transition-colors'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
							/>
						</svg>

						<span className='hidden md:block font-sourceSans font-bold text-xs group-hover:text-brand-yellow transition-colors whitespace-nowrap'>
							{settings.address1}, {settings.city}, {settings.postCode}
						</span>
					</a>
				</div>
			</div>

			<div className='px-6 bg-white bg-opacity-60 flex justify-between items-center h-16 shadow-md'>
				<Link href='/'>
					<Logo title='LH Plumbing & Heating Logo' className='h-10 block' />
				</Link>

				{/* <MobileMenu /> */}

				<NavMenu />
			</div>
		</header>
	);
}
