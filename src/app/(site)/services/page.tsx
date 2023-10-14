import ServicesSection from '@/components/ServicesSection';
import Wrapper from '@/components/Wrapper';
import IService from '@/interfaces/IService';
import { serviceQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function About() {
	const data = await sanityFetch<IService>({ query: serviceQuery });
	return (
		<Wrapper className='container pt-32 px-4'>
			<ServicesSection data={data} />
		</Wrapper>
	);
}
