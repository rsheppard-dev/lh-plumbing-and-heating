'use client';

import ContactForm from './ContactForm';
import SectionHeader from './SectionHeader';
import Wrapper from './Wrapper';
import { useAnimationData } from '@/hooks/useAnimationData';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { RefObject, useRef } from 'react';
import ISettings from '@/interfaces/ISettings';
import useIsOpen from '@/hooks/useIsOpen';
import Map from './Map';
import IContact from '@/interfaces/IContact';
import { PortableText } from '@portabletext/react';

type Props = {
	type?: 'page' | 'section';
	settings: ISettings;
	contact: IContact;
};

export default function ContactSection({
	type = 'section',
	settings,
	contact,
}: Props) {
	const phoneRef = useRef<LottieRefCurrentProps>(null);
	const emailRef = useRef<LottieRefCurrentProps>(null);
	const locRef = useRef<LottieRefCurrentProps>(null);

	const { isOpen } = useIsOpen(settings.times);

	const [phoneAnimationData] = useAnimationData(contact.phoneIcon);
	const [emailAnimationData] = useAnimationData(contact.emailIcon);
	const [locationAnimationData] = useAnimationData(contact.locationIcon);

	const now = new Date();
	const currentDay = now.toLocaleDateString('en-GB', { weekday: 'long' });

	function playAnimation(currentRef: RefObject<LottieRefCurrentProps>) {
		currentRef.current && currentRef.current.play();
	}

	function stopAnimation(currentRef: RefObject<LottieRefCurrentProps>) {
		currentRef.current && currentRef.current.stop();
	}

	return (
		<section
			aria-label='Contact Section'
			className={`${type === 'page' ? 'pt-32 mb-10' : 'mb-10'}`}
		>
			<SectionHeader
				subheading={contact.subheading}
				heading={contact.heading}
			/>

			<Wrapper className='grid gord-cols-1 md:grid-cols-2 gap-10 md:gap-5 mb-10'>
				<ContactForm successMessage={contact.successMessage} />

				<div className='md:order-first flex flex-col min-h-full'>
					<div className='font-sourceSans text-zinc-700 mb-10'>
						<PortableText value={contact.content} />
					</div>

					<div className='grow mb-10'>
						<h3 className='font-montserrat font-bold text-zinc-900 mb-5'>
							Opening Times
						</h3>

						<p className='font-sourceSans text-zinc-700 mb-5'>
							We are currently{' '}
							<span
								className={`font-semibold ${
									isOpen ? 'text-green-600' : 'text-red-600'
								}`}
							>
								{isOpen ? 'open' : 'closed'}
							</span>
							.
						</p>

						<div className='prose sm:w-3/4'>
							{settings.times.map(time => (
								<div
									key={time._key}
									className='flex justify-between font-sourceSans'
								>
									<span className='font-bold text-zinc-900'>{time.day}:</span>
									<div className='flex flex-col prose'>
										{time.availableTimes.length > 0 ? (
											time.availableTimes.map(openingTimes => (
												<span
													key={openingTimes._key}
													className={`font-sourceSans text-zinc-700 ${
														currentDay === time.day && 'font-bold'
													}`}
												>
													{openingTimes.from} - {openingTimes.to}
												</span>
											))
										) : (
											<span
												className={`font-sourceSans text-zinc-700 ${
													currentDay === time.day && 'font-bold'
												}`}
											>
												Closed
											</span>
										)}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='space-y-2'>
						<a
							onMouseEnter={() => playAnimation(phoneRef)}
							onMouseLeave={() => stopAnimation(phoneRef)}
							href={`tel:${settings.phone.replaceAll(' ', '')}`}
							className='flex items-center gap-5'
						>
							<span className='w-12 h-12'>
								<Lottie
									lottieRef={phoneRef}
									animationData={phoneAnimationData}
									autoplay={false}
									className='w-12 block h-12'
								/>
							</span>
							<span className='grow font-sourceSans font-bold text-zinc-900'>
								{settings.phone}
							</span>
						</a>

						<a
							onMouseEnter={() => playAnimation(emailRef)}
							onMouseLeave={() => stopAnimation(emailRef)}
							href={`mailto:${settings.email}`}
							className='flex items-center gap-5'
						>
							<span className='w-12 h-12'>
								<Lottie
									lottieRef={emailRef}
									animationData={emailAnimationData}
									autoplay={false}
									className='w-12 block h-12'
								/>
							</span>
							<span className='grow font-sourceSans font-bold text-zinc-900'>
								{settings.email}
							</span>
						</a>

						<a
							onMouseEnter={() => playAnimation(locRef)}
							onMouseLeave={() => stopAnimation(locRef)}
							href={`https://maps.google.com/?q=${settings.location.lat},${settings.location.lng}&ll=${settings.location.lat},${settings.location.lng}&z=20`}
							target='_blank'
							className='flex items-center gap-5'
						>
							<span className='w-12 h-12'>
								<Lottie
									lottieRef={locRef}
									animationData={locationAnimationData}
									autoplay={false}
									className='block w-12 h-12'
								/>
							</span>
							<span className='grow font-sourceSans font-bold text-zinc-900'>
								{settings.address1},{' '}
								{settings.address2 ? settings.address2 + ',' : ''}{' '}
								{settings.city}, {settings.county ? settings.county + ',' : ''}{' '}
								{settings.postCode}
							</span>
						</a>
					</div>
				</div>
			</Wrapper>

			<Wrapper className='h-[400px] w-full'>
				<Map location={settings.location} />
			</Wrapper>
		</section>
	);
}
