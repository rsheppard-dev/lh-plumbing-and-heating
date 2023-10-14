import { defineArrayMember, defineField, defineType } from 'sanity';

const service = defineType({
	name: 'service',
	type: 'document',
	title: 'About Section',
	fieldsets: [
		{
			title: 'Button',
			name: 'button',
		},
	],
	fields: [
		defineField({
			title: 'Subheading',
			name: 'subheading',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Heading',
			name: 'heading',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Service Details',
			name: 'services',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'document',
					title: 'Service Details',
					name: 'serviceDetails',
					fields: [
						defineField({
							title: 'Service Name',
							name: 'name',
							type: 'string',
							validation: Rule => Rule.required(),
						}),
						defineField({
							title: 'Animated Icon File',
							description: 'Select a lottie animation file in JSON format.',
							name: 'icon',
							type: 'file',
							options: {
								accept: '.json',
							},
							validation: Rule => Rule.required(),
						}),
						defineField({
							title: 'Service Information',
							name: 'body',
							type: 'array',
							of: [{ type: 'block' }],
							validation: Rule => Rule.required(),
						}),
					],
				}),
			],
			validation: Rule => Rule.required(),
		}),
	],
});

export default service;
