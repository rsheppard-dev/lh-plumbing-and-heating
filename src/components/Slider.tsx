'use client';

import Image from 'next/image';
import IImage from '@/interfaces/IImage';
import useSlider from '@/hooks/useSlider';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import urlFor from '@/sanity/lib/imageBuilder';
import Wrapper from './Wrapper';
import { ReactNode } from 'react';

type Props = {
	images: IImage[];
	timer?: number;
	children: ReactNode;
};

export default function Slider({ images, timer, children }: Props) {
	const { slideIndex, isFirstSlide, isLastSlide, nextSlide, previousSlide } =
		useSlider<IImage>(images, { timer });
	return (
		<div className='group overflow-hidden relative h-[700px] w-full aspect-w-16 aspect-h-4'>
			<div
				style={{
					transform: `translateX(-${slideIndex * 100}%)`,
				}}
				className='h-full w-full flex transition-transform duration-300 ease-in-out'
			>
				{images.map((_, index) => (
					<div key={index} className='relative h-full w-full grow-0 shrink-0'>
						<figure aria-hidden className='z-10 absolute inset-0'>
							<Image
								priority={index === 0}
								fill
								src={urlFor(images[index].url)
									.quality(70)
									.width(20)
									.auto('format')
									.url()}
								alt={images[index].alt}
								className='object-cover object-center w-full h-full'
							/>
						</figure>
						<figure
							aria-hidden={index !== slideIndex}
							className='z-10 absolute inset-0'
						>
							<Image
								priority={index === 0}
								fill
								src={urlFor(images[index].url)
									.auto('format')
									.quality(100)
									.url()}
								alt={images[index].alt}
								className='object-cover object-center w-full h-full'
							/>
						</figure>
					</div>
				))}
			</div>

			<div className='h-full w-full bg-black bg-opacity-50 absolute inset-0'></div>

			<div className='grid grid-cols-12 absolute inset-0 justify-between items-end pb-4 md:items-center text-white font-montserrat font-bold'>
				<Wrapper className='col-span-12 md:col-span-10 md:order-2'>
					{children}
				</Wrapper>

				<div className='col-span-6 md:col-span-1 md:order-1 px-4'>
					<button
						onClick={previousSlide}
						disabled={isFirstSlide}
						title='Previous'
						className='slider-button'
					>
						<FaChevronLeft aria-hidden className='h-6 w-6' />
					</button>
				</div>

				<div className='col-span-6 md:col-span-1 md:order-3 flex items-center justify-end px-4'>
					<button
						onClick={nextSlide}
						disabled={isLastSlide}
						title='Next'
						className='slider-button'
					>
						<FaChevronRight aria-hidden className='h-6 w-6' />
					</button>
				</div>
			</div>
		</div>
	);
}
