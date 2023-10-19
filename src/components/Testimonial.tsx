'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ITestimonial from '@/interfaces/ITestimonial';
import { BsFillStarFill, BsXSquareFill } from 'react-icons/bs';
import { PortableText } from '@portabletext/react';

type Props = {
	testimonial: ITestimonial;
	key: number;
	slideIndex: number;
};

export default function Testimonial({
	testimonial,
	key: i,
	slideIndex,
}: Props) {
	let [isOpen, setIsOpen] = useState(false);

	const date = new Date(testimonial.reviewDate);
	const options = {
		year: 'numeric',
		month: 'long',
	} as Intl.DateTimeFormatOptions;
	const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
	return (
		<>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className='relative z-50'
			>
				<div className='fixed inset-0 bg-black/30' aria-hidden='true' />

				<div className='fixed inset-0 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 w-full'>
						<Transition
							show={isOpen}
							enter='transition duration-100 ease-out'
							enterFrom='transform scale-95 opacity-0'
							enterTo='transform scale-100 opacity-100'
							leave='transition duration-75 ease-out'
							leaveFrom='transform scale-100 opacity-100'
							leaveTo='transform scale-95 opacity-0'
							as={Fragment}
						>
							<Dialog.Panel className='mx-auto w-full flex flex-col bg-white shadow-md prose font-sourceSans text-zinc-600'>
								<div className='w-full pt-10 pb-5 flex items-center justify-between px-10'>
									<div className='flex gap-1 items-center'>
										{Array.from({ length: 5 }).map((_, i) =>
											i + 1 <= testimonial.rating ? (
												<BsFillStarFill
													key={i}
													aria-hidden
													className='fill-brand-yellow h-4 w-4'
												/>
											) : (
												<BsFillStarFill
													key={i}
													aria-hidden
													className='fill-zinc-300 h-4 w-4'
												/>
											)
										)}
									</div>

									<button title='Close' onClick={() => setIsOpen(false)}>
										<BsXSquareFill
											aria-hidden
											className='w-5 h-5 hover:fill-brand-blue transition-colors'
										/>
									</button>
								</div>
								<article className='px-10 mb-10 grow prose max-w-none w-full'>
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
							</Dialog.Panel>
						</Transition>
					</div>
				</div>
			</Dialog>

			<button
				aria-hidden={i !== slideIndex}
				onClick={() => setIsOpen(!isOpen)}
				className='flex hover:shadow-lg transition-all flex-col bg-white shadow-md grow-0 shrink-0 min-w-full prose font-sourceSans text-zinc-600 mb-10'
			>
				<div className='w-full pt-10 pb-5 flex justify-end px-10 gap-1'>
					{Array.from({ length: 5 }).map((_, i) =>
						i + 1 <= testimonial.rating ? (
							<BsFillStarFill
								key={i}
								aria-hidden
								className='fill-brand-yellow h-4 w-4'
							/>
						) : (
							<BsFillStarFill
								key={i}
								aria-hidden
								className='fill-zinc-300 h-4 w-4'
							/>
						)
					)}
				</div>
				<article className='px-10 mb-10 grow prose max-w-none line-clamp-5 md:line-clamp-3'>
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
			</button>
		</>
	);
}
