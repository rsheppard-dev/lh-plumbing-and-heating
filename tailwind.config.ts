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
			keyframes: {
				'animate-enter': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'animate-leave': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			animation: {
				'animate-enter': 'animate-enter 0.5s ease-in-out',
				'animate-leave': 'animate-leave 0.5s ease-in-out',
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
