# Multiverse Command Reference

:::caution[Unfinished]
This page is not finished!

Todo:
 - Links
 - Update commands to MV5 syntax
 - Move images to be local
:::

If you're looking for the [Multiverse-Portals](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference-(Portals)), [Multiverse-NetherPortals](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference-(NetherPortals)) or [Multiverse-Inventories](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference-(Inventories)) Command References, click the links!

**Looking for just the permissions?**   
[Click here to go the Big List O' Permissions!](Big-List-O'-Permissions)

## Index
[Introduction](#introduction)
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
  - [Set](#Modify-Command-(Set))
  - [Add](#Modify-Command-(Add-Remove))
  - [Remove](#Modify-Command-(Add-Remove))
  - [Clear](#Modify-Command-(Clear))
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
*NOTE: This is the most complex command in MV2 and in order to use it correctly, please refer to the [Create Command](#Create-Command).*

[`/mv create <NAME> <ENV> -s [SEED] -g [GENERATOR[:ID]]`](#Create-Command)


At first, you will notice that there are 2 required params, **NAME**, and **ENV**. Then you will see the flags afterward. If you want to use a [[seed|World-Properties#seeds]] you must add `-s gargamel` to the command string. If you want a [[generator|World-Properties#generators]] the same principle applies: `-g BukkitFullOfMoon`. Full examples of this command are located at the [Create Command reference](#Create-Command)

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
### Details
The list command will only show you the worlds that you have access to enter. For example, if you are blacklisted in `sky` but not in `world` and `world*nether`, when you type `/mvlist` you would see:

    Worlds which you can view:
    world - NORMAL
    world*nether - NETHER

This allows you to have worlds that are completely unknown to people. Keep in mind though, if you're in a world that someone else cannot view, and you chat from it, your chat prefix would be of that world.
![Example World List](https://user-images.githubusercontent.com/8557785/63812285-8247e700-c8ef-11e9-9469-6a6b6aa2285e.png)
Here is an example of a world listing. **NOTE:** To get colored worlds, you will need to use the [[world alias feature|World-properties#wiki-alias]].

[↑ Back to Top ↑](#top)

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

---

## Information Command
### Description
Displays information about the world you're in or the world you pass in.
### Usage
`/mv info [WORLD] [PAGE #]`
### Examples
`/mv info`   
`/mv info 2`   
`/mv info world`   
`/mv info world 2`
### Aliases
`/mv info ...`   
`/mvi ...`   
`/mvinfo ...`
### Permission
`multiverse.core.info`
### Details
The info command is currently **UNFINISHED** it is primarily used so that you can tell the developers exactly how MV knows your world is configured. You can also use it to ensure that the world is behaving the way you want it to. Please consider this a debug command for right now.

![Page 1 of the Information Command](https://user-images.githubusercontent.com/8557785/63813643-cfc65300-c8f3-11e9-9fa5-5a40065fb574.png)

[↑ Back to Top ↑](#top)

---

## Create Command
### Description
Creates a new world and loads it.
### Usage
`/mv create <NAME> <ENV> [-s SEED] [-g GENERATOR[:ID]] [-t TYPE] [-a true|false]`
### Examples
`/mv create my*world NORMAL`  
`/mv create my*hell NETHER`  
`/mv create my*cloud*world -g SkyLandsPlus NORMAL`  
`/mv create flat*world NORMAL -t FLAT`  
`/mv create "My-Seed-World" NORMAL -s gargamel`
`/mv create moon NORMAL -g BukkitFullOfMoon`    
`/mv create Custom-world-with-a-generator-and-an-ID NORMAL -g BukkitFullOfMoon:Dinnerbone`  
`/mv create Custom-generator-world-with-seed NORMAL -g BukkitFullOfMoon:Dinnerbone -s gargamel`
`/mv create example NORMAL -g "BananaGen:hilly,tscale=35.0,terrainheight=15.0,notorches"`
### Aliases
`/mv create ...`   
`/mvc ...`   
`/mvcreate ...`
### Permission
`multiverse.core.create`
### Details
The create command allows you to add new worlds to your server thus allowing many different worlds of many different types. Each world has many properties that you can edit and tweak. Please see the [[World Properties]] page for information on each of these settings. In addition, you can modify worlds **in game** by using the [`/mv modify`](#modify-Command) command. Please see the appropriate section below for [Seeds](World-Properties#seeds) or [Custom Generators](World-Properties#generators).

---

### World Name and Environment
When you are going to create a new world you MUST specify a name and environment. Valid environments can be seen by using [`/mv env`](#environment-Command). Your world names **CANNOT** have spaces, use the [Alias Feature](World-Properties#wiki-alias) for that.

---

### Seeds
You can create a world with a custom seed by adding `-s SEEDNAME` after the 2 required params. Here is an example that creates the famed gargamel world and names it mountain\*world:

`/mv create mountain*world NORMAL -s gargamel`

---

### World Types
As of Minecraft 1.1, the concept of world types has been introduced. These seem to be like generators but baked into Minecraft itself. Currently, there are only `FLAT`, `LARGEBIOMES`, `AMPLIFIED`, `NORMAL`, `NETHER`, and `END` for world types. To use a world type, simply use the `-t` parameter, for type. Here is a flat normal world:

`/mv create flat*world NORMAL -t FLAT`

---

### Map Features (Generate Structures)
As of Minecraft 1.1 if you want a flat world with no structures, all you have to do is add the `-a false` flag. We used `-a` for **Allow Structures** and because `-g` was already taken.

***NOTE:** This will **only** work with `NORMAL` worlds.<!--404 now @FernFerret has some [neat code here to allow flat Nether worlds with structures](https://github.com/Bukkit/CraftBukkit-Bleeding/commit/68897b284e42f8fc0bba85e736a36b5cbbf89fe3#commitcomment-912997) but it has not been added to CraftBukkit. You'll have to build it yourself.-->

`/mv create flat*world NORMAL -t FLAT`

Currently, there are only `FLAT` and `NORMAL` for world types.

---

### Generators
Multiverse 2 supports Custom Generators. What does this mean? We support any plugin that makes use of the Bukkit custom generator feature. If an author has implemented their own style that does NOT use the custom generator method [described here](http://forums.bukkit.org/threads/22795/), it may not work with MV. We will try and keep an updated page of [[Custom Generator Plugins]].

Once you've found a plugin you want to use, copy the jar of that plugin to your plugins folder. Then all that's left to do is type a single command:   
(For this example I've decided to use [BukkitFullOfMoon](https://github.com/Dinnerbone/BukkitFullOfMoon) which will generate a cratered moon world by @Dinnerbone).

`/mv create moon NORMAL -g BukkitFullOfMoon`

The `BukkitFullOfMoon` above is the plugin name. This plugin only has one generator, and it's defined correctly, so the `:GENID` is needed. Some plugins may contain multiple generators, in which case you would type this: (This next one I'm making up entirely...)

`/mv create land*lake NORMAL -g WaterWorlds:Lakes`

OR

`/mv create hell*lake NORMAL -g WaterWorlds:LavaLakes`

---

### A note about spaces in world names
You should know that if you decide to use spaces in your world name that whenever people want to use [`/mv tp`](#teleport-Command), [`/mv modify`](#modify-Command) or any command that takes the world name as a param, they will have to surround the name in quotes, like so

`/mv tp "My world name with spaces"`

`/mv tp My world name with spaces` will NOT work.

[↑ Back to Top ↑](#top)

---

## Import Command
### Description
Imports an existing world folder.
### Usage
`/mv import <NAME> <ENV> [GENERATOR[:ID]]`
### Examples
`/mv import my*world NORMAL`   
`/mv import my*hell NETHER`   
`/mv import my*cloud*world SKYLANDS`   
`/mv import moon NORMAL -g BukkitFullOfMoon`
### Aliases
`/mv import ...`   
`/mvi ...`   
`/mvimport ...`
### Permission
`multiverse.core.import`
### Details
The import command is almost identical to the create command apart from the fact that it is used to import a world folder that already exists. Since the world already exists, you cannot apply a new seed to it, however currently you **MUST** provide the correct environment **AND** Generator for the imported world. If you do not, bad things will happen to your world. We are working to remove these requirements. For this command, you do NOT need the `-g` when specifying a generator and in fact, you will receive an error message if you provide the `-g`.

[↑ Back to Top ↑](#top)

---

## Reload Command
### Description
Reloads worlds.yml and [[config.yml]].
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
The reload command will reload any Multiverse-Core as well as **any Official Multiverse Plugin** configs. Any values currently loaded into memory will be replaced with the config values. These configs also get reloaded on plugin load/server restart, so there is no need to use if after one of those. Any value in `worlds.yml` can be modified in game by using the [`/mvmodify`](#modify-Command) command

[↑ Back to Top ↑](#top)

---

## Set Spawn Command
### Description
Sets the respawn point for the current world.
### Usage
`/mv set spawn`
### Examples
`/mv set spawn`
### Aliases
`/mv set spawn`   
`/mvss`   
`/mvsetspawn`
### Permission
`multiverse.core.spawn.set`
### Details
The set spawn command does exactly what it sounds like. You can walk to where you want players to spawn, type `/mv set spawn` and it's set. To go to the spawn you can use [`/mv spawn`](#spawn-Command).

[↑ Back to Top ↑](#top)

---

## Coordinate Command
### Description
Displays your current coordinates.
### Usage
`/mv coord`
### Examples
`/mv coord`
### Aliases
`/mv coord`   
`/mvcoord`
### Permission
`multiverse.core.coord`
### Details
This command simply displays where you are and where you're looking/standing. Useful for getting un-lost.

[↑ Back to Top ↑](#top)

---

## Teleport Command
### Description
Allows you to teleport to a different world.
### Usage
`/mv tp [PLAYER] <WORLD>`
### Examples
`/mv tp world`   
`/mv tp Rigby90 world*nether`
### Aliases
`/mv tp ...`   
`/mvtp ...`
### Permission
`multiverse.teleport.self.NAME`   
`multiverse.teleport.other.NAME`
### Details
The teleport command allows you to teleport yourself or others to a specified world. There are many different permissions associated with this command, with the categories being `self` and `other`; allowing you to teleport yourself and others respectively.

Each Type of [[Destination|Destinations]] will have each of the permissions (`self` and `other`) associated with it. The most basic example is for worlds:

    multiverse.teleport.self.w
    multiverse.teleport.other.w

The letter(s) at the end are the identifier for the destination. This is the same thing you would put before the destination if you teleport to it: `/mv tp w:MyWorld`. So Portals would be:

    multiverse.teleport.self.p
    multiverse.teleport.other.p

Even if you have the `multiverse.teleport.other.w` permission, you can only teleport people to worlds where **YOU** can go yourself. This will allow you to teleport a player to a world that they themselves cannot go to, as long as you have the permission to do so.

Please see the [FAQ](FAQ#wiki-tp-perms) for why this change was made (Old permissions were simply `multiverse.core.tp.[self|other]`!

### Destinations

`/mvtp` can be used with Destinations as seen in [Destinations](https://github.com/Multiverse/Multiverse-Core/wiki/Destinations)

[↑ Back to Top ↑](#top)

---

## Who Command
### Description
Displays who is in which world(s).
### Usage
`/mv who [WORLD|-a]`
### Examples
`/mv who`   
`/mv who world*nether`
`/mv who -a`
`/mv who --all`
### Aliases
`/mv who ...`   
`/mvw ...`   
`/mvwho ...`
### Permission
`multiverse.core.list.who`
### Details
Displays who is currently in which worlds. If you want to see who is in a specific world, pass the world name in as the only parameter. By default, `/mv who` will **not** show worlds that are empty. If you want to see **all** worlds simply add either `-a` or `--all` to the end of your command: `/mvwho -a`. The `-a`/`--all` flag will **override** a world provided.

![An example showing who's in what world](https://user-images.githubusercontent.com/8557785/63814076-49127580-c8f5-11e9-9729-eda85fd8ae10.png)
Here is an example of the `mv who` command in use combined with both [world aliases and colors](World-properties#wiki-alias).

[↑ Back to Top ↑](#top)

---

## Spawn Command
### Description
Teleports you to the spawn.
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
### Details
Allows you to teleport yourself (or another player) to the current world's spawn. If you want to teleport a player to a different world or different location within a world please see [`/mv tp`](#teleport-Command). This command does tell the teleportee who teleported them, even if it was the console. This is done to prevent admin abuse.

[↑ Back to Top ↑](#top)

---

## Unload Command
### Description
Unloads a world from the Bukkit server.
### Usage
`/mv unload <WORLD>`
### Examples
`/mv unload world`
### Aliases
`/mv unload ...`   
`/mvunload ...`
### Permission
`multiverse.core.unload`   
### Details
This command will **ONLY** unload the world from the server. It does **NOT** remove it from the Multiverse Configs OR delete the world folder.

See also: [/`mv remove`](#remove-Command) and [`/mv delete`](#delete-Command)

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
### Details
This command will unload the world from the server **AND** remove it from the Multiverse Configs. It will **NOT** delete the world folder.

See also: [`/mv unload`](#unload-Command) and [`/mv delete`](#delete-Command)

[↑ Back to Top ↑](#top)

---

## Delete Command
### Description
Unloads a world from the Bukkit server, removes it from the MV configs **AND** *DELETES* the world folder.
### Usage
`/mv delete <WORLD>`
### Examples
`/mv delete world`
### Aliases
`/mv delete ...`   
`/mvdelete ...`
### Permission
`multiverse.core.delete`   
### Details
This command will destroy the life, universe and everything associated with the world you pass as a parameter. For this reason, this command requires [`/mv confirm`](#confirm-Command). Here is an example usage

`/mv delete world`

\*You now have 10 seconds to type [`/mv confirm`](#confirm-Command) or the world will **NOT** be deleted.\*

See also: [`/mv confirm`](#confirm-Command), [`/mv unload`](#unload-Command) and [`/mv remove`](#remove-Command)

[↑ Back to Top ↑](#top)

---

## Confirm Command
### Description
Confirms an action that could destroy the life, the universe and everything.
### Usage
`/mv confirm`
### Examples
`/mv confirm`
### Aliases
`/mv confirm`   
`/mvconfirm`
### Permission
`multiverse.core.confirm`
### Details
This command will confirm a requested action. See the [`/mv delete`](#delete-Command) command for an example use. If you fire up your server and type `/mv confirm`, nothing will happen.

See also: [`/mv delete`](#delete-Command) and [`/mv tp`](#teleport-Command)

[↑ Back to Top ↑](#top)

---

## Purge Command
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

---

## Clone Command
### Description
Clones a world (Copies a world directory to another directory)
### Usage
`/mv clone world NewWorldName`
### Examples
`/mv clone world world*backup`   
`/mv clone myworld*nether myworld*nether*backup`
### Aliases
`/mv clone`
`/mvclone`
### Permission
`multiverse.core.clone`   
### Details
The Clone command allows you to copy your world to another directory for a backup or to simply have two of the world for whatever reason you'd like.

[↑ Back to Top ↑](#top)

---

## Regen Command
### Description
Regenerates a world
### Usage
`/mv regen <WORLD> [-s [SEED]]`
### Examples
`/mv regen world`
`/mv regen world -s`
`/mv regen world -s 11546315`
### Aliases
`/mv regen`
`/mvregen`
### Permission
`multiverse.core.regen`   
### Details
The Regen command allows you to regenerate your world to where EVERYTHING built gets destroyed and regenerated. If the `-s` argument is provided, a new seed will be used, and if no seed is specified, a random one will be generated. Otherwise, the world will be regenerated using the same seed.

[↑ Back to Top ↑](#top)

---

## Modify Command
### Description
The modify command has been documented as 4 separate sections for easier documentation. Please see the links below.
### Usage
[`/mv modify set ...`](#modify-Command-set)    
[`/mv modify add ...`](#modify-Command-addremove)    
[`/mv modify remove ...`](#modify-Command-addremove)    
[`/mv modify clear ...`](#modify-Command-clear)    

[↑ Back to Top ↑](#top)

---

## Modify Command (Set)
### Description
Modifies a world's variable
### Usage
`/mv modify set <PROPERTY> <VALUE> [WORLD]`
### Examples
`/mv modify set animals false`   
`/mv modify set pvp true world`   
`/mv modify set diff 0`   
`/mv modify set diff hard world*extreme`   
`/mv modify set respawnWorld respawn*world death*world`   
### Aliases
`/mv modify set ...`   
`/mvmodify set ...`   
`/mvm set ...`   
`/mvmset ...`
## Permission`multiverse.core.modify`   
### Details
The modify command lets you set the variables for your Multiverse worlds in game without needing to ever edit a config file. The `set` command sets a non-array value. An example would be turning animal spawning on, or setting the world scale to 2. The PROPERTY value that is required for this command must be one of the values listed below. If you do not specify a world, the current world will be used. A world is **required** from the console.

## Variables you can set

* alias - String
* color - String
  - Must be one of these: `AQUA, BLACK, BLUE, DARKAQUA, DARKBLUE, DARKGRAY, DARKGREEN, DARKPURPLE, DARKRED, GOLD, GRAY, GREEN, LIGHTPURPLE, RED, YELLOW, WHITE`
* animals - Boolean
* monsters - Boolean
* pvp - Boolean
* scale/scaling - Double
* price - How much it costs to enter the world. Enter 0 for free. Enter negative value for debit, positive value for credit.
* currency/curr - What it costs to enter the world in the form of an Item ID (-1 to use the econ plugin you have installed)
* respawnWorld - String
  - This value can either be the Name of a world or the Alias of that world. Space CAN be used.
* mode/gamemode - String
  - Sets the mode for all players in a world. Must be `creative`, `survival` or `adventure`
* diff/difficulty - String/Integer
  - Sets the difficulty of a world. You can use string or integers:
  - Possible values are PEACEFUL - 0, EASY - 1, NORMAL - 2, HARD - 3 
* weather - Boolean
  - Turn weather on/off.

See the [[World Properties]] page for more detail on these variables.

The second item is the type required. This means you cannot do `/mv modify set scale fish` or `/mv modify set animals 7`

### A note about animals and monsters
The `animals` and `monsters` values, when used with `set`, will set the overall spawn behavior of animals/monsters. If you have any monsters in the `monsters` list and you `/mv modify set monsters true` you're saying:   "I want monsters to spawn, **except** the ones in the monsters list"

See also: [`/mv modify <add/remove>`](#modify-Command-addremove) and [`/mv modify clear`](#modify-Command-clear)

---

[↑ Back to Top ↑](#top)

## Modify Command (Add/Remove)
### Description
Adds or Removes a value to a world's property
### Usage
`/mvmodify <add|remove> <VALUE> <PROPERTY> [WORLD]`
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

* worldblacklist - String: What worlds can you not go to from here.
* animals - String
* monsters - String

See the [[World Properties]] page for more detail on these variables.

The second item is the type required. This means you cannot do `/mvmodify add fernferret blockblacklist

### A note about animals and monsters
The `animals` and `monsters` values when used with `add` or `remove` will add or remove **specific** animals/monsters. If you have the monsters (the boolean one that you can use `set` with) set to true and then add monsters to the list using `/mvmodify add` You are saying "I want monsters to spawn, **except** the ones in the monsters list"

See also: [`/mvmodify set`](#modify-Command-set) and [`/mvmodify clear`](#modify-Command-clear)

[↑ Back to Top ↑](#top)

---

## Modify Command (Clear)
### Description
Clears all values from a list property
### Usage
`/mv modify clear <PROPERTY> [WORLD]`
### Examples
`/mv modify clear worldblacklist`   
`/mv modify clear monsters world*nether`
### Aliases
`/mvmodify clear ...`   
`/mv modify clear ...`   
`/mvm clear ...`   
`/mvmclear ...`
### Permission
`multiverse.core.modify`
### Details
The modify clear command lets you clear an entire list without having to use a bunch of `/mv modify remove ...` commands. If you do not specify a world, the current world will be used. A world is **required** from the console.

### Variables you can clear

* `worldblacklist`
* `animals`
* `monsters`

See the [[World Properties]] page for more detail on these variables.

See also: [`/mv modify set`](#modify-Command-set) and <code>[/mv modify <add|remove>](#modify-Command-addremove)</code>

[↑ Back to Top ↑](#top)

---

## Gamerule Command
### Description
Sets a Minecraft game rule for a world.
### Usage
`/mv gamerule <RULE> <VALUE> [WORLD]`
### Examples
`/mv gamerule mobGriefing false`   
`/mv gamerule doFireTick false world1`   
### Aliases
`/mvgamerule`   
`/mv rule`   
`/mvrule`   
### Permission
`multiverse.core.gamerule.set`
### Details
Allows setting vanilla Minecraft game rules.

When called from console, `[WORLD]` is required.  When called in-game, omitting `[WORLD]` will result in changing the rule for the player's current location.
### Game rules you can set
All the game rules are case sensitive.
* commandBlockOutput - Boolean
  - Whether command blocks should notify admins when they perform commands.
* doFireTick - Boolean
  - Whether fire should spread.
* doMobLoot - Boolean
  - Whether mobs should drop items.
* doMobSpawning - Boolean
  - Whether mobs should naturally spawn.
* doTileDrops - Boolean
  - Whether blocks should have drops.
* keepInventory - Boolean
  - Whether the player should keep items in their inventory if they die.
* mobGriefing - Boolean
  - Whether creepers, endermen, ghasts, and withers should be able to change blocks or zombies, skeletons, and zombie pigmen can pick up items.

[↑ Back to Top ↑](#top)

---

## Gamerules Command
### Description
Lists the set gamerules for a given world.
### Usage
`/mv gamerules [WORLD]`
### Aliases
`/mv gamerules`
`/mvgamerules`
`/mv rules`
`/mvrules`
### Permission
`multiverse.core.gamerule.list`
### Details
Lists all the gamerules with set values for a given world.

[↑ Back to Top ↑](#top)

---

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

---

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
Causes several of the startup messages to be hidden when silent mode is enabled.  May also apply to other messages later.

[↑ Back to Top ↑](#top)

---

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

---

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