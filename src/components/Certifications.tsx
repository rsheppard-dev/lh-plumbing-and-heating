import Image from 'next/image';
import ICertification from '@/interfaces/ICertification';
import Wrapper from './Wrapper';

type Props = {
	data: ICertification[];
	background?: boolean;
};

export default function Certifications({ data, background = true }: Props) {
	return (
		<section className={`w-full ${background && 'bg-brand-yellow'} py-6 mb-10`}>
			<Wrapper>
				<div className='flex flex-wrap gap-4 justify-between sm:justify-end items-center'>
					{data.map(certification => (
						<div
							key={certification._id}
							className={`relative ${
								certification.logo.width > certification.logo.height
									? 'w-20'
									: 'w-16'
							}`}
						>
							<Image
								src={certification.logo.url}
								alt={certification.logo.alt}
								width={certification.logo.width}
								height={certification.logo.width}
							/>
						</div>
					))}
				</div>
			</Wrapper>
		</section>
	);
}
