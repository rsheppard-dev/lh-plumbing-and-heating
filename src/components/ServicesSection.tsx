import SectionHeader from './SectionHeader';
import ServicesCard from './ServicesCard';
import Wrapper from './Wrapper';
import IService from '@/interfaces/IService';

type Props = {
	type?: 'page' | 'section';
	data: IService;
};

export default function ServicesSection({ type = 'section', data }: Props) {
	const { heading, subheading, services } = data;

	return (
		<section
			aria-label='Services Section'
			className={`${type === 'page' ? 'pt-32 mb-10' : 'mb-10'}`}
		>
			<SectionHeader type={type} heading={heading} subheading={subheading} />

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
