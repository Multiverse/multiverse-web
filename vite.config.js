import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

import coreSidebar from "./config/sidebar/core"
import netherportalsSidebar from './config/sidebar/netherportals'
import inventoriesSidebar from './config/sidebar/inventories'
import portalsSidebar from './config/sidebar/portals'
import signportalsSidebar from './config/sidebar/signportals'

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
						to: '/core/getting-started/introduction/'
					},
					{
						title: 'NetherPortals',
						to: '/netherportals/introduction/'
					},
					{
						title: 'Portals',
						to: '/portals/introduction/'
					},
					{
						title: 'Inventories',
						to: '/inventories/introduction/'
					},
					{
						title: 'SignPortals',
						to: '/signportals/introduction/'
					}
				],
				sidebar: {
					"/core/": coreSidebar,
					"/netherportals/": netherportalsSidebar,
					"/inventories/": inventoriesSidebar,
					"/portals/": portalsSidebar,
					"/signportals/": signportalsSidebar
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
