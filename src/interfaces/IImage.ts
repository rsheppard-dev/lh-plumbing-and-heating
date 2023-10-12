export default interface IImage {
	_type: 'image';
	alt: string;
	url: string;
	height: number;
	width: number;
	size: number;
	blurredDataUrl?: string;
}
