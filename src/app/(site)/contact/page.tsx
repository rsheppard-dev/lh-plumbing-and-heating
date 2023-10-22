import ContactSection from '@/components/ContactSection';
import ISettings from '@/interfaces/ISettings';
import { settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

export default async function About() {
	const settings = await sanityFetch<ISettings>({ query: settingsQuery });
	return <ContactSection type='page' data={settings} />;
}
