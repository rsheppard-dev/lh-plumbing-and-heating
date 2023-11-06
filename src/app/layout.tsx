import { ReactNode } from 'react';

interface ErrorProps {
	children: ReactNode;
}

export default function GlobalError({ children }: ErrorProps) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
