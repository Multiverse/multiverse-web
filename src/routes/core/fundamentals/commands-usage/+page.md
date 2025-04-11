---
title: "Command Reference - Core"
---

# Multiverse Command Reference

:::caution[Warning]
This page is for the new MV5 version.

For older mv4 versions, check our github wiki: https://github.com/Multiverse/Multiverse-Core/wiki

:::

This page is a reference for Core Multiverse commands. For other command reference pages, see below:
* [Multiverse-Portals](/portals/fundamentals/commands-usage) 
* [Multiverse-NetherPortals](/netherportals/fundamentals/commands-usage) 
* [Multiverse-Inventories](/inventories/fundamentals/commands-usage)
* [Permissions List](/core/reference/permissions-list)

## Index

[Introduction](#Introduction)

- [Anchor Set Command](#Anchor-Set-Command)
- [Anchor List Command](#Anchor-List-Command)
- [Anchor Delete Command](#Anchor-Delete-Command)
- [Check Command](#Check-Command)
- [Clone Command](#Clone-Command)
- [Config Command](#Config-Command)
- [Confirm Command](#Confirm-Command)
- [Coordinate Command](#Coordinate-Command)
- [Create Command](#Create-Command)
- [Debug Command](#Debug-Command)
- [Delete Command](#Delete-Command)
- [Dumps Command](#Dumps-Command)
- [Entity Spawn Config Info Command](#Entity-Spawn-Config-Info-Command)
- [Entity Spawn Config Modify Command](#Entity-Spawn-Config-Modify-Command)
- [Gamerule List Command](#Gamerule-List-Command)
- [Gamerule Set Command](#Gamerule-Set-Command)
- [Gamerule Reset Command](#Gamerule-Reset-Command)
- [Help Command](#Help-Command)
- [Import Command](#Import-Command)
- [Info Command](#Info-Command)
- [List Command](#List-Command)
- [Modify Command](#Modify-Command)
  - [Set](#Modify-Command-(Set))
  - [Add](#Modify-Command-(Add-Remove))
  - [Remove](#Modify-Command-(Add-Remove))
  - [Clear](#Modify-Command-(Clear))
- [Purge Entities Command](#Purge-Entities-Command)
- [Purge All Entities Command](#Purge-All-Entities-Command)
- [Regen Command](#Regen-Command)
- [Reload Command](#Reload-Command)
- [Remove Command](#Remove-Command)
- [Set Spawn Command](#Set-Spawn-Command)
- [Spawn Command](#Spawn-Command)
- [Teleport Command](#Teleport-Command)
- [Unload Command](#Unload-Command)
- [Who Command](#Who-Command)
- [Who All Command](#Who-All-Command)

[↑ Back to Top ↑](#top)

## Introduction

There is an in-game help system! To access this, type `/mv`. This section will break down how to read commands.

### Command Case

Whenever reading this wiki or the in-game [`/mv`](#help) help, items in **ALL CAPS** should be replaced with a variable. Items in lowercase should be typed exactly how they appear.

### Parameters and Flags

Using a basic command is frequently not enough for what you may be trying to do. Parameters and flags are added to the ends of commands to provide additional specific instructions. Parameters can be required or optional - when a command example is written out, items inside square braces (`[]`) are **OPTIONAL** where items inside (`<>`) are **REQUIRED**.

Many commands in Multiverse use flags, these can be one or two dashes. Two dash flags are whole words (e.g: `--filter`) and one dash flags are shorthand versions of the same thing (e.g: `-f`). Flags are usually optional, allowing for specifying a command further (e.g. adding a generation seed to a command to generate a new world). Flags frequently have optional or required parameters of their own.

There are two flags that are frequently used: `--filter` and `--page`. These are used for filtering and selecting the page respectively of a paginated command (a command that returns multiple pages). Note that pagination does not apply when running from the console. 

### Simple command example

This is a simple command, which can be quickly broken down into parts:

[`/mv info [WORLD]`](#Information-Command)

* The first part of this command `/mv` specifies the Multiverse plugin.
* The second part of this command `info` is the [information command](#Information-Command), used to get information about a world.
* The third part of this command `[WORLD]` is an OPTIONAL parameter, meaning you could type [`/mv info`](#Information-Command) **or** [`/mv info world`](#Information-Command). The command may have different effects with or without its params. For example, `/mv info world_the_end` will provide information about The End world. If you are currently standing in The End, `/mv info` will provide that info without needing to specify the param.

### Complex command example

Let's look at the most complex example:  
_NOTE: This is the most complex command in MV2 and in order to use it correctly, please refer to the [Create Command](#Create-Command)._

[`/mv create <NAME> <ENVIRONMENT> [--seed <SEED> --generator <generator[ID]> --world-type <WORLDTYPE> --adjust-spawn --no-structures --biome <BIOME>]`](#Create-Command)

* `/mv` specifies the Multiverse plugin.
* `create` is the [create command](#Create-Command), used to create a new world.
* `<NAME>` is a REQUIRED parameter. You must provide a name for the world.
* `<ENVIRONMENT>` is a REQUIRED parameter. You must specify whether it is a normal, nether, or the_end world.
* `[--seed <SEED> ... --biome <BIOME>]` is an OPTIONAL set of flags that can be used to modify the base commmand.

For example, if you want to use the "gargamel" [seed](/core/fundamentals/world-properties#Seed) you must add `--seed gargamel` to the command string. If you want a [generator](/core/fundamentals/world-properties#Generators) like "BukkitFullOfMoon", you must add `--generator BukkitFullOfMoon`. The order of flags does _not_ matter, and all of them are optional. Full examples of this command are located at the [Create Command reference](#Create-Command). 

[↑ Back to Top ↑](#top)

## Anchor Set Command

### Description

Any location you frequently plan to teleport to or point to as a destination can be turned into an anchor. First use the `/mv anchor set <NAME>` command to create an anchor, then use the new anchor name in any command that takes a destination. 

### Usage

```java
/mv anchor set <NAME> [LOCATION]
```

- `<NAME>`: The name of the anchor. If the anchor already exists, it location will be overwritten.
- `[LOCATION]`: The location of the anchor. Must be specified if running from the console.

### Examples

- `/mv anchor set myanchor` - Creates the anchor with the name `myanchor` at your current location. 
- `/mv anchor set coolanchor cool:1,2,3:10:12` - Creates the anchor with the name `coolanchor` at location world `cool`, x: 1, y: 2, z: 3, pitch: 10, yaw: 12.

Example of teleporting to an anchor:
- `/mvtp a:myanchor` - Teleports the user to the anchor named `myanchor`. For more teleport commands, see [Teleport Command](#Teleport-Command).

### Permission

`multiverse.core.anchor.create`  

For teleport permission of anchors `/mvtp a:<anchorname>`, see [Anchor Destination](/core/reference/destinations/#Anchor-Destinations).

[↑ Back to Top ↑](#top)

## Anchor List Command

### Description

List all anchors and their corresponding locations.

### Usage

```java
/mv anchor list [--page <PAGE> --filter <FILTER>]
```

- `--page <PAGE>`: The page of the list to show. Defaults to 1.
- `--filter <FILTER>`: The filter to apply to the list.

### Permission

`multiverse.core.anchor.list`

[↑ Back to Top ↑](#top)

## Anchor Delete Command

### Description

Deletes an existing anchor. Note there is no way to undo this action.

### Usage

```java
/mv anchor delete <ANCHORNAME>
```

- `<ANCHORNAME>`: The name of the anchor to delete. Command will fail if anchor does not exist.

### Examples

- `/mv anchor delete coolanchor` - Deletes the anchor with the name `coolanchor`. 

### Permission

`multiverse.core.anchor.delete`

[↑ Back to Top ↑](#top)

## Check Command

### Description

Checks if a player is allowed to teleport to a certain destination.

### Usage

```java
/mv check <destination>
```

- `<destination>`: The destination to check.

### Examples

- `/mv check cool:1,2,3:10:12` - Checks if the player is allowed to teleport to location world `cool`, x: 1, y: 2, z: 3, pitch: 10, yaw: 12.

### Permission

`multiverse.core.check`

[↑ Back to Top ↑](#top)

## Clone Command

### Description

Copies a world directory to another directory and all its configuration. Allows you to copy your world to another directory for a backup or to simply have two of the world for whatever reason you'd like.

### Usage

```java
/mv clone <world> <new-world-name> [--reset-world-config] [--reset-gamerules] [--reset-world-border]
```

- `<world>`: The world to clone. It must be an existing multiverse world.
- `<new-world-name>`: The name of the new world
- `--reset-world-config`: Resets all the [world properties](/core/fundamentals/world-properties) associated with the new world
- `--reset-gamerules`: All gamerules in the new world will be at their default values
- `--reset-world-border`: The world border will be gone in the new world

### Examples

- `/mv clone world world_backup` - Copies the world `world` to `world_backup`
- `/mv clone myworld_nether myworld_nether_backup` - Copies the world `myworld_nether` to `myworld_nether_backup`
- `/mv clone my_cloned_world my_cloned_world_now_cloned --reset_gamerules --reset_world_border --reset_world_config` - Copies the world `my_cloned_world` to `my_cloned_world_now_cloned` and resets everything in `worlds.yml`, gamerules and the world border

### Permission

`multiverse.core.clone`

[↑ Back to Top ↑](#top)

## Config Command

### Description

Changes the `config.yml` properties. See the [configuration documentation](/core/reference/configuration-file) for more information.

### Usage

```java
/mv config <property> <value>
```

- `<property>`: The property to change.
- `<value>`: The value to set the property to.

### Examples

- `/mv config confirm-mode disable_command_blocks` - Changes the `confirm-mode` to `disable_command_blocks` in `config.yml`

### Permission

`multiverse.core.config`

[↑ Back to Top ↑](#top)

## Confirm Command

### Description

Confirms an action that could destroy the life, the universe and everything. This command will confirm a requested action. See the [`/mv delete`](#delete-Command) command for an example use. If you fire up your server and type `/mv confirm`, nothing will happen.

See also: [Delete Command](#delete-Command)

### Usage

```java
/mv confirm [otp]
```

- `[otp]`: The OTP to confirm. This may not be required depending on the `confirm-mode` set in `config.yml`.

### Examples

- `/mv confirm 431` - Confirms an action with the OTP `431`

### Permission

`multiverse.core.confirm`

[↑ Back to Top ↑](#top)


## Coordinate Command

### Description

Displays your or another player's current location info. It displays general location info:

- World
- [World alias](/core/fundamentals/world-properties/#Alias)
- [World scale](/core/fundamentals/world-properties/#Scale)
- Coordinates
- Facing direction

### Usage

```java
/mv coordinates [player]
```

- `[player]`: The player to get the location of. Must be specified if running from the console.

### Examples

- `/mv coordinates benthecat10` - Displays the coordinates of the player `benthecat10`

### Permission

`multiverse.core.coord`

[↑ Back to Top ↑](#top)


## Create Command

### Description

The create command allows you to add new worlds to your server. Each world has many properties that you can edit and tweak. Please see the [World Properties](/core/fundamentals/world-properties) page for information on each of these settings. In addition, you can modify worlds **in game** by using the [`/mv modify`](#Modify-Command) command. Please see the appropriate section below for [Seeds](/core/fundamentals/world-properties#seeds) or [Custom Generators](/core/fundamentals/world-properties#generators).

### Usage

```java
/mv create <name> <environment> [--seed <seed>] [--generator <generator[:id]>] [--world-type <worldtype>] [--adjust-spawn] [--no-structures] [--biome <biome>]
```

- `<name>`: The name of the new world
- `<environment>`: The environment of the new world. Must be one of `normal`, `nether` or `the_end`.
- `--seed <seed>`: The world seed to give to the generator
- `--generator <generator[:id]>`: The [custom generator](/core/reference/custom-generator-plugins) to use
- `--world-type <worldtype>`: The type of the new world, can be one of the below.
  - [amplified](https://minecraft.wiki/w/Amplified)
  - [flat](https://minecraft.wiki/w/Superflat)
  - [large_biomes](https://minecraft.wiki/w/Large_Biomes)
  - normal
- `--no-adjust-spawn`: Sets the [Adjust Spawn](/core/fundamentals/world-properties#Adjust-Spawn) world property
- `--no-structures`: Set this flag to disable structures from spawning
- `--biome <biomeprovider[:id]>`: Sets the biome provider for the world.

### World Name and Environment

When you are going to create a new world you MUST specify a name and environment. Your world names **CANNOT** have spaces in world names, use the [Alias Feature](/core/fundamentals/world-properties#Alias) for that.

### Seeds

You can create a world with a custom seed by adding `--seed SEEDNAME` after the 2 required params. Here is an example that creates the famed `gargamel` world and names it `mountain_world`:

`/mv create mountain_world normal --seed gargamel`

### World Types

World types are like generators, but baked into Minecraft itself! Currently, there are only [amplified](https://minecraft.wiki/w/Amplified), [flat](https://minecraft.wiki/w/Superflat), [large_biomes](https://minecraft.wiki/w/Large_Biomes) and normal world types. To use a world type, simply use the `--world-type` flag, here is an example for a [flat](https://minecraft.wiki/w/Superflat) world. These are only effective on `normal` environment worlds.
`/mv create flat_world normal --world-type flat`

### Biome

Multiverse have built-in support for single biome alike to the option in [Vanilla](https://minecraft.wiki/w/Single_biome). The flag is `--biome @single:<biome>`. For a full list of available biomes, see [Biome List](https://jd.papermc.io/paper/1.21.1/org/bukkit/block/Biome.html).

### Generators

Multiverse supports Custom Generators. What does this mean? We support any plugin that makes use of the Bukkit custom generator feature. If an author has implemented their own style that does NOT use the custom generator method [described here](http://forums.bukkit.org/threads/22795/), it may not work with MV. We will try and keep an updated page of [Custom Generator Plugins](/core/reference/custom-generator-plugins/).

Once you've found a plugin you want to use, copy the jar of that plugin to your plugins folder. Then all that's left to do is type a single command:  
(For this example I've decided to use [BukkitFullOfMoon](https://github.com/Dinnerbone/BukkitFullOfMoon) which will generate a cratered moon world by @Dinnerbone).

`/mv create moon normal --generator BukkitFullOfMoon`

The `BukkitFullOfMoon` above is the plugin name. This plugin only has one generator, and it's defined correctly, so the `:GENID` isn't needed. Some plugins may contain multiple generators, in which case you would type this: (This next one I'm making up entirely...)

`/mv create land_lake normal --generator WaterWorlds:Lakes`

OR

`/mv create hell_lake normal --generator WaterWorlds:LavaLakes`

### A note about spaces in world names

You should know that if you decide to use spaces in your world name that whenever people want to use [`/mv tp`](#Teleport-Command), [`/mv modify`](#Modify-Command) or any command that takes the world name as a param, they will have to surround the name in quotes, like so

`/mv tp "My world name with spaces"`

`/mv tp My world name with spaces` will NOT work.

### Examples

- `/mv create my_world normal`  
- `/mv create my_hell nether`  
- `/mv create my_cloud_world --generator SkyLandsPlus normal`  
- `/mv create flat_world normal --world-type flat`  
- `/mv create My-Seed-World normal --seed gargamel`
- `/mv create moon normal --generator BukkitFullOfMoon`  
- `/mv create custom-world-with-a-generator-and-an-ID normal --generator BukkitFullOfMoon:Dinnerbone`  
- `/mv create custom-generator-world-with-seed normal --generator BukkitFullOfMoon:Dinnerbone -s gargamel`
- `/mv create example normal --generator "BananaGen:hilly,tscale=35.0,terrainheight=15.0,notorches"`

### Permission

`multiverse.core.create`

[↑ Back to Top ↑](#top)


## Debug Command

### Description

Provides detailed information on what the plugin is doing in console. Helpful for permission issues or destination issues.

0 - Off  
1 -  
2 -  
3 - All details

### Usage

```java
/mv debug [level]
```

- `[level]` - 0, 1, 2 or 3

### Examples

- `/mv debug` - Gets the current debug level
- `/mv debug 0` - Turns off debug mode
- `/mv debug 3` - Turns on debug mode to level 3

### Permission

`multiverse.core.debug`

[↑ Back to Top ↑](#top)

## Delete Command

### Description

Unloads a world from the Bukkit server, removes it from the MV configs **AND** _DELETES_ the world folder. This command will destroy the life, universe and everything associated with the world you pass as a parameter. For this reason, this command requires [`/mv confirm`](#confirm-Command).

You now have 30 seconds to type [`/mv confirm [otp]`](#Confirm-Command) with the correct OTP or the world will **NOT** be deleted.

### Usage

```java
/mv delete <world> [--remove-players]
```

- `--remove-players` - Remove players from the world first. If this flag is not specified and players are still in the world then the command will error.

### Examples

`/mv delete myworld` - Deletes the world `myworld`

### Permission

`multiverse.core.delete`

[↑ Back to Top ↑](#top)


## Dumps Command

### Description

Outputs your server logs and configuration files to a paste service to allow for easy sharing. This is mainly used for support. Please send the links generated within your support ticket.

### Usage

```java
/mv dumps [--logs <mclogs | append>] [--upload <pastesdev | pastegg>] [--paranoid]
```

- `--logs` - Paste service to use for full server logs to dump. Default is `mclogs`.
- `--upload` - Paste service to use for configs. Default is `pastesdev`.
- `--paranoid` - Do not upload full server logs

### Permission

`multiverse.core.dumps`

[↑ Back to Top ↑](#top)

## Entity Spawn Config Info Command

### Description

Lists the entity spawn config for a specific world. This uses SpawnCategory.

Types of category:
- MONSTER: eg: Witch, Zombie, Creeper, etc.
- ANIMAL: eg: Strider, Cow, Turtle, etc.
- WATER_ANIMAL: eg: Squid or Dolphin.
- WATER_AMBIENT: eg: Cod, PufferFish, Tropical Fish, Salmon, etc.
- WATER_UNDERGROUND_CREATURE: eg: Glow Squid.
- AMBIENT: eg: Bat.
- AXOLOTL
- MISC: eg: ArmorStand, Boat, etc.

### Usage

```java
/mv entity-spawn-config info [world] [--page <page>] [--filter <filter>]
```

### Permission

`multiverse.core.entityspawnconfig.info`

[↑ Back to Top ↑](#top)

## Entity Spawn Config Modify Command

### Description

Modifies the entity spawn config for a specific world. The current properties are:

- `spawn` - boolean: should spawn entities of this category or not.
- `tick-rate` - number: how many ticks there are between attempts to spawn entities of this category.
- `spawn-limit` - number: how many entities of this category can spawn at once.
- `exceptions` - array: list of entity types that should not spawn of this category. Or if the `spawn` property is set to `false`, list of entity types that should spawn of this category.

### Usage

```java
/mv entity-spawn-config modify [world] <spawn-category> <set|add|reset|remove> <property> [value]
```

### Permission

`multiverse.core.entityspawnconfig.modify`

[↑ Back to Top ↑](#top)

## Gamerule List Command

### Description

Lists the vanilla game rules values that is configured for a specific world. For more info on what each gamerule does, see [https://minecraft.fandom.com/wiki/Game_rule](https://minecraft.fandom.com/wiki/Game_rule).

### Usage

```
/mv gamerule list [world] [--page <number>] [--filter <string>]
```

- `[world]` - World name
- `--page` - Page number
- `--filter` - Filter string

### Examples

- `/mv gamerule list`  
- `/mv gamerule list world1 --page 2 --filter do`

### Permission

`multiverse.core.gamerule.list`

[↑ Back to Top ↑](#top)

## Gamerule Set Command

### Description

Sets a world's vanilla game rules value. To get a full list of available gamerules for the world use [`/mv gamerule list`](#Gamerule-List-Command). For more info on what each gamerule does, see [https://minecraft.fandom.com/wiki/Game_rule](https://minecraft.fandom.com/wiki/Game_rule).

### Usage

```java
/mv gamerule set <gamerule> <value> [world]
```

### Examples

- `/mv gamerule set doDaylightCycle false world1` - Sets the world1's doDaylightCycle gamerule to false

### Permission

`multiverse.core.gamerule.set`

[↑ Back to Top ↑](#top)

## Gamerule Reset Command

### Description

Resets a world's vanilla game rules value to it's default value. For more info on what each gamerule does, see [https://minecraft.fandom.com/wiki/Game_rule](https://minecraft.fandom.com/wiki/Game_rule).

### Usage

```java
/mv gamerule reset <gamerule> [world]
```

### Examples

- `/mv gamerule reset doDaylightCycle world1` - Resets the world1's doDaylightCycle gamerule to it's default value

### Permission

`multiverse.core.gamerule.set`

[↑ Back to Top ↑](#top)

## Help Command

### Description

Displays an in game help menu for Multiverse. This will only show users commands they have access to. Use the optional integer parameter to indicate which page you would like to view.

The help command now supports searching! This means if you type `/mv help del` you will see a list of all commands whose `name`, `description`, `alias(s)` or `usage` contain 'del'. These results may be paged, depending on how long your search string, so to see another page of a search simply do: `/mv help del 2`.

**NOTE:** When searching, if you try: `/mv delete` you will see the syntax for the **Delete Command**. This is because you have hit the nail on the head with your search: you typed the exact name of a command!

![Example use of the Help command when an OP](https://user-images.githubusercontent.com/8557785/63812440-069a6a00-c8f0-11e9-9264-29e4082ba8cd.png)
Here is an example use of the Help command while given OP status. This example also has [Multiverse-Portals](/portals/fundamentals/commands-usage) and [Mutliverse-NetherPortals](/netherportals/fundamentals/commands-usage) installed, which is why there are 5 pages.

### Usage

`/mv help [command] [page]`

### Permission

`multiverse.help`

[↑ Back to Top ↑](#top)

## Import Command

### Description

The import command is almost identical to the create command apart from the fact that it is used to import a world folder that already exists. Since the world already exists, you cannot apply a new seed to it, however currently you **MUST** provide the correct environment **AND** Generator for the imported world. If you do not, bad things will happen to your world.

### Usage

```java
/mv import <name> <environment> [--generator <generator[:id]>] [--adjust-spawn] [--biome <biome>]
```

- `<name>`: The name of the world to import. Ensure it matches the folder name on your server files.
- `<environment>`: The environment of the world.
- `--generator`: Specify the generator previously used for the world. 
- `--no-adjust-spawn`: Sets the [Adjust Spawn](/core/fundamentals/world-properties#Adjust-Spawn) world property
- `--biome`: Specify the biome provider used previously for the world.

### Examples

`/mv import my_world normal`  
`/mv import my_hell nether`  
`/mv import my_cloud_world skylands`  
`/mv import moon normal --generator BukkitFullOfMoon`
`/mv import one_biome normal --biome @single:plains`

### Permission

`multiverse.core.import`

[↑ Back to Top ↑](#top)

## Info Command

### Description

Displays information about the world you're in or the world you pass in. You can specify a world to look at in particular if required.

This command is mainly for debugging. Be that by the developers of Multiverse or you!

![Page 1 of the Information Command](/core/command-reference/mvinfo.png)

### Usage

```java
/mv info [world] [--page <number>] [--filter <string>]
```

### Examples

- `/mv info`
- `/mv info world`

### Permission

`multiverse.core.info`

[↑ Back to Top ↑](#top)

## List Command

### Description

The list command will only show you the worlds that you have access to enter. For example, if you are blacklisted in `sky` but not in `world` and `world*nether`, when you type `/mv list` you would see:

```
====[ Multiverse World List ]====
world - normal
world_nether - NETHER
```

This allows you to have worlds that are completely unknown to people. Keep in mind though, if you're in a world that someone else cannot view, and you chat from it, your chat prefix would be of that world. Here is an example of a world listing.

![Example World List](/core/command-reference/example-world-list.png)

:::note[Note]
To get colored worlds, you will need to use the [world alias feature](/core/fundamentals/world-properties#Alias).
:::

### Usage

```java
/mv list [--raw --page <number> --filter <string>]
```

- `--raw`/`-r` - Shows world names instead of aliases
- `--page`/`-p` - Page number
- `--filter`/`-f` - Filter string

### Permission

`multiverse.core.list.worlds`

[↑ Back to Top ↑](#top)

## Modify Command

### Description

The modify command has been documented as 4 separate sections for easier documentation. Please see the links below.

### Usage

[`/mv modify set ...`](#Modify-Command-(Set))  
[`/mv modify add ...`](<Modify-Command-(Add-Remove))  
[`/mv modify remove ...`](#Modify-Command-(Add-Remove))  
[`/mv modify reset ...`](#Modify-Command-(Reset))

[↑ Back to Top ↑](#top)

## Modify Command (Set)

### Description

The modify command lets you set the [properties](/core/fundamentals/world-properties) for your Multiverse worlds in game without needing to ever edit a config file. The `set` command sets a non-array value. An example would be turning animal spawning on, or setting the world scale to 2. The PROPERTY value that is required for this command must be one of the values listed on the [properties page](/core/fundamentals/world-properties). If you do not specify a world, the current world will be used. A world is **required** from the console.

### A note about animals and monsters

The `animals` and `monsters` values, when used with `set`, will set the overall spawn behavior of animals/monsters. If you have any monsters in the `monsters` list and you `/mv modify set monsters true` you're saying: "I want monsters to spawn, **except** the ones in the monsters list"

**See also:** [`/mv modify [world] <add/remove>`](#Modify-Command-(Add-Remove)) and [`/mv modify [world] reset`](#Modify-Command-(Reset))

### Usage

```java
/mv modify [world] set <property> <value>
```

### Examples

- `/mv modify world set pvp false`
- `/mv modify world_extreme set difficulty hard`
- `/mv modify death_world set respawn-world respawn_world`

### Permission

`multiverse.core.modify`

[↑ Back to Top ↑](#top)

## Modify Command (Add/Remove)

### Description

The modify command lets you add or remove values in each world without needing to ever edit a config file. The `add` and `remove` sub-Commands allow you to add and remove values from variables that contain lists, such as world blacklists. If you do not specify a world, the current world will be used. A world is **required** from the console.

**See also:** [`/mv modify [world] set`](#Modify-Command-(Set))

### Usage

```java
/mv modify [world] <add|remove> <property> <value>
```

### Variables you can add to or remove from

- worldblacklist - String: What worlds can you not go to from here.

See the [World Properties](/core/fundamentals/world-properties/#World-Blacklist) page for more detail on these variables.

The second item is the type required. This means you cannot do `/mv modify add world-blacklist world2`

**See also:** [`/mvmodify set`](<#Modify-Command-(Set)>) and [`/mvmodify reset`](<#Modify-Command-(Reset)>)

### Examples

- `/mvmodify add creeper monsters`  
- `/mvmodify remove sheep animals world*nether`

### Permission

`multiverse.core.modify`

[↑ Back to Top ↑](#top)

## Modify Command (Reset)

### Description

Resets a property's value back to the default. If you do not specify a world, the current world will be used. A world is **required** from the console.

**See also:** [`/mv modify set`](#Modify-Command-(Set)) and [`/mv modify <add|remove>`](#Modify-Command-(Add-Remove))

### Usage

```java
/mv modify [world] reset <property>
```

### Examples

- `/mv modify reset world-blacklist`  
- `/mv modify world_nether reset respawn-world`

### Permission

`multiverse.core.modify`

[↑ Back to Top ↑](#top)

## Purge Entities Command

### Description

Purges the entities that are disallowed based on the `entity-spawn-config` settings. See the [Entity Spawn Config](/core/fundamentals/commands-usage/#Entity-Spawn-Config-Info-Command) page for more information.

### Usage

```java
/mv purge-entities [world]
```

### Permission

`multiverse.core.purge`

[↑ Back to Top ↑](#top)

## Purge All Entities Command

### Description

Removes all entities from the world, or only spawn categories specified.

### Usage

```java
/mv purge-all-entities [world] [spawn-categories]
```

- `[spawn-categories]` - Comma separated list of spawn categories to purge. **If not specified, all spawn categories will be purged.**

### Permission

`multiverse.core.purgeall`

[↑ Back to Top ↑](#top)

## Regen Command

### Description

Regenerate your world to where **EVERYTHING** built gets destroyed and regenerated. If the `--seed` argument is provided, a new seed will be used. Otherwise the world will be regenerated using the same seed.

### Usage

```java
/mv regen <world> [--seed [value]] [--reset-world-config] [--reset-gamerules] [--reset-world-border] [--remove-players]
```

- `--seed [value]` Set the new seed to use. If a seed value is not specified then a random seed will be used
- `--reset-world-config` Everything in `worlds.yml` associated with the world will be wiped
- `--reset-gamerules` Gamerules will go back to their vanilla defaults
- `--reset-world-border` The world border will go back to the vanilla default
- `--remove-players` Remove players from the world first. If this flag is not specified and players are still in the world then the command will error

### Examples

- `/mv regen world`
- `/mv regen world --seed`
- `/mv regen world --seed 11546315`

### Permission

`multiverse.core.regen`

[↑ Back to Top ↑](#top)

## Reload Command

### Description

Reloads any Multiverse-Core as well as **any official Multiverse plugin** configs. Any values currently loaded into memory will be replaced with the config values. These configs also get reloaded on plugin load/server restart, so there is no need to use if after one of those. Any value in `worlds.yml` can be modified in game by using the [`/mv modify`](#Modify-Command) command and that is the recommended way to go about doing so.

### Usage

```java
/mv reload
```

### Permission

`multiverse.core.reload`

[↑ Back to Top ↑](#top)

## Remove Command

### Description

Unloads a world from the Bukkit server and removes it from the Multiverse `worlds.yml`. It will **NOT** delete the world folder.

**See also:** [`/mv unload`](#unload-Command) and [`/mv delete`](#delete-Command)

### Usage

```java
/mv remove <world> [--remove-players]
```

- `<world>` - World name
- `--remove-players` - Remove players from the world first. If this flag is not specified and players are still in the world then the command will error

### Examples

- `/mv remove world2 --remove-players`

### Permission

`multiverse.core.remove`

[↑ Back to Top ↑](#top)

## Set Spawn Command

### Description

The set spawn command does exactly what it sounds like. You can walk to where you want players to spawn, type `/mv setspawn` and it's set. To go to the spawn you can use [`/mv spawn`](#Spawn-Command). If you would like to run this from the console or specify a location anyway just add your location in the format: `[x],[y],[x],[pitch],[yaw]`. Pitch and yaw are optional and will default to `0,0`

### Usage

```java
/mv setspawn [location]
```

- `[location]` - In the format: `[x],[y],[z],[pitch],[yaw]`. Example: `10,64,100,90,180`

### Examples

- `/mv setspawn`
- `/mv setspawn 0,0,0`
- `/mv setspawn 10,64,100,90,180`

### Permission

`multiverse.core.spawn.set`

### Details

[↑ Back to Top ↑](#top)

## Spawn Command

### Description

Allows you to teleport yourself (or another player) to their own current world's spawn. If you want to teleport a player to a different world or different location within a world please see [`/mv tp`](#Teleport-Command). This command does tell the teleportee who teleported them, even if it was the console. This is done to prevent admin abuse.

### Usage

```java
/mv spawn [player(s)] [--unsafe]
```

- `[player]`: The player to teleport, or defaults to yourself. Must be specified if running from the console.
- `--unsafe`: allows teleportation even if the location is deemed unsafe.

### Examples

- `/mv spawn`  
- `/mv spawn lithium3141`

### Aliases

`/mv spawn ...`  
`/mvspawn ...`

### Permission

`multiverse.core.spawn.self.[worldname]`  
`multiverse.core.spawn.other.[worldname]`

[↑ Back to Top ↑](#top)

## Teleport Command

### Description

Allows you to teleport yourself or others to a specified world or destination. There are many different permissions associated with this command, with the categories being `self` and `other`; allowing you to teleport yourself and others respectively.

Each Type of [Destination](/core/reference/destinations) will have each of the permissions (`self` and `other`) associated with it. The most basic example is for worlds:

```
multiverse.teleport.self.w
multiverse.teleport.other.w
```

The letter(s) at the end are the identifier for the [destination](/core/reference/destinations/). This is the same thing you would put before the destination if you teleport to it: `/mv tp w:MyWorld`. So Portals would be:

```
multiverse.teleport.self.p
multiverse.teleport.other.p
```

Even if you have the `multiverse.teleport.other.w` permission, you can only teleport people to worlds where **YOU** can go yourself. This will allow you to teleport a player to a world that they themselves cannot go to, as long as you have the permission to do so.

### Destinations

`/mvtp` works hand in hand with Destinations! **See also:** [Destinations](/core/reference/destinations)

### Usage

```java
/mv tp [player(s)] <destination> [--unsafe]
```

- `[player(s)]`: the player(s) to teleport. Leave empty to teleport yourself only.
- `<destination>`: the destination to teleport to. See [Destinations](/core/reference/destinations)
- `--unsafe`: allows teleportation to unsafe destinations

### Examples

- `/mv tp world`
- `/mv tp Rigby90 world_nether`
- `/mv tp Rigby90,Jeb_,Notch world`
- `/mv tp @a b:playerbed`
- `/mv tp Jeb_ e:world:70,64,0:90:90`

### Aliases

- `/mv teleport ...`
- `/mv tp ...`
- `/mvtp ...`

### Permission

`multiverse.teleport.self.<dest-id>.[finer-permissions]`  
`multiverse.teleport.other.<dest-id>.[finer-permissions]`

[↑ Back to Top ↑](#top)

## Unload Command

### Description

This command will **ONLY** unload the world from the server. It does **NOT** remove it from the Multiverse Configs OR delete the world folder. This can be used in servers that have lots of rarely used worlds to help with performance.

**See also:** [/`mv remove`](#Remove-Command) and [`/mv delete`](#Delete-Command)

### Usage

```java
/mv unload <world> [--remove-players] [--no-save]
```
- `<world>` - Target world to unload.
- `--remove-players` - Remove players from the world first. If this flag is not specified and players are still in the world then the command will error
- `--no-save` - Do not force the world to be saved before unloading - will rollback the world some time. **use with caution**

### Examples

- `/mv unload world`
- - `/mv unload lobby --no-save`

### Permission

`multiverse.core.unload`

[↑ Back to Top ↑](#top)

## Who Command

### Description

Displays who is currently in a specific world. If you do not pass in a specific world then your current world will be used.

### Usage

```java
/mv who [world]
```

### Examples

- `/mv who`  
- `/mv who world_nether`

### Permission

`multiverse.core.list.who`

[↑ Back to Top ↑](#top)

## Who All Command

### Description

Displays who is currently in all worlds. `/mv who` will **not** show worlds that are empty.

![An example showing who's in what world](/core/command-reference/mvwhoall.png)
Here is an example of the `/mv who` command in use combined with both [world aliases and colors](/core/fundamentals/world-properties/#Alias).

### Usage

```java
/mv whoall [--page <number>] [--filter <string>]
```

### Permission

`multiverse.core.list.who.all`

[↑ Back to Top ↑](#top)
