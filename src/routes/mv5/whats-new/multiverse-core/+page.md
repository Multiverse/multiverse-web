---
title: "Multiverse Core Changelog"
---

### Revamped
1. *Revamped* command structure with **full tab-completion** and flags (Try out all the commands and see!)

1. *Revamped* config file with clear comments

1. *Revamped* message outputs with localisation support
   - Locales based on each player's client's language settings
   - Configuration option for locale: `per-player-locale` and `default-locale`

1. *Revamped* generator plugin support (3rd-party plugins can hook into mv to provide generator options tab-completion)

1. *Revamped* `mv list` command with paging and filtering, better output formatting
   - Improved filter and paging options with regex matching (applies to other listing related commands as well)
   - Include option to switch between worldalias and worldname with `/mv list --raw`

1. *Revamped* teleport handling. Now uses paper's AsyncTeleport API!
   - Support teleportation of multiple players in a single command
   - Updated teleport permission with finer control (e.g. `multiverse.teleport.w.self.worldname`)
   - Implement config option `use-finer-teleport-permissions` for using finer teleport permission. When enabled you will need `multiverse.teleport.<self|other>.<type>.<finer>`
   - Implement config option `concurrent-teleport-limit` for `/mv tp` command. (fyi if you didnt know, you can teleport multiple players with `/mvtp Player1,Player2 <world>` or `/mvtp @a <world>`)

1. *Revamped* `/mv confirm [otp]` command with new configuration options
   - Implement confirmation otp to further reduce chance of accidentally running dangerous command. An example command is `/mv confirm 384`. You can change with `use-confirm-otp` in config.yml.
   - Implement confirmation mode to control when is `/mv confirm` is required. See `confirm-mode` in config.yml for more info.
   - Add config option for `/mv confirm` timeout, also increases its default timeout duration to 30s

1. *Revamped* block safety checking
   - Greatly improve algorithm logic and efficiency
   - Check if current location is safe before searching around (Fixes some edge case like void world where spawn location is on a single block)
   - added 2 new config option `safe-location-horizontal-search-radius` and `safe-location-vertical-search-radius`

1. *Revamped* respawn world handling with more config options
   - Add `default-respawn-within-same-world` option. It will essentially disable handling of respawn by default
   - Add `enforce-respawn-at-world-spawn` config option. It will add support for vanilla `/spawnpoint` command

1.  *Revamped* handling of entity spawning configuration
    - Make use of bukkit's [SpawnCategory](https://jd.papermc.io/paper/1.21.5/org/bukkit/entity/SpawnCategory.html) to ensure all entities can be configured
    - New command to configure entity spawning: `/mv entity-spawn-config modify [world] <spawn-category> <set|add|reset|remove> <property> [value]`
    - New command to view entity spawning config: `/mv entity-spawn-config info [world]`
    - New command to purge entities that has been disabled: `/mv purge-entities [world]`
    - New command to purge all entities, optionally for particular spawn categories: `/mv purge-all-entities [world] [spawn-categories]`
    - Add support for controlling non-living entity from spawning (e.g. you can disable ITEM drop with the MISC SpawnCategory)

### Newly Added

1. *New* option for creating flat world with generator string (`mv create flat normal --world-type flat --generator-settings {"layers":[{"block":"stone","height":1},{"block":"grass_block","height":1},{"block":"sea_lantern","height":1}],"biome":"plains"}`)

1. *New* join-location feature to teleport player to spawn at a fixed location every time they join the server

1. *New* hook to PlaceholderAPI for multiverse related information (e.g. `%multiverse-core_alias_<world>%`)

1. *New* support teleportation of multiple players in a single command

1. *New* config option to disable gamemode enforcement

1. *New* option to keep world properties, gamerules and worldborders data when cloning/regening world

1. *New* support for creating worlds with single biome (You can now do `/mv create <worldname> normal --biome <biomename> and  /mv import <worldname> normal --biome @single:<biome>`)

1. *New* confirmation otp to further reduce chance of accidentally running dangerous command. An example command is `/mv confirm 384`. You can change with `use-confirm-otp` in config.yml.

### Other Features

1. Add support for deleting unloaded worlds

1. Add configuration option for using world alias name in commands and destinations with `resolve-alias-name`

1. Add support for using a destination string for first spawn location

1. Add support for command block running worlds related commands (for pre-1.21, papermc fixed this internally with 1.21.4 already)

1. World and its properties in `worlds.yml` are now in alphabetical order

1. Implement config option for debug permission

1. Add support for teleporting multiple players to their respective spawn. Selecting multiple players is the same as `/mvtp`

1. Debug paste service with `/mv dumps` command for generating debug link instead of `/mv version -p`

1. Implement more mv world events for developer api -> Load, Unload, Clone, Regen, Remove

1. Implement config option to disable legacy aliases to reduce useless confusion in tab completion (i.e. disable alias of `/mvcreate` as you can easily use `/mv create` with tab completion support)

### Other Fixes

1. Fix double charge $$$ on entryfee when teleporting with portal

1. Fix deprecated EntityCreatePortalEvent with PortalCreateEvent (YAYY no more annoying console warning)

1. Clearer error messages throughout the plugin, from setting config value to world manager operations
