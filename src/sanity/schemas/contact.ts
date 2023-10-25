import { defineField, defineType } from 'sanity';

const contact = defineType({
	name: 'contact',
	type: 'document',
	title: 'Contact Section',
	fieldsets: [
		{
			title: 'Contact Icons',
			name: 'icons',
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
			title: 'Contact text',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Phone Icon File',
			description: 'Select a lottie animation file in JSON format.',
			name: 'phoneIcon',
			type: 'file',
			fieldset: 'icons',
			group: 'content',
			options: {
				accept: '.json',
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Email Icon File',
			description: 'Select a lottie animation file in JSON format.',
			name: 'emailIcon',
			type: 'file',
			fieldset: 'icons',
			group: 'content',
			options: {
				accept: '.json',
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Location Icon File',
			description: 'Select a lottie animation file in JSON format.',
			name: 'locationIcon',
			type: 'file',
			fieldset: 'icons',
			group: 'content',
			options: {
				accept: '.json',
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Success Message',
			description: 'Message to display when visitor submits contact form.',
			name: 'successMessage',
			group: 'content',
			type: 'string',
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
	preview: {
		prepare() {
			return {
				title: 'Contact Section',
			};
		},
	},
});

export default contact;
