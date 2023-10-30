import IImage from './IImage';

export default interface IGallery {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	subheading: string;
	heading: string;
	totalImages: number;
	imageGallery: IImage[];
	limit: number;
	metaTitle: string;
	metaDescription: string;
	ogImage: IImage;
}
