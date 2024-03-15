/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#DA2E53',
				secondary: '#08D906',
				dark: '#131B25',
				light: '#EAEBEA'
			}
		},
		fontFamily: {
			'sans': ['Montserrat', 'ui-sans-serif', 'system-ui']
		}
	},
	plugins: [],
}
