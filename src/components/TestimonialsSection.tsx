'use client';

import ITestimonial from '@/interfaces/ITestimonial';
import Wrapper from './Wrapper';
import { FaQuoteLeft } from 'react-icons/fa';
import useSlider from '@/hooks/useSlider';
import Testimonial from './Testimonial';

type Props = {
	data: ITestimonial[];
};

export default function TestimonialsSection({ data }: Props) {
	const { slideIndex, goToSlide } = useSlider<ITestimonial>(data, {
		timer: 8,
	});

	return (
		<Wrapper className='relative mb-10 w-full overflow-x-clip'>
			<div
				style={{
					transform: `translateX(calc(-${slideIndex * 101}%))`,
				}}
				className='w-full flex gap-[1%] transition-transform duration-300 ease-in-out'
			>
				{data.map((testimonial, i) => (
					<Testimonial
						testimonial={testimonial}
						key={i}
						slideIndex={slideIndex}
					/>
				))}
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
