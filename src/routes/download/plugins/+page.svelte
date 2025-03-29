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
      name: "Multiverse-NetherPortals",
      description:
        "Manages vanilla Nether and End portals linking between worlds.",
      link: "https://modrinth.com/plugin/multiverse-netherportals#download",
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
      name: "Multiverse-Inventories",
      description: "Handles inventory separation between worlds.",
      link: "https://modrinth.com/plugin/multiverse-inventories#download",
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

  let features = [
    "Revamped command structure with full tab-completion",
    "Revamped config file with detailed comments and more options",
    "Revamped teleport handling with finer per-world permissions",
    "Significant improvements to last_location! ",
    "Added world creation options such as Single Biome and customizable flat world with Generator Settings",
    "Fixed Multiverse-Inventories player name change bug!",
    "Much much much more, full changelog in discord!",
  ];
</script>

<main>
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
  <div class="mt-12">
    <h2>Exciting NEW Multiverse 5 Version</h2>
    <p class="text-gray-500">
      We are releasing very early builds of Multiverse version 5. To get these very early builds, head to our
      <a href="https://discord.gg/NZtfKky" class="svp-gradient-text underline" target="_blank">Discord Server</a>.
    </p>
    <h3>Whats New?</h3>
    <ul class="list-disc pl-5 space-y-2">
      {#each features as feature}
        <li class="text-gray-500">
          {feature}
        </li>
      {/each}
    </ul>
    <h3>Why Still Alpha?</h3>
    <p class="text-gray-500">
      While the gameplay features are now relatively stable, there is still a lot of backend work, especially in the developer API and documentation side of things.
      MV5 <b>does not have a stable API</b> as we are still hard at work experimenting and fine tuning internally to ensure a good foundation is built for future updates 
      and maintainability.
    </p>
    <h3>Call for help with MV5 wiki</h3>
    <p class="text-gray-500">
      The MV5 updates are great, but we need to inform people on how to use them! However writing documentation is a long and laborious process which will take away more dev time. 
      Thus, we are looking for volunteers to help in writing usage guides. Our wiki is now hosted on a web page, and the source code is here: 
      <br />
      <a href="https://github.com/Multiverse/multiverse-web" class="svp-gradient-text underline" target="_blank">https://github.com/Multiverse/multiverse-web</a>
      <br />
      The wiki itself is using markdown formatting. If you are not sure on how to use GitHub, you can send your work via discord too!
    </p>
    <h3 class="text-red-500">WARNINGGGG!!</h3>
    <ul class="list-disc pl-5 space-y-2 text-red-500">
      <li>Only supports <b class="underline">MINECRAFT 1.18 AND ABOVE</b></li>
      <li>Alpha Builds are expected to have <b class="underline">BUGS</b></li>
      <li><b class="underline">MAKE BACKUPS</b> before updating to Alpha Builds</li>
      <li><b class="underline">IT WILL BE IMPOSSIBLE TO REVERT</b> to older multiverse version (unless you have backups)</li>
    </ul>
  </div>
</main>
