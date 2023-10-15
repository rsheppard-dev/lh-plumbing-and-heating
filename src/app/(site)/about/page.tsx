import AboutSection from '@/components/AboutSection';
import Wrapper from '@/components/Wrapper';
import IAbout from '@/interfaces/IAbout';
import { aboutQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function AboutPage() {
	const data = await sanityFetch<IAbout>({ query: aboutQuery });
	return <AboutSection type='page' data={data} />;
}
