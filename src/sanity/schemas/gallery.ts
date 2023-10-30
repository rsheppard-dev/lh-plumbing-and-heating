import { defineArrayMember, defineField, defineType } from 'sanity';

const gallery = defineType({
	name: 'gallery',
	type: 'document',
	title: 'Gallery Section',
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
			title: 'Image Gallery',
			name: 'imageGallery',
			type: 'array',
			group: 'content',
			of: [
				defineArrayMember({
					type: 'image',
					name: 'image',
					title: 'Image',
					options: {
						hotspot: true,
					},
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
		}),
		defineField({
			title: 'Results per Page',
			name: 'limit',
			description: 'How many images to display per page.',
			type: 'number',
			initialValue: 10,
			group: 'content',
			validation: Rule => Rule.min(5).max(50),
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
				title: 'Gallery Section',
			};
		},
	},
});

export default gallery;
