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
					title: 'Image',
					name: 'imageData',
					type: 'object',
					fields: [
						defineField({
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
						defineField({
							type: 'array',
							title: 'Categories',
							name: 'categories',
							of: [
								defineArrayMember({
									title: 'Category',
									description:
										'Assign at least one category for image to be filtered by.',
									name: 'category',
									type: 'reference',
									to: [{ type: 'category' }],
									options: {
										disableNew: false,
									},
									validation: Rule => Rule.required(),
								}),
							],
						}),
					],
					preview: {
						select: {
							image: 'image',
						},
						prepare(selection) {
							const { image } = selection;
							return {
								media: image,
								title: image.alt,
							};
						},
					},
				}),
			],
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
