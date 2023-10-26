import GallerySection from '@/components/GallerySection';
import ICategory from '@/interfaces/ICategory';
import IGallery from '@/interfaces/IGallery';
import ISettings from '@/interfaces/ISettings';
import {
	categoryQuery,
	galleryQuery,
	settingsQuery,
} from '@/sanity/lib/queries';
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

export default async function Gallery() {
	const categoriesPromise = sanityFetch<ICategory[]>({ query: categoryQuery });
	const galleryPromise = sanityFetch<IGallery>({ query: galleryQuery });

	const [categoriesData, galleryData] = await Promise.all([
		categoriesPromise,
		galleryPromise,
	]);
	return <GallerySection categories={categoriesData} gallery={galleryData} />;
}
