import pages from '@/sanity/schemas/pages';
import { Logo } from './SVG';
import Wrapper from './Wrapper';
import Link from 'next/link';
import {
	HiOutlineLocationMarker,
	HiOutlineMail,
	HiOutlinePhone,
} from 'react-icons/hi';
import ISettings from '@/interfaces/ISettings';

type Props = {
	settings: ISettings;
};

export default function Footer({ settings }: Props) {
	return (
		<footer className='bg-brand-yellow w-full'>
			<Wrapper className='relative py-4 space-y-6'>
				<div className='flex items-center'>
					<div className='space-y-2 grow'>
						<h4 className='block font-bold font-montserrat text-brand-blue'>
							Site Map
						</h4>
						{pages.map(page => (
							<Link
								href={page.url}
								key={page.title}
								className='block w-fit font-sourceSans text-sm font-bold text-zinc-800 hover:underline'
							>
								{page.title}
							</Link>
						))}
					</div>

					<div className='grow relative -left-16'>
						<Logo aria-hidden className='w-32' />
					</div>
				</div>

				<div className='flex flex-wrap items-center gap-2 justify-center md:justify-between'>
					<div className='flex flex-wrap justify-center gap-x-4 gap-y-2 items-center'>
						<a
							href={`tel:${settings.phone.replaceAll(' ', '')}`}
							className='flex items-center gap-2 group'
							title={`Phone Us: ${settings.phone}`}
						>
							<HiOutlinePhone aria-hidden className='stroke-zinc-800' />
							<span className='hover:underline block font-sourceSans font-bold text-xs transition-colors text-zinc-800'>
								{settings.phone}
							</span>
						</a>

						<a
							href={`mailto:${settings.email}`}
							className='flex items-center gap-2 group'
							title={`Email Us: ${settings.email}`}
						>
							<HiOutlineMail aria-hidden className='stroke-zinc-800' />
							<span className='block hover:underline font-sourceSans font-bold text-xs text-zinc-800 transition-colors'>
								{settings.email}
							</span>
						</a>

						<a
							href={`https://maps.google.com/?q=${settings.location.lat},${settings.location.lng}&ll=${settings.location.lat},${settings.location.lng}&z=20`}
							target='_blank'
							className='flex items-center gap-2 group'
							title={`Visit Us: ${settings.address1}, ${settings.city}, ${settings.postCode}`}
						>
							<HiOutlineLocationMarker
								aria-hidden
								className='stroke-zinc-800'
							/>

							<span className='hover:underline block font-sourceSans font-bold text-xs text-zinc-800 transition-colors whitespace-nowrap'>
								{settings.address1}, {settings.city}, {settings.postCode}
							</span>
						</a>
					</div>

					<div className='text-zinc-800 font-sourceSans text-xs md:order-first'>
						© 2023 - LH Plumbing and Heating |{' '}
						<a href='https://www.roysheppard.digital' target='_blank'>
							Website By Roy Sheppard Digital
						</a>
					</div>
				</div>
			</Wrapper>
		</footer>
	);
}
