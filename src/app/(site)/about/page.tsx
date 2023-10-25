import AboutSection from '@/components/AboutSection';
import IAbout from '@/interfaces/IAbout';
import ISettings from '@/interfaces/ISettings';
import { aboutQuery, settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const pagePromise = sanityFetch<IAbout>({ query: aboutQuery });
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

export default async function AboutPage() {
	const data = await sanityFetch<IAbout>({ query: aboutQuery });
	return <AboutSection type='page' data={data} />;
}
