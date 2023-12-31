import GallerySection from '@/components/GallerySection';
import IGallery from '@/interfaces/IGallery';
import ISettings from '@/interfaces/ISettings';
import { galleryQuery, settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const pagePromise = sanityFetch<IGallery>({ query: galleryQuery });
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

type Props = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

export default async function Gallery({ searchParams }: Props) {
	const galleryData = await sanityFetch<IGallery>({
		query: galleryQuery,
	});

	const page = searchParams['page'] ?? 1;
	const limit = searchParams['limit'] ?? galleryData.limit;

	const start = (Number(page) - 1) * Number(limit);
	const end = start + Number(limit);

	galleryData.imageGallery = galleryData.imageGallery.slice(start, end);
	return (
		<GallerySection
			gallery={galleryData}
			limit={Number(limit)}
			start={start}
			end={end}
		/>
	);
}
