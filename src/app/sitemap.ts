import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://www.lhplumbing-harrow.co.uk';

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/gallery`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
		},
	];
}
