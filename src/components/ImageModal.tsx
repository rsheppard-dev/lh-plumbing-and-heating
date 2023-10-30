'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { BsXSquareFill } from 'react-icons/bs';
import IImage from '@/interfaces/IImage';

type Props = {
	image: IImage;
	priority: boolean;
};

export default function ImageModal({ image, priority }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<>
			<button onClick={isOpen ? closeModal : openModal}>
				<figure className='h-64 bg-zinc-300 relative overflow-hidden aspect-w-16 aspect-h-4'>
					<Image
						src={image.url}
						alt={image.alt}
						fill
						priority={priority}
						sizes='(min-width: 1380px) 306px, (min-width: 1060px) calc(18.33vw + 57px), (min-width: 800px) calc(33.33vw - 16px), (min-width: 540px) calc(50vw - 20px), calc(100vw - 32px)'
						className='object-cover hover:scale-110 transition-transform'
					/>
				</figure>
			</button>

			<Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
				<div className='fixed inset-0 bg-black/30' aria-hidden='true' />
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
					<div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
						<Dialog.Panel className='relative max-h-full w-full max-w-screen-md rounded bg-white'>
							<figure
								onClick={closeModal}
								className='h-full w-full bg-zinc-300 relative overflow-hidden'
							>
								<Image
									src={image.url}
									alt={image.alt}
									width={image.width}
									height={image.height}
									className='object-cover'
								/>
							</figure>

							<button
								title='Close'
								onClick={closeModal}
								className='absolute h-6 w-6 top-4 right-4'
							>
								<BsXSquareFill
									aria-hidden
									className='w-full h-full fill-white hover:fill-brand-yellow transition-colors'
								/>
							</button>
						</Dialog.Panel>
					</div>
				</Transition>
			</Dialog>
		</>
	);
}
