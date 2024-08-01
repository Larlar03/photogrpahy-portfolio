import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'crayola-blue': '#1362FF',
				milk: '#FFFCF5',
				'persian-green': '#0eaa8b',
				'orange-soda': '#fa573e',
				'dark-grey': '#292929',
			},
			fontFamily: {
				maragsa: ['Maragsa', 'sans-serif'],
				garet: ['Garet', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
export default config;
