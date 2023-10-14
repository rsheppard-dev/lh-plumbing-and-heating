import ServicesCard from './ServicesCard';
import Wrapper from './Wrapper';

type Props = {
	data: any;
};

export default function ServicesSection({ data }: Props) {
	return (
		<section className='py-10'>
			<Wrapper>
				<h2 className='flex items-center gap-4 mb-4'>
					<div aria-hidden='true' className='bg-brand-yellow h-1 w-10' />
					<span className='text-zinc-400 text-sm md:text-base font-montserrat font-bold'>
						Plumbing and Heating Services Harrow
					</span>
				</h2>
			</Wrapper>

			<div className='relative overflow-hidden mb-10'>
				<div className='absolute inset-y-0 -left-12 w-full md:w-1/2 bg-brand-yellow -skew-x-12'></div>
				<div className='relative'>
					<Wrapper className='py-4'>
						<h3 className='font-bold font-montserrat text-zinc-900 text-2xl'>
							How can we help you?
						</h3>
					</Wrapper>
				</div>
			</div>

			<Wrapper className='grid grid-cols-12 gap-4'>
				<ServicesCard />
			</Wrapper>
		</section>
	);
}
