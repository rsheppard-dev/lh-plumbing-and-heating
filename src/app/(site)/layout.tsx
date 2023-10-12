import Footer from '@/components/Footer';
import '../globals.css';
import Header from '@/components/Header';
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

export const revalidate = 60;

type Props = {
	children: ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.variable} ${sourceSans.variable} bg-slate-50 flex flex-col min-h-screen`}
			>
				<Header />
				<main className='grow'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
