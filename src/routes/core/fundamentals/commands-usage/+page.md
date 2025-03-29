---
title: "Command Reference - Core"
---

# Multiverse Command Reference

:::caution[Unfinished]
This page is not finished!

Todo:

- Links
- Update commands to MV5 syntax
- Move images to be local
  :::

If you're looking for the [Multiverse-Portals](<https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference-(Portals)>), [Multiverse-NetherPortals](<https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference-(NetherPortals)>) or [Multiverse-Inventories](<https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference-(Inventories)>) Command References, click the links!

**Looking for the permissions?**  
[Click here to go the Big List O' Permissions!](/core/reference/permissions-list)

## Index

[Introduction](#Introduction)

- [Anchor Command](#Anchor-Command)
- [Clone Command](#Clone-Command)
- [Confirm Command](#Confirm-Command)
- [Coordinate Command](#Coordinate-Command)
- [Create Command](#Create-Command)
- [Debug Command](#Debug-Command)
- [Delete Command](#Delete-Command)
- [Environment Command](#Environment-Command)
- [Gamerule Command](#Gamerule-Command)
- [Gamerules Command](#Gamerules-Command)
- [Help Command](#Help-Command)
- [Import Command](#Import-Command)
- [Information Command](#Information-Command)
- [List Command](#List-Command)
- [Modify Command](#Modify-Command)
  - [Set](<#Modify-Command-(Set)>)
  - [Add](<#Modify-Command-(Add-Remove)>)
  - [Remove](<#Modify-Command-(Add-Remove)>)
  - [Clear](<#Modify-Command-(Clear)>)
- [Purge Command](#Purge-Command)
- [Regen Command](#Regen-Command)
- [Reload Command](#Reload-Command)
- [Remove Command](#Remove-Command)
- [Set Spawn Command](#Set-Spawn-Command)
- [Silent Command](#Silent-Command)
- [Spawn Command](#Spawn-Command)
- [Teleport Command](#Teleport-Command)
- [Unload Command](#Unload-Command)
- [Who Command](#Who-Command)
- [Who All Command](#Who-All-Command)

[↑ Back to Top ↑](#top)

## Introduction

In Multiverse, we have included a handy new in-game help system. To access this help, simply type `/mv`. In order to properly read this command reference, we'll walk through reading the "usage" of a command.

### Command Case

Whenever reading this wiki or the in-game [`/mv`](#help) help, you should remember that items in **ALL CAPS** should be replaced with a variable. Items in lowercase should be typed exactly how they appear.

### Optional vs. Required Params

Items inside square braces (`[]`) are **OPTIONAL** where items inside (`<>`) are **REQUIRED**

### Simple command example

Let's look at a simple one first:

[`/mv info [WORLD]`](#Information-Command)

This means that this command has one optional parameter, meaning you could type [`/mv info`](#Information-Command) **or** [`/mv info world`](#Information-Command). Obviously, the command will do different things with or without its params. You can tell what those effects are by reading this wiki.

### Complex command example

Let's look at the most complex example:  
_NOTE: This is the most complex command in MV2 and in order to use it correctly, please refer to the [Create Command](#Create-Command)._

[`/mv create <NAME> <ENV> -s [SEED] --generator [GENERATOR[:ID]]`](#Create-Command)

At first, you will notice that there are 2 required params, **NAME**, and **ENV**. Then you will see the flags afterward. If you want to use a [[seed|World-Properties#seeds]] you must add `-s gargamel` to the command string. If you want a [[generator|World-Properties#generators]] the same principle applies: `-g BukkitFullOfMoon`. Full examples of this command are located at the [Create Command reference](#Create-Command)

### Flags

Many commands in Multiverse use flags, these can be one or two dashes. Two dash flags are whole words (e.g: `--filter`) and one dash flags are shorthand versions of the same thing (e.g: `-p`).

There are two flags that you will come across quite a lot: `--filter` and `--page`. These are used for filtering and selecting the page respectively of a paginated command. These will be omitted from the below descriptions but will show up in tab complete for commands that support their usage.

[↑ Back to Top ↑](#top)

## List Command

### Description

Displays a listing of all worlds that you can enter.

### Usage

`/mv list`

### Example

`/mv list`

### Aliases

`/mv list`
`/mvl`
`/mvlist`

### Permission

`multiverse.core.list.worlds`

### Flags

`--raw`/`-r` - Shows world names instead of aliases

### Details

The list command will only show you the worlds that you have access to enter. For example, if you are blacklisted in `sky` but not in `world` and `world*nether`, when you type `/mvlist` you would see:

```
====[ Multiverse World List ]====
world - normal
world*nether - NETHER
```

This allows you to have worlds that are completely unknown to people. Keep in mind though, if you're in a world that someone else cannot view, and you chat from it, your chat prefix would be of that world.
![Example World List](/core/command-reference/example-world-list.png)
Here is an example of a world listing.

:::note[Note]
To get colored worlds, you will need to use the [world alias feature](/core/fundamentals/world-properties#Alias).
:::

[↑ Back to Top ↑](#top)

:::caution[Unfinished]
No clue where to find this in the code, help pls to update to MV5
:::

## Help Command

### Description

Displays the Multiverse help pages.

### Usage

`/mv [FILTER] [PAGE #]`

### Examples

`/mv`  
`/mv 3`  
`/mvh del`  
`/mvh mod 2`

### Aliases

`/mv`  
`/mvh`  
`/mvhelp`  
`/mv help`  
`/mvsearch`  
`/mv search`

### Permission

`multiverse.help`

### Details

Displays an in game help menu for Multiverse. This will only show users commands they have access to. Use the optional integer parameter to indicate which page you would like to view. The total number of pages will be displayed once you use `/mv` for the first time.

The help command now supports searching! This means if you type `/mvh del` you will see a list of all commands whose `name`, `description`, `alias(s)` or `usage` contain 'del'. These results may be paged, depending on how long your search string, so to see another page of a search simply do: `/mvh del 2`.

**NOTE:** When searching, if you try: `/mv delete` you will see the help for the **Delete Command**. This is because you have hit the nail on the head with your search: you typed the exact name of a command! If you wish to **search** for any commands that contain the word 'delete', use any of the other help aliases: `/mvh delete`, `/mvhelp delete`, `/mv help delete`...

![Example use of the Help command when an OP](https://user-images.githubusercontent.com/8557785/63812440-069a6a00-c8f0-11e9-9264-29e4082ba8cd.png)
Here is an example use of the Help command while given OP status. This example also has [Multiverse-Portals](https://github.com/Multiverse/Multiverse-Portals/wiki/) and [Mutliverse-NetherPortals](https://github.com/Multiverse/Multiverse-NetherPortals/wiki/) installed, which is why there are 5 pages.

[↑ Back to Top ↑](#top)

## Information Command

### Description

Displays information about the world you're in or the world you pass in.

### Usage

`/mv info [WORLD]`

### Examples

`/mv info`
`/mv info world`

### Aliases

`/mv info ...`  
`/mvi ...`  
`/mvinfo ...`

### Permission

`multiverse.core.info`

### Details

The info command shows many details about a world and displays it in a paginated format. You can specify a world to look at in particular if required.

This command is mainly for debugging. Be that by the developers of Multiverse or you!
![Page 1 of the Information Command](/core/command-reference/mvinfo.png)

[↑ Back to Top ↑](#top)

## Create Command

### Description

Creates a new world and loads it.

### Usage

`/mv create <NAME> <ENVIRONMENT> [flags]`

### Examples

`/mv create my_world normal`  
`/mv create my_hell nether`  
`/mv create my_cloud_world --generator SkyLandsPlus normal`  
`/mv create flat_world normal --world-type flat`  
`/mv create "My-Seed-World" normal --seed gargamel`
`/mv create moon normal --generator BukkitFullOfMoon`  
`/mv create custom-world-with-a-generator-and-an-ID normal --generator BukkitFullOfMoon:Dinnerbone`  
`/mv create custom-generator-world-with-seed normal --generator BukkitFullOfMoon:Dinnerbone -s gargamel`
`/mv create example normal --generator "BananaGen:hilly,tscale=35.0,terrainheight=15.0,notorches"`

### Aliases

`/mv create ...`  
`/mvc ...`  
`/mvcreate ...`

### Permission

`multiverse.core.create`

### Flags

- `--seed <seed>`/`-s`: The world seed to give to the generator
- `--generator <generator:id>`/`-g`: The [custom generator](/core/reference/custom-generator-plugins) to use
- `--world-type <worldtype>`/`-t`: The type of the new world, can be one of the below.
  - [amplified](https://minecraft.wiki/w/Amplified)
  - [flat](https://minecraft.wiki/w/Superflat)
  - [large_biomes](https://minecraft.wiki/w/Large_Biomes)
  - normal
- `--no-adjust-spawn`/`-n`: Sets the [Adjust Spawn](/core/fundamentals/world-properties#Adjust-Spawn) world property
- `--no-structures`/`-a`: Set this flag to disable structures from spawning
- `--biome`/`-b`: Sets the world to be a single-biome world. Alike to the [Single Biome/Buffet](https://minecraft.wiki/w/Single_biome) option in Vanilla

### Details

The create command allows you to add new worlds to your server. Each world has many properties that you can edit and tweak. Please see the [World Properties](/core/fundamentals/world-properties) page for information on each of these settings. In addition, you can modify worlds **in game** by using the [`/mv modify`](#Modify-Command) command. Please see the appropriate section below for [Seeds](/core/fundamentals/world-properties#seeds) or [Custom Generators](/core/fundamentals/world-properties#generators).

### World Name and Environment

When you are going to create a new world you MUST specify a name and environment. Valid environments can be seen by using [`/mv env`](#Environment-Command). Your world names **CANNOT** have spaces in world names, use the [Alias Feature](/core/fundamentals/world-properties#Alias) for that.

### Seeds

You can create a world with a custom seed by adding `--seed SEEDNAME` after the 2 required params. Here is an example that creates the famed gargamel world and names it mountain\*world:

`/mv create mountain_world normal --seed gargamel`

### World Types

World types are like generators, but baked into Minecraft itself! Currently, there are only [amplified](https://minecraft.wiki/w/Amplified), [flat](https://minecraft.wiki/w/Superflat), [large_biomes](https://minecraft.wiki/w/Large_Biomes) and normal world types. To use a world type, simply use the `--world-type` flag, here is an example for a [flat](https://minecraft.wiki/w/Superflat) world. These are only effective on `normal` environment worlds.
`/mv create flat_world normal --world-type flat`

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

You should know that if you decide to use spaces in your world name that whenever people want to use [`/mv tp`](#teleport-Command), [`/mv modify`](#modify-Command) or any command that takes the world name as a param, they will have to surround the name in quotes, like so

`/mv tp "My world name with spaces"`

`/mv tp My world name with spaces` will NOT work.

[↑ Back to Top ↑](#top)

## Import Command

### Description

Imports an existing world folder.

### Usage

`/mv import <NAME> <ENV> [flags]`

### Examples

`/mv import my_world normal`  
`/mv import my_hell nether`  
`/mv import my_cloud_world skylands`  
`/mv import moon normal --generator BukkitFullOfMoon`
`/mv import one_biome normal --biome plains`

### Aliases

`/mv import ...`  
`/mvi ...`  
`/mvimport ...`

### Permission

`multiverse.core.import`

### Flags

- `--biome`: Specify the biome to generate new chunks in the world with if this is a single biome world
- `--generator`: Specify the generator to use in new chunks if a custom generator should be used
- `--no-adjust-spawn`/`-n`: Sets the [Adjust Spawn](/core/fundamentals/world-properties#Adjust-Spawn) world property

### Details

The import command is almost identical to the create command apart from the fact that it is used to import a world folder that already exists. Since the world already exists, you cannot apply a new seed to it, however currently you **MUST** provide the correct environment **AND** Generator for the imported world. If you do not, bad things will happen to your world.

[↑ Back to Top ↑](#top)

## Reload Command

### Description

Reloads config files

### Usage

`/mv reload`

### Examples

`/mv reload`

### Aliases

`/mv reload`  
`/mvr`  
`/mvreload`

### Permission

`multiverse.core.reload`

### Details

The reload command will reload any Multiverse-Core as well as **any official Multiverse plugin** configs. Any values currently loaded into memory will be replaced with the config values. These configs also get reloaded on plugin load/server restart, so there is no need to use if after one of those. Any value in `worlds.yml` can be modified in game by using the [`/mvmodify`](#Modify-Command) command and that is the recommended way to go about doing so.

[↑ Back to Top ↑](#top)

## Set Spawn Command

### Description

Sets the respawn point for the current world.

### Usage

`/mv setspawn [x],[y],[x],[pitch],[yaw]`

### Examples

`/mv setspawn`
`/mv setspawn 0,0,0`
`/mv setspawn 10,64,100,90,180`

### Aliases

`/mv setspawn`
`/mvss`
`/mvsetspawn`

### Permission

`multiverse.core.spawn.set`

### Details

The set spawn command does exactly what it sounds like. You can walk to where you want players to spawn, type `/mv setspawn` and it's set. To go to the spawn you can use [`/mv spawn`](#spawn-Command). If you would like to run this from the console or specify a location anyway just add your location in the format: `[x],[y],[x],[pitch],[yaw]`. Pitch and yaw are optional and will default to `0,0`

[↑ Back to Top ↑](#top)

## Coordinate Command

### Description

Displays your current location info.

### Usage

`/mv coordinates [player]`

### Examples

`/mv coord`

### Aliases

`/mv coordinates`
`/mv coords`
`/mv coord`
`/mv co`
`/mvcoord`
`/mvco`

### Permission

`multiverse.core.coord`

### Details

This command displays general location info:

- World
- [World alias](/core/fundamentals/world-properties/#Alias)
- [World scale](/core/fundamentals/world-properties/#Scale)
- Coordinates
- Facing direction

[↑ Back to Top ↑](#top)

## Teleport Command

### Description

Allows you to teleport one or more players to a different world.

### Usage

`/mv tp [PLAYER(s)] <DESTINATION>`

### Examples

`/mv tp world`  
`/mv tp Rigby90 world_nether`
`/mv tp Rigby90,Jeb_,Notch world`
`/mv tp @e world_the_end`
`/mv tp Jeb_ e:world:0,0,0`

### Aliases

`/mv tp ...`
`/mv teleport ...`
`/mvtp ...`

### Permission

`multiverse.teleport.self.[DESTINATION].<WORLDNAME>`  
`multiverse.teleport.other.[DESTINATION].<WORLDNAME>`

### Flags

- `--unsafe`: allows teleportation to unsafe destinations

### Details

The teleport command allows you to teleport yourself or others to a specified world or destination. There are many different permissions associated with this command, with the categories being `self` and `other`; allowing you to teleport yourself and others respectively.

Each Type of [Destination](/core/reference/destinations/) will have each of the permissions (`self` and `other`) associated with it. The most basic example is for worlds:

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

:::caution[unfinished]
The FAQ is not re-implemented yet
:::
Please see the [FAQ](#TODOLINK) for why this change was made (Old permissions were simply `multiverse.core.tp.[self|other]`)!

### Destinations

`/mvtp` can be used with Destinations too! As seen in [Destinations](/core/reference/destinations/).

[↑ Back to Top ↑](#top)

## Who Command

### Description

Displays who is in which world.

### Usage

`/mv who [WORLD]`

### Examples

`/mv who`  
`/mv who world_nether`

### Aliases

`/mv who ...`  
`/mvw ...`  
`/mvwho ...`

### Permission

`multiverse.core.list.who`

### Details

Displays who is currently in a specific world. If you do not pass in a specific world then your current world will be used

[↑ Back to Top ↑](#top)

## Who All Command

### Description

Displays who is in which worlds.

### Usage

`/mv whoall`

### Examples

`/mv whoall`

### Aliases

`/mv whoall ...`  
`/mvwhoall ...`

### Permission

`multiverse.core.list.who.all`

### Details

Displays who is currently in all worlds. `/mv who` will **not** show worlds that are empty.

![An example showing who's in what world](/core/command-reference/mvwhoall.png)
Here is an example of the `/mv who` command in use combined with both [world aliases and colors](/core/fundamentals/world-properties/#Alias).

[↑ Back to Top ↑](#top)

## Spawn Command

### Description

Teleports you to the spawn of your current world.

### Usage

`/mv spawn [PLAYER]`

### Examples

`/mv spawn`  
`/mv spawn lithium3141`

### Aliases

`/mv spawn ...`  
`/mvs ...`  
`/mvspawn ...`

### Permission

`multiverse.core.spawn.self`  
`multiverse.core.spawn.other`

### Flags

- `--unsafe`: allows teleportation to unsafe destinations

### Details

Allows you to teleport yourself (or another player) to the current world's spawn. If you want to teleport a player to a different world or different location within a world please see [`/mv tp`](#teleport-Command). This command does tell the teleportee who teleported them, even if it was the console. This is done to prevent admin abuse.

[↑ Back to Top ↑](#top)

## Unload Command

### Description

Unloads a world from the Bukkit server.

### Usage

`/mv unload <WORLD> [flags]`

### Examples

`/mv unload world`

### Aliases

`/mv unload ...`  
`/mvunload ...`

### Permission

`multiverse.core.unload`

### Flags

- `--remove-players` Remove players from the world first. If this flag is not specified and players are still in the world then the command will error
- `--no-save` Do not force the world to be saved before unloading - will rollback the world some time. **use with caution**

### Details

This command will **ONLY** unload the world from the server. It does **NOT** remove it from the Multiverse Configs OR delete the world folder. This can be used in servers that have lots of rarely used worlds to help with performance.

**See also:** [/`mv remove`](#remove-Command) and [`/mv delete`](#delete-Command)

[↑ Back to Top ↑](#top)

## Remove Command

### Description

Unloads a world from the Bukkit server and removes it from the MV configs.

### Usage

`/mv remove <WORLD>`

### Examples

`/mv remove world`

### Aliases

`/mv remove ...`  
`/mvremove ...`

### Permission

`multiverse.core.remove`

### Flags

- `--remove-players` Remove players from the world first. If this flag is not specified and players are still in the world then the command will error

### Details

This command will unload the world from the server **AND** remove it from the Multiverse Configs. It will **NOT** delete the world folder.

**See also:** [`/mv unload`](#unload-Command) and [`/mv delete`](#delete-Command)

[↑ Back to Top ↑](#top)

## Delete Command

### Description

Unloads a world from the Bukkit server, removes it from the MV configs **AND** _DELETES_ the world folder.

### Usage

`/mv delete <WORLD>`

### Examples

`/mv delete world`

### Aliases

`/mv delete ...`  
`/mvdelete ...`

### Permission

`multiverse.core.delete`

### Flags

- `--remove-players` Remove players from the world first. If this flag is not specified and players are still in the world then the command will error

### Details

This command will destroy the life, universe and everything associated with the world you pass as a parameter. For this reason, this command requires [`/mv confirm`](#confirm-Command). Here is an example usage

`/mv delete world`

You now have 10 seconds to type [`/mv confirm [OTP]`](#confirm-Command) with the correct OTP or the world will **NOT** be deleted.

**See also:** [`/mv confirm`](#confirm-Command), [`/mv unload`](#unload-Command) and [`/mv remove`](#remove-Command)

[↑ Back to Top ↑](#top)

## Confirm Command

### Description

Confirms an action that could destroy the life, the universe and everything.

### Usage

`/mv confirm [OTP]`

### Examples

`/mv confirm 431`

### Aliases

`/mv confirm`  
`/mvconfirm`

### Permission

`multiverse.core.confirm`

### Details

This command will confirm a requested action. See the [`/mv delete`](#delete-Command) command for an example use. If you fire up your server and type `/mv confirm`, nothing will happen.

**See also:** [`/mv delete`](#delete-Command) and [`/mv tp`](#teleport-Command)

[↑ Back to Top ↑](#top)

## Purge Command

:::caution[unfinished]
The purge command hasn't been implemented in MV5 yet!
:::

### Description

Removes the specified entities from the specified worlds

### Usage

`/mv purge [WORLD|all] <all|animals|monsters|MOBNAME>`

### Examples

`/mv purge all`  
`/mv purge world all`  
`/mv purge all all`  
`/mv purge world CREEPER`
`/mv purge world CREEPER,PIG,ZOMBIE`  
`/mv purge all monsters`

### Aliases

`/mv purge`
`/mvpurge`

### Permission

`multiverse.core.purge`

### Details

The Purge command allows you to remove all of a specified type of entity from a world. Understand that if the spawn rules allow the purged type of mob to spawn, they'll populate almost instantly after the purge. This is used to clear out any remaining mobs from a setting change or if a user abuses a mob spawn command.

If you specify the first parameter as `all` All worlds will be purged of the specified mob type. You are allowed to specify multiple mob types. Feel free to mix monsters and animals.

[↑ Back to Top ↑](#top)

## Clone Command

### Description

Clones a world (Copies a world directory to another directory)

### Usage

`/mv clone <WORLD> <NEW WORLD NAME> [flags]`

### Examples

`/mv clone world world_backup`  
`/mv clone myworld_nether myworld_nether_backup`
`/mv clone my_cloned_world my_cloned_world_now_cloned --reset_gamerules --reset_world_border --reset_world_config`

### Aliases

`/mv clone`
`/mvcl`
`/mvclone`

### Permission

`multiverse.core.clone`

### Flags

- `--reset-world-config` - Resets everything in `worlds.yml` associated with the new world
- `--reset-gamerules` - All gamerules in the new world will be at their default values
- `--reset-world-border` - The world border will be gone in the new world

### Details

The Clone command allows you to copy your world to another directory for a backup or to simply have two of the world for whatever reason you'd like.

[↑ Back to Top ↑](#top)

## Regen Command

### Description

Regenerates a world

### Usage

`/mv regen <WORLD> [flags]`

### Examples

`/mv regen world`
`/mv regen world --seed`
`/mv regen world --seed 11546315`

### Aliases

`/mv regen`
`/mvregen`

### Permission

`multiverse.core.regen`

### flags

- `--seed [seed]` Set the new seed to use. If a seed is not specified then a random seed will be used
- `--reset-world-config` Everything in `worlds.yml` associated with the world will be wiped
- `--reset-gamerules` Gamerules will go back to their vanilla defaults
- `--reset-world-border` The world border will go back to the vanilla default
- `--remove-players` Remove players from the world first. If this flag is not specified and players are still in the world then the command will error

### Details

The Regen command allows you to regenerate your world to where **EVERYTHING** built gets destroyed and regenerated. If the `-s` or `--seed` argument is provided, a new seed will be used, and if no seed is specified, a random one will be generated. Otherwise the world will be regenerated using the same seed.

[↑ Back to Top ↑](#top)

## Modify Command

### Description

The modify command has been documented as 4 separate sections for easier documentation. Please see the links below.

### Usage

[`/mv modify set ...`](<#Modify-Command-(Set)>)  
[`/mv modify add ...`](<#Modify-Command-(Add-Remove)>)  
[`/mv modify remove ...`](</#Modify-Command-(Add-Remove)>)  
[`/mv modify reset ...`](<#Modify-Command-(Reset)>)

[↑ Back to Top ↑](#top)

## Modify Command (Set)

### Description

Sets a world's variable

### Usage

`/mv modify [world] set <PROPERTY> <VALUE>`

### Examples

`/mv modify set animals false`  
`/mv modify world set pvp true`  
`/mv modify set diff 0`  
`/mv modify world_extreme set diff hard `  
`/mv modify death_world set respawnWorld respawn_world `

### Aliases

`/mv modify set ...`  
`/mvmodify set ...`  
`/mvm set ...`

## Permission

`multiverse.core.modify`

### Details

The modify command lets you set the [properties](/core/fundamentals/world-properties/) for your Multiverse worlds in game without needing to ever edit a config file. The `set` command sets a non-array value. An example would be turning animal spawning on, or setting the world scale to 2. The PROPERTY value that is required for this command must be one of the values listed on the [properties page](/core/fundamentals/world-properties/). If you do not specify a world, the current world will be used. A world is **required** from the console.

### A note about animals and monsters

The `animals` and `monsters` values, when used with `set`, will set the overall spawn behavior of animals/monsters. If you have any monsters in the `monsters` list and you `/mv modify set monsters true` you're saying: "I want monsters to spawn, **except** the ones in the monsters list"

**See also:** [`/mv modify <add/remove>`](<#Modify-Command-(Add-Remove)>) and [`/mv modify reset`](<#Modify-Command-(Reset)>)

[↑ Back to Top ↑](#top)

## Modify Command (Add/Remove)

:::caution[Unfinished]
The add and remove commands are still quite buggy in MV5
:::

### Description

Adds or Removes a value to a world's property

### Usage

`/mvmodify [WORLD] <add|remove> <VALUE> <PROPERTY> `

### Examples

`/mvmodify add creeper monsters`  
`/mvmodify remove sheep animals world*nether`

### Aliases

`/mvmodify <add|remove> ...`  
`/mv modify <add|remove> ...`  
`/mvm add|remove> ...`  
`/mvmadd ...`  
`/mvmremove ...`

### Permission

`multiverse.core.modify`

### Details

The modify command lets you add or remove values in each world without needing to ever edit a config file. The `add` and `remove` sub-Commands allow you to add and remove values from variables that contain lists, such as player white lists or which animals are allowed to spawn. If you do not specify a world, the current world will be used. A world is **required** from the console.

### Variables you can add to or remove from

- worldblacklist - String: What worlds can you not go to from here.
- animals - String
- monsters - String

See the [[World Properties]] page for more detail on these variables.

The second item is the type required. This means you cannot do `/mvmodify add fernferret blockblacklist

### A note about animals and monsters

The `animals` and `monsters` values when used with `add` or `remove` will add or remove **specific** animals/monsters. If you have the monsters (the boolean one that you can use `set` with) set to true and then add monsters to the list using `/mvmodify add` You are saying "I want monsters to spawn, **except** the ones in the monsters list"

**See also:** [`/mvmodify set`](<#Modify-Command-(Set)>) and [`/mvmodify reset`](<#Modify-Command-(Reset)>)

[↑ Back to Top ↑](#top)

## Modify Command (Reset)

### Description

Resets a list property's value back to the default

### Usage

`/mv modify [WORLD] reset <PROPERTY> `

### Examples

`/mv modify reset worldblacklist`  
`/mv modify world_nether reset monsters`

### Aliases

`/mvmodify reset ...`
`/mv modify reset ...`
`/mvm reset ...`

### Permission

`multiverse.core.modify`

### Details

The modify reset command lets you reset an entire list to it's default value without having to use a bunch of `/mv modify remove ...` commands. If you do not specify a world, the current world will be used. A world is **required** from the console.

**See also:** [`/mv modify set`](<#Modify-Command-(Set)>) and [`/mv modify <add|remove>`](<#Modify-Command-(Add-Remove)>)

[↑ Back to Top ↑](#top)

:::caution[unfinished]
Everything below here has not been updated to MV5
:::

## Gamerule List Command

### Description

Actions on minecraft gamerules for specified worlds

### Usage

`/mv gamerule list [world] [flags]`

### Examples

`/mv gamerule list`  
`/mv gamerule list world1 --page 2 --filter do`

### Aliases

`/mvgamerules`
`/mvrules`
`/mv gamerule list`

### Permission

`multiverse.core.gamerule.set`

### Details

Allows setting vanilla Minecraft game rules.

When called from console, `[WORLD]` is required. When called in-game, omitting `[WORLD]` will result in changing the rule for the player's current location.

### Game rules you can set

All the game rules are case sensitive.

- commandBlockOutput - Boolean
  - Whether command blocks should notify admins when they perform commands.
- doFireTick - Boolean
  - Whether fire should spread.
- doMobLoot - Boolean
  - Whether mobs should drop items.
- doMobSpawning - Boolean
  - Whether mobs should naturally spawn.
- doTileDrops - Boolean
  - Whether blocks should have drops.
- keepInventory - Boolean
  - Whether the player should keep items in their inventory if they die.
- mobGriefing - Boolean
  - Whether creepers, endermen, ghasts, and withers should be able to change blocks or zombies, skeletons, and zombie pigmen can pick up items.

[↑ Back to Top ↑](#top)

## Environment Command

### Description

Displays the valid environments.

### Usage

`/mv env`

### Examples

`/mv env`

### Aliases

`/mvenv`  
`/mv env`

### Permission

`multiverse.core.list.environments`

### Details

Displays all valid environments that this Bukkit server knows about.

[↑ Back to Top ↑](#top)

## Silent Command

### Description

Causes several of the startup messages to be hidden when silent mode is enabled.

### Usage

`/mv silent [true|false]`

### Examples

`/mv silent`

### Aliases

`/mv silent true`

### Permission

`multiverse.core.silent`

### Details

Causes several of the startup messages to be hidden when silent mode is enabled. May also apply to other messages later.

[↑ Back to Top ↑](#top)

## Debug Command

### Description

Provides detailed information on what the plugin is doing in console. Helpful for permission issues or destination issues.

### Usage

`/mv debug [0, 1, 2, 3]`

### Examples

`/mv debug 0` (Turns it off)

### Aliases

`/mvdebug 3`

### Permission

`multiverse.core.debug`

### Details

0 - Off  
1 -  
2 -  
3 - All details

[↑ Back to Top ↑](#top)

## Anchor Command

### Description

Anchors should be used if you have a place you want to go frequently. Using the `/mv anchor NAME` command to first create an anchor, you can then use it in any command that takes a destination.

### Usage

`/mv anchor NAME [-d]`

### Examples

`/mv anchor` - Lists the current anchors  
`/mv anchor NAME` - Creates the anchor with the name "NAME"  
`/mv anchor NAME -d` - Deletes the anchor "NAME"

### Aliases

None

### Permission

`multiverse.teleport.self.a`  
`multiverse.teleport.other.a`

### Details

A destination for frequently used teleports.

[↑ Back to Top ↑](#top)
