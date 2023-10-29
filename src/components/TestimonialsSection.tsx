'use client';

import { useState } from 'react';
import ITestimonial from '@/interfaces/ITestimonial';
import useSlider from '@/hooks/useSlider';
import Wrapper from './Wrapper';
import { FaQuoteLeft } from 'react-icons/fa';
import Testimonial from './Testimonial';

type Props = {
	data: ITestimonial[];
};

export default function TestimonialsSection({ data }: Props) {
	const [isOpenArray, setIsOpenArray] = useState(data.map(() => false));

	const { slideIndex, goToSlide, swipeable } = useSlider<ITestimonial>(data, {
		timer: 8,
	});

	function openModal(index: number) {
		const updatedIsOpenArray = [...isOpenArray];
		updatedIsOpenArray[index] = true;
		setIsOpenArray(updatedIsOpenArray);
	}

	function closeModal(index: number) {
		const updatedIsOpenArray = [...isOpenArray];
		updatedIsOpenArray[index] = false;
		setIsOpenArray(updatedIsOpenArray);
	}

	return (
		<Wrapper
			as='section'
			title='Testimonials Section'
			className='relative mb-10 w-full overflow-x-clip'
		>
			<div
				style={{
					transform: `translateX(calc(-${slideIndex * 102}%))`,
				}}
				className='w-full md:w-11/12 flex gap-[2%] transition-transform duration-300 ease-in-out'
			>
				{data.map((testimonial, i) => {
					const date = new Date(testimonial.reviewDate);
					const options = {
						year: 'numeric',
						month: 'long',
					} as Intl.DateTimeFormatOptions;
					const formattedDate = new Intl.DateTimeFormat(
						'en-GB',
						options
					).format(date);
					return (
						<div
							key={testimonial._id}
							{...swipeable}
							className='min-w-full mb-10'
						>
							<Testimonial
								index={i}
								slideIndex={slideIndex}
								isOpen={isOpenArray[i]}
								openModal={() => openModal(i)}
								closeModal={() => closeModal(i)}
								testimonial={testimonial}
								formattedDate={formattedDate}
							/>
						</div>
					);
				})}
			</div>
			<FaQuoteLeft
				aria-hidden
				className='absolute left-14 -top-3 w-10 h-10 fill-brand-yellow'
			/>
			{data.length > 1 && (
				<div className='flex gap-2 justify-center items-center mb-10'>
					{data.map((testimonial, i) => (
						<button
							key={testimonial._id}
							disabled={i === slideIndex}
							onClick={() => goToSlide(i)}
							title={`Go to testimonial #${i + 1}`}
							className='w-4 h-4 rounded-full border-2 border-zinc-300 disabled:bg-zinc-200 enabled:hover:border-brand-blue enabled:hover:bg-brand-yellow transition-colors'
						></button>
					))}
				</div>
			)}
		</Wrapper>
	);
}
