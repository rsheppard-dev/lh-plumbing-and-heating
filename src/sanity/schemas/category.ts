import { defineField, defineType } from 'sanity';

const category = defineType({
	name: 'category',
	type: 'document',
	title: 'Image Category',
	fields: [
		defineField({
			title: 'Category Name',
			name: 'name',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
	],
});

export default category;
