'use client';

import { useLiveQuery } from '@sanity/preview-kit';
import HeroSection from './HeroSection';
import { homeQuery } from '@/sanity/lib/queries';
import IHomePage from '@/interfaces/IHomePage';

export default function PreviewHeroSection({ data }: { data: IHomePage }) {
	const [liveData] = useLiveQuery(data, homeQuery);

	return <HeroSection data={data} />;
}
