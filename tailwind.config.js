/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#eaeaee',
				background: '#1b1b27',
				primary: '#21c45d',
				secondary: '#514555',
				accent: '#9d869d'
			}
		}
	},
	plugins: []
};
