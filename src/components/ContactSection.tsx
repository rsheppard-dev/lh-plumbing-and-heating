'use client';

import ContactForm from './ContactForm';
import SectionHeader from './SectionHeader';
import Wrapper from './Wrapper';
import { useAnimationData } from '@/hooks/useAnimationData';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { RefObject, useRef } from 'react';
import phoneData from '../assets/phone-icon.json';
import emailData from '../assets/email-icon.json';
import locData from '../assets/location-icon.json';
import ISettings from '@/interfaces/ISettings';
import useIsOpen from '@/hooks/useIsOpen';
import Map from './Map';

type Props = {
	type?: 'page' | 'section';
	data: ISettings;
};

export default function ContactSection({ type = 'section', data }: Props) {
	const phoneRef = useRef<LottieRefCurrentProps>(null);
	const emailRef = useRef<LottieRefCurrentProps>(null);
	const locRef = useRef<LottieRefCurrentProps>(null);

	const { isOpen } = useIsOpen(data.times);

	// const [phoneAnimationData] = useAnimationData('../assets/phone-icon.json');
	// const [emailAnimationData] = useAnimationData('../assets/email-icon.json');
	// const [locationAnimationData] = useAnimationData(
	// 	'../assets/location-icon.json'
	// );

	function playAnimation(currentRef: RefObject<LottieRefCurrentProps>) {
		currentRef.current && currentRef.current.play();
	}

	function stopAnimation(currentRef: RefObject<LottieRefCurrentProps>) {
		currentRef.current && currentRef.current.stop();
	}

	return (
		<section className={`${type === 'page' ? 'pt-32 mb-10' : 'mb-10'}`}>
			<SectionHeader
				subheading='Contact Plumbers in Harrow'
				heading='Get in Touch'
			/>

			<Wrapper className='grid gord-cols-1 md:grid-cols-2 gap-10 md:gap-5 mb-10'>
				<ContactForm />

				<div className='md:order-first flex flex-col min-h-full'>
					<p className='font-sourceSans text-zinc-700 mb-10'>
						Please contact us in whatever way you wish and we will do our very
						best to help you in any way we can!
					</p>

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
							{data.times.map(time => (
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
													className='font-sourceSans text-zinc-700'
												>
													{openingTimes.from} - {openingTimes.to}
												</span>
											))
										) : (
											<span className='font-sourceSans text-zinc-700'>
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
							href={`tel:${data.phone.replaceAll(' ', '')}`}
							className='flex items-center gap-5'
						>
							<span className='w-12 h-12'>
								<Lottie
									lottieRef={phoneRef}
									animationData={phoneData}
									autoplay={false}
									className='w-fit block h-12'
								/>
							</span>
							<span className='grow font-sourceSans font-bold text-zinc-900'>
								{data.phone}
							</span>
						</a>

						<a
							onMouseEnter={() => playAnimation(emailRef)}
							onMouseLeave={() => stopAnimation(emailRef)}
							href={`mailto:${data.email}`}
							className='flex items-center gap-5'
						>
							<span className='w-12 h-12'>
								<Lottie
									lottieRef={emailRef}
									animationData={emailData}
									autoplay={false}
									className='w-fit block h-12'
								/>
							</span>
							<span className='grow font-sourceSans font-bold text-zinc-900'>
								{data.email}
							</span>
						</a>

						<a
							onMouseEnter={() => playAnimation(locRef)}
							onMouseLeave={() => stopAnimation(locRef)}
							href={`https://maps.google.com/?q=${data.location.lat},${data.location.lng}&ll=${data.location.lat},${data.location.lng}&z=20`}
							target='_blank'
							className='flex items-center gap-5'
						>
							<span className='w-12 h-12'>
								<Lottie
									lottieRef={locRef}
									animationData={locData}
									autoplay={false}
									className='block w-fit h-12'
								/>
							</span>
							<span className='grow font-sourceSans font-bold text-zinc-900'>
								{data.address1}, {data.address2 ? data.address2 + ',' : ''}{' '}
								{data.city}, {data.county ? data.county + ',' : ''}{' '}
								{data.postCode}
							</span>
						</a>
					</div>
				</div>
			</Wrapper>

			<Wrapper className='h-[400px] w-full'>
				<Map location={data.location} />
			</Wrapper>
		</section>
	);
}
