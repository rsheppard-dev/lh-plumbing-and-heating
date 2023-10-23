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
			title: 'Contact text',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Phone Icon File',
			description: 'Select a lottie animation file in JSON format.',
			name: 'phoneIcon',
			type: 'file',
			fieldset: 'icons',
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
			options: {
				accept: '.json',
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Success Message',
			description: 'Message to display when visitor submits contact form.',
			name: 'successMessage',
			type: 'string',
			validation: Rule => Rule.required(),
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
