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
	groups: [
		{ title: 'Content', name: 'content', default: true },
		{ title: 'SEO', name: 'seo' },
	],
	fields: [
		defineField({
			title: 'Subheading',
			name: 'subheading',
			type: 'string',
			group: 'content',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Heading',
			name: 'heading',
			type: 'string',
			group: 'content',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Service Details',
			name: 'services',
			type: 'array',
			group: 'content',
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
		defineField({
			title: 'Meta Title',
			name: 'metaTitle',
			type: 'string',
			group: 'seo',
		}),
		defineField({
			title: 'Meta Description',
			name: 'metaDescription',
			type: 'string',
			group: 'seo',
		}),
		defineField({
			type: 'image',
			name: 'ogImage',
			title: 'Open Graph Image',
			description: 'Open graph image to display',
			group: 'seo',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
				}),
			],
		}),
	],
});

export default service;
