export const metadata = {
	title: 'LH Plumbing & Heating Admin Console',
	description: 'Content management system.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
