import ServicesCard from './ServicesCard';
import Wrapper from './Wrapper';
import IService from '@/interfaces/IService';

type Props = {
	data: IService;
};

export default async function ServicesSection({ data }: Props) {
	const { heading, subheading, services } = data;

	return (
		<section className='py-10'>
			<Wrapper>
				<h2 className='flex items-center gap-4 mb-4'>
					<div
						aria-hidden='true'
						className='hidden sm:block bg-brand-yellow h-1 w-10'
					/>
					<span className='text-zinc-400 text-sm md:text-base font-montserrat font-bold'>
						{subheading}
					</span>
				</h2>
			</Wrapper>

			<div className='relative overflow-hidden mb-10'>
				<div className='absolute inset-y-0 -left-12 w-full md:w-1/2 bg-brand-yellow -skew-x-12'></div>
				<div className='relative'>
					<Wrapper className='py-4'>
						<h3 className='font-bold font-montserrat text-zinc-900 text-2xl'>
							{heading}
						</h3>
					</Wrapper>
				</div>
			</div>

			<Wrapper className='grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{services.map(service => (
					<ServicesCard
						key={service.name}
						title={service.name}
						icon={service.icon}
						body={service.body}
					/>
				))}
			</Wrapper>
		</section>
	);
}
