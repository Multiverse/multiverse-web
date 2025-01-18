import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
					// Add your navbar configs here
				],
				sidebar: {
					'/core/': [
						{
							title: 'Getting Started',
							collapsible: true,
							items: [
								{
									title: "Introduction",
									to: '/core/getting-started/introduction'
								},
								{
									title: "Install",
									to: "/core/getting-started/install"
								},
								{
									title: "Basics",
									to: "/core/getting-started/basics"
								}
							]
						},
						{
							title: "Configuration",
							collapsible: true,
							items: [
								{
									title: "Config.yml",
									to: "/core/configuration/config-yml"
								}
							]
						}
					]
				},
				github: 'https://github.com/Blackman99/sveltepress',
				logo: '/sveltepress.svg',
			}),
			siteConfig: {
				title: 'Sveltepress',
				description: 'A content centered site build tool',
			},
		}),
	],
})

export default config
