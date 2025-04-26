---
title: "Multiverse Inventories Changelog"
---

### Important Fixes

1. Fix player name change bug (finally!)

1. Fix bed and anchor respawn not applying properly on mc 1.21 and up

### Revamped

1. *Revamped* last location handling with more config options
   - Write last location when player quits (fixes edge case where player joins in a different world they left)
   - Clone last location object before storing it. Fixes edge case where location is modified elsewhere before it was saved to disk.
   - You can now DISABLE shares per group. For example, to disable last_location for lobby group, you can do `/mvinv adddisbledshares lobby last_location` command.
   - Implement new config option `apply-last-location-for-all-teleports`. When disabled, you can only use `/mv tp ll:worldname` to teleport to the player's last location.
   - Implement new config option `reset-last-location-on-death`

1. *Revamped* loading player data with many behind-the-scenes optimizations
   - Add cache stats and invalidation commands
   - Improve loading of playerdata with multithreaded file I/O

1. *Revamped* structure of config file, with mutliple new config options

### New Features

1. Entirely new slate of bulkedit features for Multiverse-Inventories
    ```
    /mvinv bulkedit globalprofile modify <property> <value> <players>
    /mvinv bulkedit globalprofile modify load-on-login false @all

    /mvinv bulkedit globalprofile clear <players> [--clear-all-playerprofiles]
    /mvinv bulkedit globalprofile clear benthecat10 --clear-all-playerprofiles

    /mvinv bulkedit playerprofile delete <sharable> <players> <groups|worlds> [profile-type] [--include-groups-worlds]
    /mvinv bulkedit playerprofile delete last_location @all group=survival @all --include-groups-worlds
    /mvinv bulkedit playerprofile delete ender_chest benthecat10 @all @all
    /mvinv bulkedit playerprofile delete ender_chest @all @all creative

    /mvinv bulkedit playerprofile clear <players> <groups|worlds> [profile-type] [--include-groups-worlds]
    /mvinv bulkedit playerprofile clear @all group=x;world=flat,test,test1 creative

    /mvinv bulkedit playerprofile migrate inventory-serialisation <nbt|bukkit>
    /mvinv bulkedit playerprofile migrate inventory-serialisation nbt 
    /mvinv bulkedit playerprofile migrate inventory-serialisation bukkit

    /mvinv bulkedit playerprofile migrate player-name <from-name|uuid> <to-name>
    /mvinv bulkedit playerprofile migrate player-name benji_0224 benthecat10
    ```

1. New give command to give items to a player for a specific world even when the player is not online: `/mv give <player> <world> [gamemode] <item> [amount]`

1. Add option to use paper's better ItemStack byte serialization.
   - Byte serialization will use minecraft's NBT format. NBT is safer for data migrations as it will use the built in data converter instead of bukkits dangerous serialization system.
   - This will fix various issues with the inventory data such as Skulker Box data loss, equip-sound crash, FoodEffect error, and more.
   - Inventory data will slowly migration as player joins the server
   - Reccommended to enable this option if you are using paper. Run the command: `/mvinv config use-byte-serialization-for-inventory-data true`
   - This option is only applicable on PAPERMC. Once you enable this option, you cannot change your server software back to SPIGOT or not your inventory data will be lost.
   - **PLEASE BACKUP PLAYERDATA BEFORE ENABLING THIS OPTION**

1. Add new sharables
   - max_health 
   - recipe (optional)
   - advancement (optional)
   - gamestats (optional)

1. Add `/mvinv config <name> [value]` command

1. Add luckperms context support for worldgroup (The context key is `mvinv:worldgroup`)

### Other Updates

1. Use async teleport for last_location

1. Implement more reliable method detemine bed and anchor respawn location (only works for 1.21 and up)

1. Add support for importing inventory data from PerWorldInventory plugin

1. Spectator gamemode has their own profile instead of defaulting to survival (Only applies when `enable-gamemode-share-handling` is true)

1. Inventory data now always saves on exit by default

1. Use `-` for multi-word subcommands, e.g. `/mvinv add-disabled-shares`

1. Improve itemstack empty check

