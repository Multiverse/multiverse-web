import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

import coreSidebar from "./config/sidebar/core"
import netherportalsSidebar from './config/sidebar/netherportals'
import inventoriesSidebar from './config/sidebar/inventories'
import portalsSidebar from './config/sidebar/portals'
import signportalsSidebar from './config/sidebar/signportals'

const config = defineConfig({
	server: {
		hmr: { overlay: false },
	},
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
					'vscode-icons': [
						'file-type-minecraft',
						'file-type-light-json',
						'file-type-swift',
						'file-type-registry',
						'folder-type-github-opened',
						'file-type-wxss'
					]
				},
				highlighter: {
					languages: ['svelte', 'sh', 'js', 'html', 'ts', 'md', 'css', 'scss', 'yaml', 'java']
				},
				navbar: [
					{
						title: 'Core',
						to: '/core/1-fundamentals/1-introduction/'
					},
					{
						title: 'NetherPortals',
						to: '/netherportals/1-fundamentals/1-installation/'
					},
					{
						title: 'Portals',
						to: '/portals/1-fundamentals/1-installation/'
					},
					{
						title: 'Inventories',
						to: '/inventories/1-fundamentals/1-installation/'
					},
					{
						title: 'SignPortals',
						to: '/signportals/1-fundamentals/1-installation/'
					},
					{
						title: 'Download',
						to: '/download/plugins/'
					},
				],
				sidebar: {
					"/core/": coreSidebar,
					"/netherportals/": netherportalsSidebar,
					"/inventories/": inventoriesSidebar,
					"/portals/": portalsSidebar,
					"/signportals/": signportalsSidebar,
					"/download/": [{}],
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
