<script>
	import Bukkit from '$lib/images/download-sites/dbo.png';
	import Hangar from '$lib/images/download-sites/hangar.svg';
	import Modrinth from '$lib/images/download-sites/modrinth.svg';

	const downloadSites = [
		{
			name: 'Multiverse Core',
			modrinth: 'https://modrinth.com/plugin/multiverse-core',
			hangar: 'https://hangar.papermc.io/Multiverse/Multiverse-Core',
			bukkit: 'https://dev.bukkit.org/projects/multiverse-core'
		},
		{
			name: 'Multiverse Inventories',
			modrinth: 'https://modrinth.com/plugin/multiverse-inventories',
			hangar: 'https://hangar.papermc.io/Multiverse/Multiverse-Inventories',
			bukkit: 'https://dev.bukkit.org/projects/multiverse-inventories'
		},
		{
			name: 'Multiverse Portals',
			modrinth: 'https://modrinth.com/plugin/multiverse-portals',
			hangar: 'https://hangar.papermc.io/Multiverse/Multiverse-Portals',
			bukkit: 'https://dev.bukkit.org/projects/multiverse-portals'
		},
		{
			name: 'Multiverse NetherPortals',
			modrinth: 'https://modrinth.com/plugin/multiverse-netherportals',
			hangar: 'https://hangar.papermc.io/Multiverse/Multiverse-Netherportals',
			bukkit: 'https://dev.bukkit.org/projects/multiverse-netherportals'
		},
		{
			name: 'Multiverse SignPortals',
			modrinth: 'https://modrinth.com/plugin/multiverse-netherportals',
			hangar: 'https://hangar.papermc.io/Multiverse/Multiverse-Netherportals',
			bukkit: 'https://dev.bukkit.org/projects/multiverse-netherportals'
		}
	];

	function activeBg(name) {
		console.log(name + ' = ' + currentSite);
		if (name === currentSite) {
			return 'active';
		}
		return '#ff0000';
	}

	let currentSite = 'modrinth';
</script>

<div class="flex w-full mx-auto sm:mx-0 sm:w-96 mt-4">
	<button
		on:click={() => {
			currentSite = 'bukkit';
		}}
		class:active={currentSite === 'bukkit'}
		class="site"><img src={Bukkit} alt="Bukkit" /></button
	>
	<button
		on:click={() => {
			currentSite = 'hangar';
		}}
		class:active={currentSite === 'hangar'}
		class="site"><img src={Hangar} alt="Hangar" /></button
	>
	<button
		on:click={() => {
			currentSite = 'modrinth';
		}}
		class:active={currentSite === 'modrinth'}
		class="site pr-full sm:rounded-r-full"><img src={Modrinth} alt="Modrinth" /></button
	>
</div>

<div>
	{#each downloadSites as plugin}
		<h2>{plugin.name}</h2>
		<p>{plugin[currentSite]}</p>
	{/each}
</div>

<style>
	.site {
		@apply w-full px-7 py-2 bg-secondary;
	}
	.site:hover {
		@apply opacity-90;
	}

	.active {
		@apply bg-primary;
	}
</style>
