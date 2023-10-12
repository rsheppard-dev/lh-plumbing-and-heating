import { Logo } from './SVG';
import {
	HiOutlineMail,
	HiOutlinePhone,
	HiOutlineLocationMarker,
} from 'react-icons/hi';
import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';
import Link from 'next/link';
import ISettings from '@/interfaces/ISettings';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { settingsQuery } from '@/sanity/lib/queries';

export default async function Header() {
	const settings = await sanityFetch<ISettings>({ query: settingsQuery });

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
						title={`Phone Us: ${settings.phone}`}
					>
						<HiOutlinePhone aria-hidden />
						<span className='hidden md:block font-sourceSans font-bold text-xs transition-colors group-hover:text-brand-yellow'>
							{settings.phone}
						</span>
					</a>

					<a
						href={`mailto:${settings.email}`}
						className='flex items-center gap-2 group'
						title={`Email Us: ${settings.email}`}
					>
						<HiOutlineMail aria-hidden />
						<span className='hidden md:block font-sourceSans font-bold text-xs group-hover:text-brand-yellow transition-colors'>
							{settings.email}
						</span>
					</a>

					<a
						href={`https://maps.google.com/?q=${settings.location.lat},${settings.location.lng}&ll=${settings.location.lat},${settings.location.lng}&z=20`}
						target='_blank'
						className='flex items-center gap-2 group'
						title={`Visit Us: ${settings.address1}, ${settings.city}, ${settings.postCode}`}
					>
						<HiOutlineLocationMarker aria-hidden />

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

				<MobileMenu />

				<NavMenu />
			</div>
		</header>
	);
}
