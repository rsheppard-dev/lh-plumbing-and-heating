import { PortableTextBlock } from 'sanity';

export default interface ITestimonial {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	name: string;
	reviewDate: Date;
	rating: number;
	content: PortableTextBlock[];
}
