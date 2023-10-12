type Props = {
	children: React.ReactNode;
};

export default function HighlightedText({ children }: Props) {
	return (
		<span style={{ backgroundColor: 'yellow', color: 'black' }}>
			{children}
		</span>
	);
}
