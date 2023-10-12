import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				'brand-yellow': '#f0c808',
				'brand-blue': '#0366a9',
			},
			fontFamily: {
				montserrat: ['var(--font-montserrat)'],
				sourceSans: ['var(--font-source-sans)'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};

export default config;
