<script>
	import Logo from '$lib/images/logo/long.png';
	import MdiEarth from '~icons/mdi/earth';
</script>

<div class="bg-green-500 mb-5">
	<img src={Logo} alt="Multiverse logo" class="ml-auto mr-auto py-6" />
</div>

<!-- TODO: use a clamp -->
<!-- TODO: Use non ChatGPT descriptions -->
<div class="w-[90%] mx-auto">
	<section>
		<h2>Multiverse Core</h2>
		<div class="w-full h-[1px] bg-white" />
		<p>
			Multiverse-Core is the heart of the Multiverse suite of plugins. It allows server
			administrators to create, manage, and control multiple worlds on a Minecraft server. Each
			world can have its own unique settings, including the type of world (normal, flat, or large
			biomes), the world's seed (which determines the terrain generation), and even custom
			generators for creating unique landscapes. The plugin also provides a variety of commands for
			managing these worlds, such as setting the spawn location, adjusting the time and weather, and
			much more. It's the foundation upon which all other Multiverse plugins are built.
		</p>
	</section>

	<section class="ml-auto text-right">
		<h2 class="">Multiverse NetherPortals</h2>
		<div class="w-full h-[1px] bg-white" />
		<p>
			Multiverse-NetherPortals is an add-on to the Multiverse-Core plugin that provides additional
			functionality for nether portals. With this plugin, server administrators can create custom
			nether portals in a world that lead to a specific destination world. This allows for unique
			travel experiences and can be used to create interesting gameplay mechanics. For example, a
			nether portal in one world could lead to a completely different world, rather than the nether.
			This plugin also provides commands for managing these custom nether portals.
		</p>
	</section>

	<section>
		<h2>Multiverse Portals</h2>
		<div class="w-full h-[1px] bg-white" />
		<p>
			Multiverse-Portals is another add-on to the Multiverse-Core plugin that allows server
			administrators to create custom portals. These portals can lead to any destination, whether
			it's a specific location in the same world, a different world, or even a completely different
			server. This provides a seamless way for players to travel between locations and worlds. The
			plugin also provides a variety of commands for creating, managing, and controlling these
			portals.
		</p>
	</section>

	<section class="ml-auto text-right">
		<h2 class="">Multiverse Inventories</h2>
		<div class="w-full h-[1px] bg-white" />
		<p>
			Multiverse-Inventories is an add-on to the Multiverse-Core plugin that allows server
			administrators to set up separate player stats and inventories for each world or group of
			worlds. This means that a player's inventory, experience, health, and other stats can be
			different in each world. This allows for unique gameplay experiences in each world and can be
			used to create interesting gameplay mechanics. For example, a player could have a set of
			equipment for survival mode in one world, and a completely different set of equipment for
			creative mode in another world.
		</p>
	</section>

	<section>
		<h2>Multiverse SignPortals</h2>
		<div class="w-full h-[1px] bg-white" />
		<p>
			Multiverse-SignPortals is an add-on to the Multiverse-Core plugin that allows server
			administrators to create sign portals. These are special signs that, when interacted with,
			teleport the player to a specified Multiverse destination. This provides a simple and
			intuitive way for players to travel between locations and worlds. The plugin also provides
			commands for creating and managing these sign portals.
		</p>
	</section>
</div>

<style>
	section {
		@apply md:w-[60%] my-3;
	}
</style>
