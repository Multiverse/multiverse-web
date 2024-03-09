<script>
	import Logo from '$lib/images/logo/square.png';
	import Discord from '~icons/logos/discord-icon';
	import GitHub from '~icons/mdi/github';
</script>

<nav class="px-2 border-b-[1px] border-b-black">
	<div class="flex items-center">
		<a href="/"><img src={Logo} alt="Multiverse logo" class="w-10 hover:scale-110" /></a>
		<a href="/wiki" class="text-lg rounded-lg px-2 hover:opacity-85 bg-primary text-background"
			>Wiki</a
		>
		<a href="/downloads" class="text-lg rounded-lg px-2 hover:opacity-85 bg-secondary">Downloads</a>

		<div class="ml-auto flex items-center">
			<a href="https://discord.gg/NZtfKky" class="text-2xl hover:scale-110"><Discord /></a>
			<a href="https://github.com/Multiverse" class="text-2xl hover:scale-110"><GitHub /></a>
		</div>
	</div>
</nav>

<style>
	a {
		@apply m-1;
	}
</style>
