import { PortableTextBlock } from 'sanity';
import IImage from './IImage';

export default interface IAbout {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	subheading: string;
	heading: PortableTextBlock[];
	content: PortableTextBlock[];
	buttonText: string;
	buttonLink: string;
	image: IImage;
}
