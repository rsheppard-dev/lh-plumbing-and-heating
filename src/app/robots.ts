import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/admin/', '/contact.html'],
		},
		sitemap: 'https://www.lhplumbing-harrow.co.uk/sitemap.xml',
	};
}
