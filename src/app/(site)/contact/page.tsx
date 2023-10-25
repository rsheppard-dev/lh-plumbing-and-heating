import ContactSection from '@/components/ContactSection';
import IContact from '@/interfaces/IContact';
import ISettings from '@/interfaces/ISettings';
import { contactQuery, settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const pagePromise = sanityFetch<IContact>({ query: contactQuery });
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

export default async function Contact() {
	const settingsPromise = sanityFetch<ISettings>({ query: settingsQuery });
	const contactPromise = sanityFetch<IContact>({ query: contactQuery });

	const [settings, contact] = await Promise.all([
		settingsPromise,
		contactPromise,
	]);
	console.log(contact.metaTitle);
	return <ContactSection type='page' settings={settings} contact={contact} />;
}
