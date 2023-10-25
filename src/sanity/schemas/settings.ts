import { defineField, defineType } from 'sanity';

const settings = defineType({
	name: 'settings',
	type: 'document',
	title: 'Company Details',
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
		{
			title: 'Favicons',
			name: 'favicons',
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
			title: 'Opening Times',
			name: 'times',
			type: 'availability',
			group: 'companyDetails',
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
		defineField({
			title: 'Favicon',
			description: 'ICO format.',
			name: 'favicon',
			type: 'file',
			options: {
				accept: '.ico',
			},
			group: 'seo',
			fieldset: 'favicons',
		}),
		defineField({
			title: 'Favicon 16x16',
			description: '16x16 PNG format',
			name: 'favicon16',
			type: 'file',
			options: {
				accept: '.png',
			},
			group: 'seo',
			fieldset: 'favicons',
		}),
		defineField({
			title: 'Favicon 32x32',
			description: '32x32 PNG format',
			name: 'favicon32',
			type: 'file',
			options: {
				accept: '.png',
			},
			group: 'seo',
			fieldset: 'favicons',
		}),
		defineField({
			title: 'Android Chrome 192x192',
			description: '192x192 PNG format',
			name: 'favicon192',
			type: 'file',
			options: {
				accept: '.png',
			},
			group: 'seo',
			fieldset: 'favicons',
		}),
		defineField({
			title: 'Android Chrome 512x512',
			description: '512x512 PNG format',
			name: 'favicon512',
			type: 'file',
			options: {
				accept: '.png',
			},
			group: 'seo',
			fieldset: 'favicons',
		}),
		defineField({
			title: 'Apple Touch Icon',
			description: 'PNG format',
			name: 'appleTouchIcon',
			type: 'file',
			options: {
				accept: '.png',
			},
			group: 'seo',
			fieldset: 'favicons',
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
