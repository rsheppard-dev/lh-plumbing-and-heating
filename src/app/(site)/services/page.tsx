import ServicesSection from '@/components/ServicesSection';
import IService from '@/interfaces/IService';
import ISettings from '@/interfaces/ISettings';
import { serviceQuery, settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const pagePromise = sanityFetch<IService>({ query: serviceQuery });
	const sitePromise = sanityFetch<ISettings>({ query: settingsQuery });

	const [page, site] = await Promise.all([pagePromise, sitePromise]);

	return {
		title: page?.metaTitle ?? site.metaTitle,
		description: page?.metaDescription ?? site?.metaDescription,
		openGraph: {
			images: page?.ogImage?.url ?? site?.ogImage?.url,
		},
	};
}

export default async function Services() {
	const data = await sanityFetch<IService>({ query: serviceQuery });
	return <ServicesSection type='page' data={data} />;
}
