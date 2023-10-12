import IImage from './IImage';

export default interface ICertification {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	title: string;
	logo: IImage;
}
