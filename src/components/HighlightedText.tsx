type Props = {
	children: React.ReactNode;
};

export default function HighlightedText({ children }: Props) {
	return <span className='text-brand-yellow'>{children}</span>;
}
