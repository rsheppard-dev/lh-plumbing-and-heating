import '../globals.css';
import Header from '@/components/Header';
import ISettings from '@/interfaces/ISettings';
import { settingsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import { ReactNode } from 'react';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});
const sourceSans = Source_Sans_3({
	subsets: ['latin'],
	variable: '--font-source-sans',
});

export const revalidate = 60;

type Props = {
	children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
	const settings = await sanityFetch<ISettings>({ query: settingsQuery });

	return (
		<html lang='en'>
			<body
				className={`${montserrat.variable} ${sourceSans.variable} bg-slate-50`}
			>
				<Header settings={settings} />
				{children}
			</body>
		</html>
	);
}
