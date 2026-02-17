<script>
  let plugins = [
    {
      name: "Multiverse-Core",
      description: "The go-to plugin for managing multiple worlds.",
      link: "https://modrinth.com/plugin/multiverse-core",
      tag: "required",
      tagColor: "bg-red-500",
    },
    {
      name: "Multiverse-Inventories",
      description: "Handles inventory separation between worlds with ease.",
      link: "https://modrinth.com/plugin/multiverse-inventories",
      tag: "recommended",
      tagColor: "bg-green-500",
    },
    {
      name: "Multiverse-Portals",
      description: "Create custom portals to teleport players.",
      link: "https://modrinth.com/plugin/multiverse-portals",
      tag: "recommended",
      tagColor: "bg-green-500",
    },
    {
      name: "Multiverse-NetherPortals",
      description: "Manages vanilla Nether and End portals linking between worlds.",
      link: "https://modrinth.com/plugin/multiverse-netherportals",
      tag: "recommended",
      tagColor: "bg-green-500",
    },
    {
      name: "Multiverse-SignPortals",
      description: "Make clickable signs to teleport.",
      link: "https://modrinth.com/plugin/multiverse-signportals",
      tag: "recommended",
      tagColor: "bg-green-500",
    },
  ];
  let otherPlugins = [
    {
      name: "Multiverse-InventoriesImporter",
      description: "Import vanilla player data or migrate data from another plugin into Multiverse-Inventories. This plugin only works on PaperMC and its supported forks.",
      link: "https://modrinth.com/plugin/multiverse-inventoriesimporter",
      tag: "utility",
      tagColor: "bg-yellow-600",
    },
    {
      name: "Multiverse-CommandDestination",
      description: "Small addon for people who are using Multiverse and want to run their own commands on teleporting or entering a Multiverse Portal.",
      link: "https://modrinth.com/plugin/multiverse-commanddestination",
      tag: "extension",
      tagColor: "bg-yellow-600",
    },
    {
      name: "Multiverse-Legacy-Api",
      description: "Temporary adds backwards compatibilty support for users that upgraded to new Multiverse v5, but have 3rd-party plugins that still hooks into old v4 API.",
      link: "https://modrinth.com/plugin/multiverse-legacy-api",
      tag: "legacy",
      tagColor: "bg-gray-600",
    }
  ]
</script>

<main>
  <div class="bg-blue-700 rounded-3xl text-white text-lg">
      <p class="px-5 py-5">Multiverse is developed by volunteers in our free time. If you liked our our work, please consider supporting us on <a href="https://github.com/sponsors/Multiverse" target="_blank" class="text-white font-bold underline">Github Sponsors</a> or <a href="https://opencollective.com/multiverse-plugins" target="_blank" class="text-white font-bold underline">Open Collective</a>.</p>
  </div>
  <h1 class="text-3xl font-bold pt-2 pl-4">Multiverse Plugin Downloads</h1>
  <div class="grid grid-cols-1 gap-5">
    {#each plugins as plugin}
      <div
        class="bg-white dark:bg-gray-8 rounded-3xl shadow-lg p-4 flex flex-col sm:flex-row justify-between content-center items-start sm:items-center"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <p class="text-black dark:text-white text-xl font-semibold m-0">{plugin.name}</p>
            <span class="{plugin.tagColor} text-xs px-2 py-1 rounded-full text-white flex-none">
              {plugin.tag}
            </span>
          </div>
          <div class="text-gray-400 pr-0 sm:pr-4">{plugin.description}</div>
        </div>
        <a
          class="svp-gradient-bg text-white dark:text-warm-gray-9 px-4 py-2 rounded-full hover:bg-blue-600 flex items-center gap-2 mt-4 sm:mt-0 flex-none"
          href={plugin.link}
          target="_blank"
        >
          <div class="flex items-center gap-2">
            <img src="/modrinth-logo.webp" alt="Modrinth Logo" class="w-6 h-6 bg-white dark:bg-warm-gray-9 rounded-full p-2px" />
            <p class="m-0 pr-1">Download</p>
          </div>
        </a>
      </div>
    {/each}
  </div>
  <h3 class="text-xl font-bold pt-2 pl-4">Other Add-Ons</h3>
  <div class="grid grid-cols-1 gap-5">
    {#each otherPlugins as plugin}
      <div
        class="bg-white dark:bg-gray-8 rounded-3xl shadow-lg p-4 flex flex-col sm:flex-row justify-between content-center items-start sm:items-center"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <p class="text-black dark:text-white text-xl font-semibold m-0">{plugin.name}</p>
            <span class="{plugin.tagColor} text-xs px-2 py-1 rounded-full text-white flex-none">
              {plugin.tag}
            </span>
          </div>
          <div class="text-gray-400 pr-0 sm:pr-4">{plugin.description}</div>
        </div>
        <a
          class="svp-gradient-bg text-white dark:text-warm-gray-9 px-4 py-2 rounded-full hover:bg-blue-600 flex items-center gap-2 mt-4 sm:mt-0 flex-none"
          href={plugin.link}
          target="_blank"
        >
          <div class="flex items-center gap-2">
            <img src="/modrinth-logo.webp" alt="Modrinth Logo" class="w-6 h-6 bg-white dark:bg-warm-gray-9 rounded-full p-2px" />
            <p class="m-0 pr-1">Download</p>
          </div>
        </a>
      </div>
    {/each}
  </div>
</main>
