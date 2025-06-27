import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

import mv5Sidebar from "./config/sidebar/mv5"
import coreSidebar from "./config/sidebar/core"
import netherportalsSidebar from './config/sidebar/netherportals'
import inventoriesSidebar from './config/sidebar/inventories'
import portalsSidebar from './config/sidebar/portals'
import signportalsSidebar from './config/sidebar/signportals'

const githubSponsorSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24">
    <path fill="pink"
        d="M17.625 1.499c-2.32 0-4.354 1.203-5.625 3.03-1.271-1.827-3.305-3.03-5.625-3.03C3.129 1.499 0 4.253 0 8.249c0 4.275 3.068 7.847 5.828 10.227a33.14 33.14 0 0 0 5.616 3.876l.028.017.008.003-.001.003c.163.085.342.126.521.125.179.001.358-.041.521-.125l-.001-.003.008-.003.028-.017a33.14 33.14 0 0 0 5.616-3.876C20.932 16.096 24 12.524 24 8.249c0-3.996-3.129-6.75-6.375-6.75zm-.919 15.275a30.766 30.766 0 0 1-4.703 3.316l-.004-.002-.004.002a30.955 30.955 0 0 1-4.703-3.316c-2.677-2.307-5.047-5.298-5.047-8.523 0-2.754 2.121-4.5 4.125-4.5 2.06 0 3.914 1.479 4.544 3.684.143.495.596.797 1.086.796.49.001.943-.302 1.085-.796.63-2.205 2.484-3.684 4.544-3.684 2.004 0 4.125 1.746 4.125 4.5 0 3.225-2.37 6.216-5.048 8.523z" />
</svg>`

const config = defineConfig({
	server: {
		hmr: { overlay: false },
	},
	plugins: [
		sveltepress({
			theme: defaultTheme({
				docsearch : {
					appId : '56HWOVX855',
					apiKey : '888a5504d578f6f1d444abdb7be802ad',
					indexName : 'mvplugins',
				},
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
					languages: ['svelte', 'sh', 'js', 'html', 'ts', 'md', 'css', 'scss', 'yaml', 'java', 'xml']
				},
				navbar: [
					{
						title: 'MV5',
						to: '/mv5/'
					},
					{
						title: 'Core',
						to: '/core/'
					},
					{
						title: 'Inventories',
						to: '/inventories/'
					},
					{
						title: 'Portals',
						to: '/portals/'
					},
					{
						title: 'NetherPortals',
						to: '/netherportals/'
					},
					{
						title: 'SignPortals',
						to: '/signportals/'
					},
					{
						title: 'Download',
						to: '/download/'
					},
					{
						icon: githubSponsorSvg,
						to: 'https://github.com/sponsors/Multiverse',
					},
				],
				sidebar: {
					"/mv5": mv5Sidebar,
					"/core": coreSidebar,
					"/netherportals": netherportalsSidebar,
					"/inventories": inventoriesSidebar,
					"/portals": portalsSidebar,
					"/signportals": signportalsSidebar,
					"/download": [{}],
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
