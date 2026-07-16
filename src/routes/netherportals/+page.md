![banner](/netherportals/banner.png)

[![Release Version](https://img.shields.io/github/v/release/multiverse/multiverse-netherportals)](https://github.com/Multiverse/Multiverse-NetherPortals/releases/latest)
[![Pre-Release](https://img.shields.io/github/v/release/multiverse/multiverse-netherportals?include_prereleases&label=Pre-release)](https://github.com/Multiverse/Multiverse-NetherPortals/releases)
[![Discord](https://img.shields.io/discord/325459248047980545?label=Discord&logo=discord)](https://discord.gg/NZtfKky)
[![Donate on Github Sponsor](https://img.shields.io/badge/Github%20Sponsor-Donate-pink?logo=githubsponsors)](https://github.com/sponsors/Multiverse)
[![Donate on Open Collective](https://img.shields.io/badge/Open%20Collective-Donate-blue?style=flat&logo=opencollective)](https://opencollective.com/multiverse-plugins)

<div class="bg-blue-700 rounded-3xl text-white text-lg">
    <p class="px-5 py-5">Multiverse is developed by volunteers in our free time. If you like our work, please consider supporting us on <a href="https://github.com/sponsors/Multiverse" target="_blank" class="text-white font-bold underline">GitHub Sponsors</a> or <a href="https://opencollective.com/multiverse-plugins" target="_blank" class="text-white font-bold underline">Open Collective</a>.</p>
</div>

## About Multiverse-NetherPortals

Multiverse-NetherPortals makes vanilla Nether and End portals work across your Multiverse worlds. Give each world its own dimensions with automatic naming, explicitly link portals to different worlds, or disable a portal type in selected worlds.

Key features include:

- Automatic links such as `world` ↔ `world_nether` and `world` ↔ `world_the_end`.
- Custom one-way or bidirectional links for Nether and End portals.
- Vanilla-style portal creation and configurable coordinate scaling between worlds.
- Support for players and non-player entities.
- An API for managing links and allowing custom portal plugins to take control.

Ready to configure your first world set? Follow the [basic usage guide](/netherportals/fundamentals/basic-usage).

## Prerequisites

Before installing Multiverse-NetherPortals:

- Install [Multiverse-Core](/core/fundamentals/installation).
- Use the latest compatible v5 releases of all Multiverse modules on your server. Their minor or patch version numbers do not need to match exactly.

## Download links

- [Modrinth](https://modrinth.com/plugin/multiverse-netherportals)
- [Hangar](https://hangar.papermc.io/Multiverse/Multiverse-NetherPortals)
- [BukkitDev](https://dev.bukkit.org/projects/multiverse-netherportals)
- [GitHub Releases](https://github.com/Multiverse/Multiverse-NetherPortals/releases/latest)

## Installation

1. Download the Multiverse-NetherPortals JAR from one of the links above.
2. Place the JAR in your server's `plugins` folder alongside Multiverse-Core.
3. Start or restart the server. The default configuration files are created automatically.
4. Continue with [basic usage](/netherportals/fundamentals/basic-usage) to create and connect your dimension worlds.

## Next steps

- [Basic usage](/netherportals/fundamentals/basic-usage) — create a standard world, Nether, and End setup.
- [Commands](/netherportals/fundamentals/commands-usage) — create, remove, and inspect explicit portal links.
- [Configuration](/netherportals/reference/configuration-file) — customize automatic naming, messages, entity teleportation, and other behavior.
- [FAQ](/netherportals/reference/faq) — troubleshoot common portal-linking problems.
- [API usage](/netherportals/developers/api-usage) — integrate another plugin with Multiverse-NetherPortals.
