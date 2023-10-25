import { PortableTextBlock } from 'sanity';
import IImage from './IImage';

export default interface IContact {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	subheading: string;
	heading: string;
	content: PortableTextBlock[];
	phoneIcon: string;
	emailIcon: string;
	locationIcon: string;
	successMessage: string;
	metaTitle: string;
	metaDescription: string;
	ogImage: IImage;
}
