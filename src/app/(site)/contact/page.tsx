import ContactSection from '@/components/ContactSection';
import IContact from '@/interfaces/IContact';
import ISettings from '@/interfaces/ISettings';
import { contactQuery, settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function About() {
	const settingsPromise = sanityFetch<ISettings>({ query: settingsQuery });
	const contactPromise = sanityFetch<IContact>({ query: contactQuery });

	const [settings, contact] = await Promise.all([
		settingsPromise,
		contactPromise,
	]);
	return <ContactSection type='page' settings={settings} contact={contact} />;
}
