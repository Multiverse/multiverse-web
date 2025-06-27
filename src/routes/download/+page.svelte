<script>
  let plugins = [
    {
      name: "Multiverse-Core",
      description: "The core plugin for managing multiple worlds.",
      link: "https://modrinth.com/plugin/multiverse-core#download",
      tag: "required",
      tagColor: "bg-red-500",
    },
    {
      name: "Multiverse-Inventories",
      description: "Handles inventory separation between worlds.",
      link: "https://modrinth.com/plugin/multiverse-inventories#download",
      tag: "add-on",
      tagColor: "bg-green-500",
    },
    {
      name: "Multiverse-Portals",
      description: "Create custom portals to teleport players.",
      link: "https://modrinth.com/plugin/multiverse-portals#download",
      tag: "add-on",
      tagColor: "bg-green-500",
    },
    {
      name: "Multiverse-NetherPortals",
      description:
        "Manages vanilla Nether and End portals linking between worlds.",
      link: "https://modrinth.com/plugin/multiverse-netherportals#download",
      tag: "add-on",
      tagColor: "bg-green-500",
    },
    {
      name: "Multiverse-SignPortals",
      description: "Make clickable signs to teleport.",
      link: "https://modrinth.com/plugin/multiverse-signportals#download",
      tag: "add-on",
      tagColor: "bg-green-500",
    },
  ];
</script>

<main>
  <div class="bg-blue-600 rounded-lg px-4 py-1 text-white">
    <p>Multiverse is developed by volunteers in our free time. If you liked our our work, please consider supporting us on <a href="https://github.com/sponsors/Multiverse" target="_blank" class="text-white font-bold underline">Github Sponsors</a> or <a href="https://opencollective.com/multiverse-plugins" target="_blank" class="text-white font-bold underline">Open Collective</a>.</p>
  </div>
  <h1 class="text-3xl font-bold mb-6">Multiverse Plugin Downloads</h1>
  <div class="grid grid-cols-1 gap-6">
    {#each plugins as plugin}
      <div
        class="bg-white dark:bg-gray-9 rounded-lg shadow-lg p-4 flex flex-col sm:flex-row justify-between content-center items-start sm:items-center"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <p class="text-xl font-semibold m-0">{plugin.name}</p>
            <span class="{plugin.tagColor} text-xs px-2 py-1 rounded-full text-white flex-none">
              {plugin.tag}
            </span>
          </div>
          <div class="text-gray-500">{plugin.description}</div>
        </div>
        <a
          class="svp-gradient-bg text-white dark:text-warm-gray-8 px-4 py-2 rounded-full hover:bg-blue-600 flex items-center gap-2 mt-4 sm:mt-0 flex-none"
          href={plugin.link}
          target="_blank"
        >
          <div class="flex items-center gap-2">
            <img src="/modrinth-logo.webp" alt="Modrinth Logo" class="w-6 h-6 bg-white dark:bg-warm-gray-8 rounded-full p-2px" />
            <p class="m-0 pr-1">Download</p>
          </div>
        </a>
      </div>
    {/each}
  </div>
</main>
