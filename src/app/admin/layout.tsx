import { ReactNode } from 'react';
import '../globals.css';

type Props = {
	children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
