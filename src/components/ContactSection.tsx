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

type Props = {
	type?: 'page' | 'section';
	data: any;
};

export default function ContactSection({ type = 'section', data }): Props {
	const phoneRef = useRef<LottieRefCurrentProps>(null);
	const emailRef = useRef<LottieRefCurrentProps>(null);
	const locRef = useRef<LottieRefCurrentProps>(null);

	const [phoneAnimationData] = useAnimationData('../assets/phone-icon.json');
	const [emailAnimationData] = useAnimationData('../assets/email-icon.json');
	const [locationAnimationData] = useAnimationData(
		'../assets/location-icon.json'
	);

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

			<Wrapper className='grid gord-cols-1 md:grid-cols-2 gap-10 md:gap-5'>
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
							<span className='font-semibold text-green-600'>open</span>.
						</p>

						<div className='prose sm:w-3/4'>
							<div className='flex justify-between font-sourceSans'>
								<span className='font-bold text-zinc-900'>Monday:</span>
								<span className='text-zinc-700'>8:30 - 17:00</span>
							</div>

							<div className='flex justify-between font-sourceSans'>
								<span className='font-bold text-zinc-900'>Tuesday:</span>
								<span className='text-zinc-700'>8:30 - 17:00</span>
							</div>

							<div className='flex justify-between font-sourceSans'>
								<span className='font-bold text-zinc-900'>Wednesday:</span>
								<span className='text-zinc-700'>8:30 - 17:00</span>
							</div>

							<div className='flex justify-between font-sourceSans'>
								<span className='font-bold text-zinc-900'>Thursday:</span>
								<span className='text-zinc-700'>8:30 - 17:00</span>
							</div>

							<div className='flex justify-between font-sourceSans'>
								<span className='font-bold text-zinc-900'>Friday:</span>
								<span className='text-zinc-700'>8:30 - 17:00</span>
							</div>

							<div className='flex justify-between font-sourceSans'>
								<span className='font-bold text-zinc-900'>Saturday:</span>
								<span className='text-zinc-700'>Closed</span>
							</div>

							<div className='flex justify-between font-sourceSans'>
								<span className='font-bold text-zinc-900'>Sunday:</span>
								<span className='text-zinc-700'>Closed</span>
							</div>
						</div>
					</div>

					<div className='space-y-2'>
						<a
							onMouseEnter={() => playAnimation(phoneRef)}
							onMouseLeave={() => stopAnimation(phoneRef)}
							href='tel:02088642311'
							className='flex items-center gap-5'
						>
							<Lottie
								lottieRef={phoneRef}
								animationData={phoneData}
								autoplay={false}
								className='w-fit block h-12'
							/>
							<span className='font-sourceSans font-bold text-zinc-900'>
								020 8864 2311
							</span>
						</a>

						<a
							onMouseEnter={() => playAnimation(emailRef)}
							onMouseLeave={() => stopAnimation(emailRef)}
							href='mailto:lh@lhpluming-harrow.co.uk'
							className='flex items-center gap-5'
						>
							<Lottie
								lottieRef={emailRef}
								animationData={emailData}
								autoplay={false}
								className='w-fit block h-12'
							/>
							<span className='font-sourceSans font-bold text-zinc-900'>
								lh@lhpluming-harrow.co.uk
							</span>
						</a>

						<a
							onMouseEnter={() => playAnimation(locRef)}
							onMouseLeave={() => stopAnimation(locRef)}
							href='#'
							className='flex items-center gap-5'
						>
							<Lottie
								lottieRef={locRef}
								animationData={locData}
								autoplay={false}
								className='w-fit block h-12'
							/>
							<span className='font-sourceSans font-bold text-zinc-900'>
								130 Vaughan Road, Harrow, HA1 4ED
							</span>
						</a>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
