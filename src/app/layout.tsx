import Footer from '@/components/Footer';
import '../globals.css';
import Header from '@/components/Header';
import ISettings from '@/interfaces/ISettings';
import { settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import { ReactNode } from 'react';

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

export async function generateMetadata() {
	const { metaTitle, metaDescription, ogImage } = await sanityFetch<ISettings>({
		query: settingsQuery,
	});

	return {
		metadataBase: new URL('http://localhost:3000'),
		title: {
			default: metaTitle,
			template: `%s | ${metaTitle}`,
		},
		description: metaDescription,
		openGraph: {
			images: [ogImage?.url],
		},
		robots: {
			index: false,
		},
	};
}

export const revalidate = 60;

type Props = {
	children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
	const settings = await sanityFetch<ISettings>({ query: settingsQuery });

	return (
		<html lang='en'>
			<body
				className={`${montserrat.variable} ${sourceSans.variable} bg-slate-50 flex flex-col min-h-screen`}
			>
				<Header settings={settings} />
				<main className='grow'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
