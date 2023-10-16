'use client';

import ITestimonial from '@/interfaces/ITestimonial';
import Wrapper from './Wrapper';
import { FaQuoteRight } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import useSlider from '@/hooks/useSlider';

type Props = {
	data: ITestimonial[];
};

export default function TestimonialsSection({ data }: Props) {
	const { slideIndex, goToSlide } = useSlider<ITestimonial>(data, {
		timer: 10,
	});

	function convertBlockToText(block: any) {
		const textArray = block.map((b: any) => b.children[0].text);

		return textArray.join(' ');
	}

	return (
		<Wrapper className='relative mb-10 w-full overflow-x-clip'>
			<div
				style={{
					transform: `translateX(-${slideIndex * 100}%)`,
				}}
				className='w-full gap-6 flex transition-transform duration-300 ease-in-out'
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

					const short = convertBlockToText(testimonial.content);
					return (
						<div
							key={testimonial._id}
							aria-hidden={i !== slideIndex}
							className='flex flex-col bg-white shadow-md grow-0 shrink-0 min-w-full max-w-full prose font-sourceSans text-zinc-600 mb-10'
						>
							<div className='mt-10 ml-10 mb-5 flex gap-1'>
								<BsFillStarFill
									aria-hidden
									className='fill-brand-yellow h-4 w-4'
								/>
								<BsFillStarFill
									aria-hidden
									className='fill-brand-yellow h-4 w-4'
								/>
								<BsFillStarFill
									aria-hidden
									className='fill-brand-yellow h-4 w-4'
								/>
								<BsFillStarFill
									aria-hidden
									className='fill-brand-yellow h-4 w-4'
								/>
								<BsFillStarFill
									aria-hidden
									className='fill-brand-yellow h-4 w-4'
								/>
							</div>
							<article className='mx-10 mb-10 grow line-clamp-5 md:line-clamp-3'>
								{short}
							</article>

							<div className='flex bg-brand-yellow overflow-hidden mb-10'>
								<div className='px-10 py-2 leading-tight'>
									<span className='block font-sourceSans font-bold text-zinc-900'>
										{testimonial.name}
									</span>
									<span className='block font-sourceSans text-zinc-600 text-sm'>
										{formattedDate}
									</span>
								</div>
								<div className='grow bg-white -skew-x-12 relative -right-10' />
							</div>
						</div>
					);
				})}
			</div>
			<FaQuoteRight
				aria-hidden
				className='absolute right-10 -top-3 w-10 h-10 fill-brand-yellow'
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
