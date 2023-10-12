import { defineField, defineType } from 'sanity';

const settings = defineType({
	name: 'settings',
	type: 'document',
	title: 'Settings',
	groups: [
		{
			title: 'Company Details',
			name: 'companyDetails',
			default: true,
		},
		{
			title: 'SEO',
			name: 'seo',
		},
	],
	fieldsets: [
		{
			title: 'Address',
			name: 'address',
		},
	],
	fields: [
		defineField({
			title: 'Company Name',
			name: 'companyName',
			type: 'string',
			group: 'companyDetails',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Phone Number',
			name: 'phone',
			type: 'string',
			group: 'companyDetails',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Email Address',
			name: 'email',
			type: 'string',
			group: 'companyDetails',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'First Line of Address',
			name: 'address1',
			type: 'string',
			group: 'companyDetails',
			fieldset: 'address',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Second Line of Address',
			name: 'address2',
			type: 'string',
			group: 'companyDetails',
			fieldset: 'address',
		}),
		defineField({
			title: 'City',
			name: 'city',
			type: 'string',
			group: 'companyDetails',
			fieldset: 'address',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'County',
			name: 'county',
			type: 'string',
			group: 'companyDetails',
			fieldset: 'address',
		}),
		defineField({
			title: 'Post Code',
			name: 'postCode',
			type: 'string',
			group: 'companyDetails',
			fieldset: 'address',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Company Location',
			name: 'location',
			type: 'geopoint',
			group: 'companyDetails',
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
			description: 'Default open graph image to display',
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
		select: {
			name: 'companyName',
		},
		prepare(selection) {
			const { name } = selection;
			return {
				title: `${name} Settings`,
				subtitle: 'Update company and website information.',
			};
		},
	},
});

export default settings;
