import { defineField, defineType } from 'sanity';

const certification = defineType({
	title: 'Certifications',
	name: 'certification',
	type: 'document',
	fields: [
		defineField({
			title: 'Name',
			name: 'name',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			type: 'image',
			name: 'logo',
			title: 'Logo',
			validation: Rule => Rule.required(),
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					validation: Rule => Rule.required(),
				}),
			],
		}),
	],
});

export default certification;
