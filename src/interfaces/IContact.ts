import { PortableTextBlock } from 'sanity';

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
}
