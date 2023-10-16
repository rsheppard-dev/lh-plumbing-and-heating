export interface IBlock {
	children: {
		marks: [];
		text: string;
		_key: string;
		_type: 'span';
	}[];
	markDefs: [];
	style: string;
	_key: string;
	_type: 'block';
}
