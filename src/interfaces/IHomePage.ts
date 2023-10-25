import IImage from './IImage';

export default interface IHomePage {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	ctaHeading: string;
	primaryButtonText: string;
	primaryButtonLink: string;
	secondaryButtonText: string;
	secondaryButtonLink: string;
	autoSlide: boolean;
	timer: number;
	sliderImages: IImage[];
	metaTitle: string;
	metaDescription: string;
	ogImage: IImage;
}
