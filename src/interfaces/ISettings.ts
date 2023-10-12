import IImage from './IImage';

export default interface ISettings {
	_type: 'document';
	_id: string;
	_createdAt: Date;
	companyName: string;
	phone: string;
	email: string;
	address1: string;
	address2: string;
	city: string;
	county: string;
	postCode: string;
	location: {
		_type: 'geopoint';
		lng: number;
		lat: number;
	};
	metaTitle: string;
	metaDescription: string;
	ogImage: IImage;
}
