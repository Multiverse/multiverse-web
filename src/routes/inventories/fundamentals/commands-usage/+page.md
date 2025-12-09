---
title: Commands Usage
---

If you're looking for the [Multiverse-Core](/core/fundamentals/commands-usage), [Multiverse-Portals](/portals/fundamentals/commands-usage) or [Multiverse-NetherPortals](/netherportals/fundamentals/commands-usage) Command References, click the links!

## Index
1. [Add Disabled Shares Command](#Add-Disabled-Shares-Command)
2. [Add Shares Command](#Add-Shares-Command)
3. [Add Worlds Command](#Add-Worlds-Command)
4. [Bulkedit Global Profile Clear Command](#Bulkedit-Global-Profile-Clear-Command)
5. [Bulkedit Global Profile Modify Command](#Bulkedit-Global-Profile-Modify-Command)
6. [Bulkedit Player Profile Clear Command](#Bulkedit-Player-Profile-Clear-Command)
7. [Bulkedit Player Profile Delete Command](#Bulkedit-Player-Profile-Delete-Command)
8. [Bulkedit Player Profile Migrate Player Name Command](#Bulkedit-Player-Profile-Migrate-Player-Name-Command)
9. [Bulkedit Player Profile Migrate Inventory Serialisation Command](#Bulkedit-Player-Profile-Migrate-Inventory-Serialisation-Command)
10. [Cache Invalidate All Command](#Cache-Invalidate-All-Command)
11. [Cache Invalidate Player Command](#Cache-Invalidate-Player-Command)
12. [Cache Stats Command](#Cache-Stats-Command)
13. [Check Group Conflict Command](#Check-Group-Conflict-Command)
14. [Config Command](#Config-Command)
15. [Create Group Command](#Create-Group-Command)
16. [Delete Group Command](#Delete-Group-Command)
17. [Give Command](#Give-Command)
18. [Group Command](#Group-Command)
19. [Help Command](#Help-Command)
20. [Info Command](#Info-Command)
21. [Inventory Modify Command](#Inventory-Modify-Command)
22. [Inventory View Command](#Inventory-View-Command)
23. [List Command](#List-Command)
24. [Migrate Command](#Migrate-Command)
25. [Player Data Import Command](#Player-Data-Import-Command)
26. [Reload Command](#Reload-Command)
27. [Remove Disabled Shares Command](#Remove-Disabled-Shares-Command)
28. [Remove Shares Command](#Remove-Shares-Command)
29. [Remove Worlds Command](#Remove-Worlds-Command)
30. [Toggle Command](#Toggle-Command)

## Add Disabled Shares Command

#### Description:
Adds disabled shares to a group.

#### Usage:
```java
/mvinv add-disabled-shares <groupname> <share1,share2,...>
```

#### Examples:
- `/mvinv add-disabled-shares smpgroup last_location`

#### Permission:
`multiverse.inventories.adddisabledshares`

[↑ Back to Top ↑](#top)

## Add Shares Command

#### Description:
Adds one or more shares to a group.

#### Usage:
```java
/mvinv add-shares <groupname> <share1,share2,...>
```

#### Examples:
- `/mvinv add-shares smpgroup health,last_location`
- `/mvinv add-shares smpgroup all`

#### Permission:
`multiverse.inventories.addshares`

[↑ Back to Top ↑](#top)

## Add Worlds Command

#### Description:
Adds one or more worlds to a group. Worlds supports wildcards and regex. For more info on that, see [Advanced Group Config](/inventories/how-to/advanced-group-config).

#### Usage:
```java
/mvinv add-worlds <groupname> <world1,world2,...>
```

#### Examples:
- `/mvinv add-worlds smpgroup,Survival`
- `/mvinv add-worlds smpgroup,r=world_[0-9]_player`

#### Permission:
`multiverse.inventories.addworlds`

[↑ Back to Top ↑](#top)

## Bulkedit Global Profile Clear Command

:::note
Please backup your data before running this command as deleted data **CANNOT** be undone!
:::

#### Description:
Clears all global profile data for all players.

#### Usage:
```java
/mvinv bulkedit globalprofile clear <players> [--clear-all-playerprofiles]
```

##### Examples:
- `/mvinv bulkedit globalprofile clear benthecat10 --clear-all-playerprofiles`

#### Permission:
`multiverse.inventories.bulkedit`

[↑ Back to Top ↑](#top)

## Bulkedit Global Profile Modify Command

:::note
Please backup your data before running this command as deleted data **CANNOT** be undone!
:::

#### Description:
Modifies global profile data for one or more players.

#### Usage:
```java
/mvinv bulkedit globalprofile modify <property> <value> <players>
```

#### Examples:
- `/mvinv bulkedit globalprofile modify load-on-login false @all`

#### Permission:
`multiverse.inventories.bulkedit`

[↑ Back to Top ↑](#top)

## Bulkedit Player Profile Clear Command

:::note
Please backup your data before running this command as deleted data **CANNOT** be undone!
:::

#### Description:
Clears player profile data for one or more players.

#### Usage:
```java
/mvinv bulkedit playerprofile clear <players> <groups|worlds> [profile-type] [--include-groups-worlds]
```

#### Examples:
- `/mvinv bulkedit playerprofile clear @all group=x;world=flat,test,test1 @all`

#### Permission:
`multiverse.inventories.bulkedit`

[↑ Back to Top ↑](#top)

## Bulkedit Player Profile Delete Command

:::note
Please backup your data before running this command as deleted data **CANNOT** be undone!
:::

#### Description:
Deletes specific sharable data for one or more players.

#### Usage:
```java
/mvinv bulkedit playerprofile delete <sharable> <players> <groups|worlds> [profile-type] [--include-groups-worlds]
```

#### Examples:
- `/mvinv bulkedit playerprofile delete ender_chest benthecat10 @all @all`
- `/mvinv bulkedit playerprofile delete ender_chest @all @all creative`

#### Permission:
`multiverse.inventories.bulkedit`

[↑ Back to Top ↑](#top)

## Bulkedit Player Profile Migrate Player Name Command

:::note
Please backup your data before running this command as deleted data **CANNOT** be undone!
:::

#### Description:
Migrates player data from one player to another. By default, player name changes are detected automatically and no action is needed. This command is only needed in the rare case where automatic detection fails.

#### Usage:
```java
/mvinv bulkedit playerprofile migrate player-name <from-name|uuid> <to-name>
```

#### Examples:
- `/mvinv bulkedit playerprofile migrate player-name benji_0224 benthecat10`

#### Permission:
`multiverse.inventories.bulkedit`

[↑ Back to Top ↑](#top)

## Bulkedit Player Profile Migrate Inventory Serialisation Command

:::note
Please backup your data before running this command as deleted data **CANNOT** be undone!
:::

#### Description:
Migrates player inventory data from one serialisation format to another. Note that nbt format is only supported on PaperMC servers.

#### Usage:
```java
/mvinv bulkedit playerprofile migrate inventory-serialisation <nbt|bukkit>
```

#### Examples:
- `/mvinv bulkedit playerprofile migrate inventory-serialisation nbt`

#### Permission:
`multiverse.inventories.bulkedit`

[↑ Back to Top ↑](#top)

## Cache Invalidate All Command

#### Description:
Invalidates all cached player data.

#### Usage:
```java
/mvinv cache invalidate all
```

#### Permission:
`multiverse.inventories.cache.invalidate`

[↑ Back to Top ↑](#top)

## Cache Invalidate Player Command

#### Description:
Invalidates cached data for a specific player.

#### Usage:
```java
/mvinv cache invalidate player <player>
```

#### Examples:
- `/mvinv cache invalidate player benthecat10`

#### Permission:
`multiverse.inventories.cache.invalidate`

[↑ Back to Top ↑](#top)

## Cache Stats Command

#### Description:
Displays cache statistics.

#### Usage:
```java
/mvinv cache stats
```

#### Permission:
`multiverse.inventories.cache.stats`

[↑ Back to Top ↑](#top)

## Check Group Conflict Command

#### Description:
Checks for conflicts in group definitions. A conflict occurs when two or more groups contain the same world and has overlapping shares.

#### Usage:
```java
/mvinv check-group-conflict
```

#### Permission:
`multiverse.inventories.checkgroupconflict`

[↑ Back to Top ↑](#top)

## Config Command

#### Description:
View or modify configuration options.

#### Usage:
```java
/mvinv config set <option> [value]
```

#### Examples:
- `/mvinv config set use-optionals-for-ungrouped-worlds false`

#### Permission:
`multiverse.inventories.config`

[↑ Back to Top ↑](#top)

## Create Group Command

#### Description:
Creates a new Multiverse-Inventories group. For more information on groups and shares, please see the [Basic Usage Guide](/inventories/fundamentals/basic-usage).

#### Usage:
```java
/mvinv create-group <group-name> <world1,world2,...> <share1,share2,...>
```

#### Examples:
- `/mvinv create-group smpgroup smp,smp_nether,smp_the_end all`
- `/mvinv create-group adventuregroup adventure,adventure_nether inventory,experience,health`

#### Permission:
`multiverse.inventories.creategroup`

[↑ Back to Top ↑](#top)

## Delete Group Command

#### Description:
Deletes an existing Multiverse-Inventories group.

#### Usage:
```java
/mvinv delete-group <group-name>
```

#### Examples:
- `/mvinv delete-group smpgroup`

#### Permission:
`multiverse.inventories.deletegroup`

[↑ Back to Top ↑](#top)

## Give Command

#### Description:
Gives a player the specified item for a particular world or group. This commands works even if the player is offline or not in that specific world. A gamemode needs to be specified if `gamemode-share-handling` is enabled in the config.

#### Usage:
```java
/mvinv give <player> <world> [gamemode] <item> [amount]
```

#### Examples:
- `/mvinv give benthecat10 Survival diamond`
- `/mvinv give benthecat10 Survival diamond 100`

#### Permission:
`multiverse.inventories.give`

[↑ Back to Top ↑](#top)

## Group Command 

#### Description:
**This is the one command to rule them all!**  This command is used to **create**, **edit**, and **delete** Multiverse-Inventories groups.  It is very easy to use.  Simply type the command and you will be prompted for additional input for anything you'd like to do.  No complicated arguments; Just simple.

#### Usage:
```java
/mvinv group
```

#### Permission:
`multiverse.inventories.group`

[↑ Back to Top ↑](#top)

## Help Command

#### Description:
Displays help information for Multiverse-Inventories commands.

#### Usage:
```java
/mvinv help [page]
```

#### Examples:
- `/mvinv help`
- `/mvinv help 2`

#### Permission:
`multiverse.inventories.help`

[↑ Back to Top ↑](#top)

## Info Command

#### Description:
Displays information about a world or group. If a world name and group name are the same, both will be displayed.

#### Usage:
```java
/mvinv info <worldname|groupname>
```

#### Examples
- `/mvinv info Survival`
- `/mvinv info default`

#### Permission:
`multiverse.inventories.info`

[↑ Back to Top ↑](#top)

## Inventory Modify Command

#### Description:
GUI panel in-game to modify a player's inventory for a specific world or group.

#### Usage:
```java
/mvinv modify <player> <world>
```

#### Examples:
- `/mvinv modify benthecat10 Survival`

#### Permission:
`multiverse.inventories.view.modify`

[↑ Back to Top ↑](#top)

## Inventory View Command

#### Description:
GUI panel in-game to view a player's inventory for a specific world or group.

#### Usage:
```java
/mvinv view <player> <world>
```

#### Examples:
- `/mvinv view benthecat10 Survival`

#### Permission:
`multiverse.inventories.view`

[↑ Back to Top ↑](#top)

## List Command

#### Description:
Displays a list of groups.

#### Usage:
`/mvinv list`

#### Permission:
`multiverse.inventories.list`

[↑ Back to Top ↑](#top)

## Migrate Command

:::important
This command requires the [Multiverse-InventoriesImporter](https://modrinth.com/plugin/multiverse-inventoriesimporter) plugin to be installed.
:::

#### Description:
Migrate data from MultiInv, WorldInventories, or PerWorldInventory. For more information, see the [Import/Migrate Player Data Guide](/inventories/how-to/import-playerdata).

#### Usage:
```java
/mvinv migrate <MultiInv|WorldInventories|PerWorldInventory>
```

#### Examples:
- `/mvinv migrate MultiInv`   
- `/mvinv migrate WorldInventories`

#### Permission:
`multiverse.inventories.migrate`

[↑ Back to Top ↑](#top)

## Player Data Import Command

:::important
This command requires the [Multiverse-InventoriesImporter](https://modrinth.com/plugin/multiverse-inventoriesimporter) plugin to be installed.
:::

#### Description:
Imports player data from vanilla playerdata folder of a world. For more information, see the [Import/Migrate Player Data Guide](/inventories/how-to/import-playerdata).

#### Usage:
```java
/mvinv playerdata import <world>
```

#### Examples:
- `/mvinv playerdata import Survival`

#### Permission:
`multiverse.inventories.importplayerdata`

[↑ Back to Top ↑](#top)

## Reload Command

#### Description:
Reloads configuration files and clears all cache. Do this when you made changes to `config.yml` or `groups.yml`.

#### Usage:
```java
/mvinv reload
```

#### Permission:
`multiverse.inventories.reload`

[↑ Back to Top ↑](#top)

## Remove Disabled Shares Command

#### Description:
Removes disabled shares from a group.

#### Usage:
```java
/mvinv remove-disabled-shares <groupname> <share1,share2,...>
```

#### Examples:
- `/mvinv remove-disabled-shares smpgroup last_location`

#### Permission:
`multiverse.inventories.removedisabledshares`

[↑ Back to Top ↑](#top)

## Remove Shares Command

#### Description:
Removes shares from a group.

#### Usage:
```java
/mvinv remove-shares <groupname> <share1,share2,...>
```

#### Examples:
- `/mvinv remove-shares smpgroup last_location`

#### Permission:
`multiverse.inventories.removeshares`

[↑ Back to Top ↑](#top)

## Remove Worlds Command

#### Description:
Removes a world from a group.

#### Usage:
```java
/mvinv remove-worlds <groupname> <world1,world2,...>
```

#### Examples:
- `/mvinv remove-worlds smpgroup Survival`

#### Permission:
`multiverse.inventories.removeworlds`

[↑ Back to Top ↑](#top)

## Toggle Command

#### Description:
Toggles an optional sharable on or off. See the [Shares List](/inventories/reference/shares-list) for a list of optional shares.

#### Usage:
```java
/mvinv toggle <optional-share>
```

#### Examples:
- `/mvinv toggle last_location`

#### Permission:
`multiverse.inventories.toggle`

[↑ Back to Top ↑](#top)
