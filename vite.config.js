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
					'/docs/': [
						{
							title: 'Getting Started',
							collapsible: true,
							items: [
								{
									title: "Introduction",
									to: '/docs/getting-started/introduction'
								},
								{
									title: "Install",
									to: "/docs/getting-started/install"
								}
							]
						},
						{
							title: "Configuration",
							collapsible: true,
							items: [
								{
									title: "Config.yml",
									to: "/docs/configuration/config-yml"
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
