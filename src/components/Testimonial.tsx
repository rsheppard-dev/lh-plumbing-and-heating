'use client';

import ITestimonial from '@/interfaces/ITestimonial';
import { Dialog, Transition } from '@headlessui/react';
import { PortableText } from '@portabletext/react';
import React, { Fragment } from 'react';
import { BsFillStarFill, BsXSquareFill } from 'react-icons/bs';

type Props = {
	index: number;
	slideIndex: number;
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	testimonial: ITestimonial;
	formattedDate: string;
};
export default function Testimonial({
	index,
	slideIndex,
	isOpen,
	openModal,
	closeModal,
	testimonial,
	formattedDate,
}: Props) {
	return (
		<>
			<Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
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

									<button title='Close' onClick={closeModal}>
										<BsXSquareFill
											aria-hidden
											className='w-5 h-5 hover:fill-brand-blue transition-colors'
										/>
									</button>
								</div>
								<article className='px-10 mb-10 text-left grow prose max-w-none w-full'>
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
				aria-hidden={index !== slideIndex}
				disabled={index !== slideIndex}
				onClick={isOpen ? closeModal : openModal}
				className='disabled:opacity-70 flex w-full md:w-11/12 h-full enabled:hover:shadow-lg enabled:hover:scale-[102%] transition-all flex-col bg-white shadow-md grow-0 shrink-0 min-w-full prose font-sourceSans text-zinc-600'
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
				<article className='px-10 mb-10 text-left grow prose max-w-none line-clamp-5 md:line-clamp-3'>
					<PortableText value={testimonial.content} />
				</article>

				<div className='flex bg-brand-yellow overflow-hidden mb-10 w-full'>
					<div className='px-10 py-2 leading-tight'>
						<span className='block text-start font-sourceSans font-bold text-zinc-900'>
							{testimonial.name}
						</span>
						<span className='block text-start font-sourceSans text-zinc-600 text-sm'>
							{formattedDate}
						</span>
					</div>
					<div className='grow bg-white h-full -skew-x-12 relative -right-10' />
				</div>
			</button>
		</>
	);
}
