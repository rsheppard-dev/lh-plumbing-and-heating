import { defineField, defineType } from 'sanity';
import { FaHighlighter } from 'react-icons/fa';
import HighlightedTextUI from '@/components/HighlightedTextUI';

const about = defineType({
	name: 'about',
	type: 'document',
	title: 'About Section',
	groups: [
		{ title: 'Content', name: 'content', default: true },
		{ title: 'SEO', name: 'seo' },
	],
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
			group: 'content',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Heading',
			name: 'heading',
			type: 'array',
			group: 'content',
			of: [
				{
					type: 'block',
					styles: [],
					lists: [],
					marks: {
						annotations: [],
						decorators: [
							{
								title: 'Highlight',
								value: 'highlight',
								icon: FaHighlighter,
								component: HighlightedTextUI,
							},
						],
					},
				},
			],
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
			validation: Rule => Rule.required(),
		}),
		defineField({
			type: 'image',
			name: 'image',
			title: 'Image',
			group: 'content',
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
				title: 'About Section',
			};
		},
	},
});

export default about;
