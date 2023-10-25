import { PortableTextBlock } from 'sanity';
import IImage from './IImage';

export default interface IService {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	subheading: string;
	heading: string;
	services: {
		name: string;
		icon: string;
		body: PortableTextBlock[];
	}[];
	metaTitle: string;
	metaDescription: string;
	ogImage: IImage;
}
