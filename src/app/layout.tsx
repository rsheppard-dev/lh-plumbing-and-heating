import { ReactNode, Suspense } from 'react';
import './globals.css';

type Props = {
	children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body>
				<Suspense>{children}</Suspense>
			</body>
		</html>
	);
}
