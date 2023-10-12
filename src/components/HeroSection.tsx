import Slider from './Slider';
import Link from 'next/link';
import IHomePage from '@/interfaces/IHomePage';

export default async function Hero({ data }: { data: IHomePage }) {
	const {
		sliderImages,
		autoSlide,
		timer,
		ctaHeading,
		primaryButtonText,
		primaryButtonLink,
		secondaryButtonText,
		secondaryButtonLink,
	} = data;

	return (
		<section aria-label='Hero Section' className='pt-10'>
			<Slider images={sliderImages} timer={autoSlide ? timer : undefined}>
				<div className='flex flex-col gap-8'>
					<h1 className='lg:w-2/3 xl:w-1/2 font-montserrat balance font-bold text-3xl md:text-4xl text-white leading-snug drop-shadow-md'>
						{ctaHeading}
					</h1>

					<div className='flex flex-col sm:flex-row w-fit gap-4'>
						<Link
							href={primaryButtonLink}
							className='whitespace-nowrap bg-brand-yellow bg-opacity-60 border-2 border-brand-yellow hover:bg-opacity-100 font-montserrat text-gray-900 font-bold text-lg px-6 py-3 transition-opacity'
						>
							{primaryButtonText}
						</Link>

						{secondaryButtonText ? (
							<Link
								href={secondaryButtonLink}
								className='whitespace-nowrap border-2 border-white bg-black bg-opacity-40 hover:border-brand-yellow font-montserrat text-white drop-shadow-md font-bold text-lg px-6 py-3 transition-colors'
							>
								{secondaryButtonText}
							</Link>
						) : null}
					</div>
				</div>
			</Slider>
		</section>
	);
}
