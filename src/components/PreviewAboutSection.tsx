'use client';

import { useLiveQuery } from '@sanity/preview-kit';
import { aboutQuery } from '@/sanity/lib/queries';
import IAbout from '@/interfaces/IAbout';
import AboutSection from './AboutSection';

export default function PreviewAboutSection({ data }: { data: IAbout }) {
	const [liveData] = useLiveQuery(data, aboutQuery);

	return <AboutSection data={liveData} />;
}
