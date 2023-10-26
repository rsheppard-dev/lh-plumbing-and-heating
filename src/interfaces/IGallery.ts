import IImage from './IImage';

export default interface IGallery {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	subheading: string;
	heading: string;
	imageGallery: {
		image: IImage;
		categories: string[];
	}[];
	metaTitle: string;
	metaDescription: string;
	ogImage: IImage;
}
