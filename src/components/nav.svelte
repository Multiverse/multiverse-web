<script>
	import Logo from '$lib/images/logo/square.png';
	import Discord from '~icons/logos/discord-icon';
	import GitHub from '~icons/logos/github-icon';
</script>

<nav class="px-1 border-b-[1px] border-b-black">
	<div class="flex items-center">
		<a href="/"><img src={Logo} alt="Multiverse logo" class="w-10 hover:scale-110" /></a>
		<a href="/wiki" class="button">Wiki</a>
		<a href="/downloads" class="button">Downloads</a>

		<div class="ml-auto flex items-center">
			<a href="https://discord.gg/NZtfKky" class="text-xl hover:scale-110"><Discord /></a>
			<a href="https://github.com/Multiverse" class="text-xl hover:scale-110"><GitHub /></a>
		</div>
	</div>
</nav>

<style>
	a {
		@apply m-1;
	}
	.button {
		@apply bg-red-500 rounded-full px-2 hover:bg-red-600;
	}
</style>
