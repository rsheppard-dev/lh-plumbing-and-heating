import React from 'react';
import Wrapper from './Wrapper';

type Props = {
	subheading: string;
	heading: string;
	type?: 'page' | 'section';
};

export default function SectionHeader({
	subheading,
	heading,
	type = 'section',
}: Props) {
	return (
		<>
			<Wrapper>
				{type === 'page' ? (
					<h1 className='flex items-center gap-4 mb-4'>
						<div
							aria-hidden='true'
							className='hidden sm:block bg-brand-yellow h-1 w-10'
						/>
						<span className='text-zinc-400 text-sm md:text-base font-montserrat font-bold'>
							{subheading}
						</span>
					</h1>
				) : (
					<h2 className='flex items-center gap-4 mb-4'>
						<div
							aria-hidden='true'
							className='hidden sm:block bg-brand-yellow h-1 w-10'
						/>
						<span className='text-zinc-400 text-sm md:text-base font-montserrat font-bold'>
							{subheading}
						</span>
					</h2>
				)}
			</Wrapper>

			<div className='relative overflow-hidden mb-10'>
				<div className='absolute inset-y-0 -left-12 w-full md:w-1/2 bg-brand-yellow -skew-x-12'></div>
				<div className='relative'>
					<Wrapper className='py-4'>
						{type === 'page' ? (
							<h2 className='font-bold font-montserrat text-zinc-900 text-2xl'>
								{heading}
							</h2>
						) : (
							<h3 className='font-bold font-montserrat text-zinc-900 text-2xl'>
								{heading}
							</h3>
						)}
					</Wrapper>
				</div>
			</div>
		</>
	);
}
