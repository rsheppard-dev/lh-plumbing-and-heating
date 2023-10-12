import { PortableText } from '@portabletext/react';
import HighlightedText from './HighlightedText';
import Image from 'next/image';
import urlFor from '@/sanity/lib/imageBuilder';
import Wrapper from './Wrapper';
import IAbout from '@/interfaces/IAbout';

type Props = {
	type?: 'page' | 'section';
	data: IAbout;
};

export default function AboutSection({ type = 'section', data }: Props) {
	const { subheading, heading, content, image } = data;
	return (
		<Wrapper title='About Section' className='py-10'>
			<div className='grid grid-cols-12 space-y-6 md:space-y-0 md:space-x-6 justify-center'>
				<div className='col-span-12 md:col-span-6 space-y-6'>
					{type === 'page' ? (
						<>
							<h1 className='flex items-center gap-4'>
								<div aria-hidden='true' className='bg-brand-yellow h-1 w-10' />
								<span className='text-zinc-400 whitespace-nowrap text-sm md:text-base font-montserrat font-bold'>
									{subheading}
								</span>
							</h1>

							<h2 className='font-montserrat balance font-bold text-3xl balance text-zinc-900'>
								<PortableText
									value={heading}
									components={{
										marks: {
											highlight: HighlightedText,
										},
									}}
								/>
							</h2>
						</>
					) : (
						<>
							<h2 className='flex items-center gap-4'>
								<div aria-hidden='true' className='bg-brand-yellow h-1 w-10' />
								<span className='text-zinc-400 whitespace-nowrap text-sm md:text-base font-montserrat font-bold'>
									{subheading}
								</span>
							</h2>

							<h3 className='font-montserrat balance font-bold text-3xl balance text-zinc-900'>
								<PortableText
									value={heading}
									components={{
										marks: {
											highlight: HighlightedText,
										},
									}}
								/>
							</h3>
						</>
					)}

					<div className='max-w-none font-sourceSans prose'>
						<PortableText value={content} />
					</div>
				</div>

				<div className='relative col-span-12 md:col-span-6 w-full h-72 md:h-full border-r-8 shadow border-brand-yellow'>
					<Image
						src={urlFor(image.url).auto('format').url()}
						alt={image.alt}
						fill
						sizes='(max-width: 768px) 100%, 50%'
						className='object-cover object-center'
					/>
				</div>
			</div>
		</Wrapper>
	);
}
