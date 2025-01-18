import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

import coreSidebar from "./config/sidebar/core"

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				themeColor: {
					gradient: {
						start: '#62cff4',
						end: '#2c67f2'
					}
				},
				preBuildIconifyIcons: {
					'vscode-icons': ['file-type-libreoffice-writer', 'file-type-bazel']
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
