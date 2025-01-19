import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

import coreSidebar from "./config/sidebar/core"

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				themeColor: {
					primary: '#1aa4b8',
					hover: '#1a8cb8',
					gradient: {
						start: '#62cff4',
						end: '#2c67f2'
					}
				},
				preBuildIconifyIcons: {
					'vscode-icons': ['file-type-libreoffice-writer', 'file-type-bazel']
				},
				highlighter: {
					languages: ['svelte', 'sh', 'js', 'html', 'ts', 'md', 'css', 'scss', 'yaml']
				},
				navbar: [
					{
						title: 'Core',
						to: '/core/getting-started/introduction'
					},
					{
						title: 'NetherPortals',
						to: '/netherportals/getting-started/introduction'
					},
					{
						title: 'Portals',
						to: '/portals/getting-started/introduction'
					},
					{
						title: 'Inventories',
						to: '/inventories/getting-started/introduction'
					},
					{
						title: 'SignPortals',
						to: '/signportals/getting-started/introduction'
					}
				],
				sidebar: {
					"/core/": coreSidebar,
				},
				editLink: 'https://github.com/Multiverse/multiverse-web/edit/main/src/routes/:route',
				github: 'https://github.com/Multiverse',
				discord: 'https://discord.gg/NZtfKky',
				logo: '/multiverse.png',
			}),
			siteConfig: {
				title: 'Multiverse',
				description: 'The original Bukkit Multi-World Plugin!',
			},
		}),
	],
})

export default config
