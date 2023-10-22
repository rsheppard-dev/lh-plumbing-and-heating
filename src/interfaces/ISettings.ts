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
	location: ILocation;
	times: IAvailibleTimes[];
	metaTitle: string;
	metaDescription: string;
	ogImage: IImage;
}

export interface ILocation {
	_type: 'geopoint';
	lng: number;
	lat: number;
}

export interface IAvailibleTimes {
	availableTimes: {
		from: string;
		to: string;
		_key: string;
		_type: 'availabilityDuration';
	}[];
	day: string;
	_key: string;
	_type: 'availabilityDay';
}
