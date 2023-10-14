import { PortableTextBlock } from 'sanity';

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
}
