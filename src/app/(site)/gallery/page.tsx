import SectionHeader from '@/components/SectionHeader';
import ISettings from '@/interfaces/ISettings';
import { settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Metadata } from 'next';

export default async function Gallery() {
	return (
		<div className='pt-32'>
			<SectionHeader heading='Gallery' subheading='View Our Work' type='page' />
		</div>
	);
}
