import ITestimonial from '@/interfaces/ITestimonial';
import Wrapper from './Wrapper';
import { PortableText } from '@portabletext/react';
import { FaQuoteLeft } from 'react-icons/fa';

type Props = {
	data: ITestimonial[];
};

export default function TestimonialsSection({ data }: Props) {
	return (
		<Wrapper className='mb-10'>
			<div className='flex items-center gap-4 mb-10'>
				{data.map(testimonial => {
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
							className='relative bg-white shadow-md max-w-none prose font-sourceSans text-zinc-600'
						>
							<FaQuoteLeft
								aria-hidden
								className='absolute left-10 -top-3 drop-shadow w-10 h-10 fill-brand-yellow'
							/>
							<article className='m-10'>
								<PortableText value={testimonial.content} />
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

			<div className='flex gap-2 justify-center items-center'>
				<button className='w-4 h-4 rounded-full bg-zinc-400'></button>
				<button className='w-4 h-4 rounded-full bg-zinc-400'></button>
				<button className='w-4 h-4 rounded-full bg-zinc-400'></button>
				<button className='w-4 h-4 rounded-full bg-zinc-400'></button>
			</div>
		</Wrapper>
	);
}
