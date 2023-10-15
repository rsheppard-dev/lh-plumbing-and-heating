import ServicesSection from '@/components/ServicesSection';
import IService from '@/interfaces/IService';
import { serviceQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function About() {
	const data = await sanityFetch<IService>({ query: serviceQuery });
	return <ServicesSection type='page' data={data} />;
}
