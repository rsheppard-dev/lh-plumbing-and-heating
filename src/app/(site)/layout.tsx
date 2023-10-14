import Footer from '@/components/Footer';
import '../globals.css';
import Header from '@/components/Header';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import { ReactNode } from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import ISettings from '@/interfaces/ISettings';
import { settingsQuery } from '@/sanity/lib/queries';

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
				<Footer settings={settings} />
			</body>
		</html>
	);
}
