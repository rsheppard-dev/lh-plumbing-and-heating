import Footer from '@/components/Footer';
import '../globals.css';
import Header from '@/components/Header';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import { ReactNode } from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import ISettings from '@/interfaces/ISettings';
import { settingsQuery } from '@/sanity/lib/queries';
import { Metadata } from 'next';
import Analytics from '@/components/Analytics';
import CookieBanner from '@/components/CookieBanner';

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});
const sourceSans = Source_Sans_3({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-source-sans',
});

export const revalidate = 5;

export async function generateMetadata(): Promise<Metadata> {
	const settings = await sanityFetch<ISettings>({ query: settingsQuery });

	return {
		metadataBase: new URL('http://localhost:3000'),
		title: settings?.metaTitle,
		description: settings?.metaDescription,
		openGraph: {
			images: [settings?.ogImage?.url],
		},
		icons: {
			icon: [
				{
					rel: 'icon',
					type: 'image/ico',
					url: settings?.favicon,
				},
				{
					rel: 'icon',
					type: 'image/png',
					url: settings?.favicon16,
					sizes: '16x16',
				},
				{
					rel: 'icon',
					type: 'image/png',
					url: settings?.favicon32,
					sizes: '32x32',
				},
				{
					rel: 'icon',
					type: 'image/png',
					url: settings?.favicon192,
					sizes: '192x192',
				},
				{
					rel: 'icon',
					type: 'image/png',
					url: settings?.favicon512,
					sizes: '512x512',
				},
			],
			apple: settings?.appleTouchIcon,
		},
	};
}

type Props = {
	children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
	const settings = await sanityFetch<ISettings>({ query: settingsQuery });
	const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string;
	return (
		<html lang='en'>
			<Analytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
			<body
				className={`${montserrat.variable} ${sourceSans.variable} bg-slate-50 flex flex-col min-h-screen overflow-x-hidden`}
			>
				<Header settings={settings} />
				<main className='grow'>{children}</main>
				<Footer settings={settings} />
				<CookieBanner />
			</body>
		</html>
	);
}
