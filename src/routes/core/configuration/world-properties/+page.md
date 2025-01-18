---
title: "World Properties"
---

:::caution[Unfinished]
This page is not finished!

Todo:
 - Update to MV5
:::

Here are the various properties of worlds that can be set in `worlds.yml`. __Normally you should not have to edit this file__, but if you are an advanced user, you may. This is a typical plugin configuration file and follows the same syntax. __All of these settings can be changed from in-game__ using the [Modify Command](/core/getting-started/command-reference#Modify-Command).

## Index
 - [World Permissions](#World-Permissions)
 - [Setting the Spawn World](#Default-Spawn-World)
 - [Animals](#Animals)
 - [Monsters](#Monsters)
 - [Environment](#Environment)
 - [Generators](#Generators)
 - [World Fees](#World-Fees)
 - [PVP](#PVP)
 - [Alias](#Alias)
 - [World Blacklist](#World-Blacklist)
 - [Seed](#Seed)
 - [Scaling](#Scale)
 - [Respawn World](#Respawn-World)
 - [Keep Spawn in Memory](#Keep-Spawn-in-Memory)
 - [Weather](#Weather)
 - [Game Mode](#Game-Mode)
 - [Difficulty](#Difficulty)
 - [Hunger](#Hunger)
 - [World Visibility](#World-Visibility)
 - [Auto-Heal](#Auto-Heal)
 - [Adjust Spawn](#Adjust-Spawn)
 - [Portal Forming](#Portal-Form)
 - [Time](#Time)
 - [Player Limit](#Player-Limit)
 - [Allow Flight](#Allow-Flight)
 - [Auto Load](#Auto-Load)
 - [Bed Respawn](#Bed-Respawn)

## World Permissions
You can easily control who can enter various worlds in Multiverse 2. To allow people access to a world, simply grant them access to `multiverse.access.WORLDNAME` where WORLDNAME is the name of the world. By default (with PermissionsBukkit) people _can_ enter newly created worlds. You can give users `multiverse.access.*` to let them access all worlds, or set the same to false to deny access to all worlds.

## Default Spawn World
Multiverse 2.2+ allows you to set what world users will spawn in. This does _not_ have to be the world that is in `server.properties`. To do this, make sure you have the following 2 values set in your [`config.yml`](config.yml). You can set this value ingame by using `/mv conf firstspawnoverride true` and `/mv conf firstspawnworld myworld`. We advise against editing the file, but here is the clip:

```
...
# If true, this will ensure players, on first spawn, go to the spawn
# that you've set with Multiverse. Set to false if you use another
# spawn plugin.
firstspawnoverride: true

# This is the world you want players to spawn in. It does *NOT*
# have to be the world in server.properties!
firstspawnworld: world
...
```

## Animals
### Spawning
The overall control of the spawning of animals on a world. If true, animals (pigs, chickens, cows and squids) will spawn in this world.

**Type:**   
`boolean`

### Exceptions
Exceptions allow you to say 'I want animals to spawn, but **NOT** sheep.' The coolest part about exceptions is the fact that they simply negate the `spawn` value. This concept may seem a bit complex at first, but you can use it to do some really cool things.

**Type:**   
`List<String>`

### Spawn rate
The spawn rate defines how many ticks there are between attempts to spawn animals, see [this](https://jd.bukkit.org/org/bukkit/World.html#setTicksPerAnimalSpawns(int)) for details. Note that a value of -1 here signifies that the world should use the default value

**Type:**
`Integer`

#### EXAMPLE: A world with ONLY pigs:

    animals:
        spawn: false
        exceptions:
        - pig

You should read this as "Animals __can not__ spawn __except__ for pigs."

#### EXAMPLE: A world with NO pigs:

    animals:
        spawn: true
        exceptions:
        - pig

You should read this as "Animals __can__ spawn __except__ for pigs."

**In Game Usage:**   
[`/mv modify set animals true`](Command-Reference#wiki-modify-command-set)- Enables animal spawning in the current world.   
[`/mv modify set animals false`](Command-Reference#wiki-modify-command-set)- Disables animal spawning in the current world.   
[`/mv modify add pig animals`](Command-Reference#wiki-modify-command-set) - Adds the animal type `pig` to the exemption list.   
[`/mv modify remove pig animals`](Command-Reference#wiki-modify-command-set) - Removes the animal type `pig` to the exemption list.   
[`/mv modify clear animals`](Command-Reference#wiki-modify-command-set) - Clears the animal exemption list.

[↑ Back to Top ↑](#top)



## Monsters
### Spawning
The overall control of the spawning of monsters on a world. If true, monsters (anything not in the animals list above) will spawn in this world. Monsters _will not_ spawn in a world where the [difficulty](#Difficulty) is set to `peaceful`, even if this variable is set to true.

**Type:**   
`boolean`

### Exceptions
exceptions allow you to say 'I want monsters to spawn, but **NOT** creepers.' The coolest part about exceptions is the fact that they simply negate the `spawn` value. This concept may seem a bit complex at first, but you can use it to do some really cool things.

**Type:**   
`List<String>`

### Spawn rate
The spawn rate defines how many ticks there are between attempts to spawn animals, see [this](https://jd.bukkit.org/org/bukkit/World.html#setTicksPerAnimalSpawns(int)) for details. Note that a value of -1 here signifies that the world should use the default value

**Type:**
`Integer`

#### EXAMPLE: A world with ONLY creepers:

    monsters:
        spawn: false
        exceptions:
        - creeper

You should read this as "Monsters __can not__ spawn __except__ for creepers."

#### EXAMPLE: A world with NO creepers:

    monsters:
        spawn: true
        exceptions:
        - creeper

You should read this as "Monsters __can__ spawn __except__ for creepers."

**In Game Usage:**   
[`/mv modify set monsters true`](Command-Reference#wiki-modify-command-set)- Enables monster spawning in the current world (and disables auto-heal).   
[`/mv modify set monsters false`](Command-Reference#wiki-modify-command-set)- Disables monster spawning in the current world (and enables auto-heal).   
[`/mv modify add creeper monsters`](Command-Reference#wiki-modify-command-set) - Adds the monster type `creeper` to the exemption list.   
[`/mv modify remove creeper monsters`](Command-Reference#wiki-modify-command-set) - Removes the monster type `creeper` to the exemption list.   
[`/mv modify clear monsters`](Command-Reference#wiki-modify-command-set) - Clears the monster exemption list.

[↑ Back to Top ↑](#top)



## Environment
The type of environment this world is under. Can currently be `NETHER`, `THE_END`, and `NORMAL`. You __should not__ change this value in the config.

__Type:__   
`String`

__Example:__   
`environment: NORMAL`

__In Game Usage:__   
[`mv create myworld NORMAL`](Command-Reference#create-command)   
[`mv import mynether NETHER`](Command-Reference#import-command)

[↑ Back to Top ↑](#top)



## Generators
Multiverse 2 allows you to use custom world generators via a [[Custom Generator Plugin|Custom-Generator-Plugins]]. This line contains the information multiverse needs to load your worlds properly. You __should not__ touch this value unless you know what you're doing.

This value may or may not be present. That's okay.

__Type__:   
`String`

__Example:__   
`generator: BukkitFullOfMoon`

__In Game Usage:__   
[`/mv create moon NORMAL -g BukkitFullOfMoon`](Command-Reference#create-command)   

[↑ Back to Top ↑](#top)



## World Fees
You can charge users to enter various worlds. The coolest part is you don't have to use an econ plugin! You can simply use Minecraft items!

### Amount vs. Currency
The `amount` field is __how much__ you want to charge people. This can be an integer or double. (1 or 1.75)

The `currency` field is __what__ you want to charge people. This is an item id, or `-1` if you want to use virtual dollars in an econ plugin.

### EXAMPLE: Charging 5 Dirt to enter a world

    entryfee:
        amount: 5
        currency: 3

### EXAMPLE: Charging $13.75 to enter a world
__NOTE:__ You MUST have a [valid economy plugin installed](https://github.com/FernFerret/AllPay/wiki/Supported-plugins) to use 'money' (currency value -1).

    entryfee:
        amount: 13.75
        currency: -1

__In Game Usage:__   
`mvm set currency 3` - Sets the item to dirt   
`mvm set price 3` - Requires 3 of item

[↑ Back to Top ↑](#top)



## PVP
Whether or not players may harm each other in this world. If set to true, they may.

__Type:__   
`boolean`

__Example:__   
`pvp: true`

__In Game Usage:__   
`mvm set pvp false`

[↑ Back to Top ↑](#top)



## Alias
World aliases allow you to name a world differently than what the folder name is. This lets you choose fancy names for your worlds while keeping the folders nice and neat. 

The alias attribute can also include a color and a style. Worlds will show up colored and styled when your users chat and via [`/mv list`](Command-Reference#list-command) or [`/mv who`](Command-Reference#who-command).

The color must be one of these:   
`AQUA, BLACK, BLUE, DARKAQUA, DARKBLUE, DARKGRAY, DARKGREEN, DARKPURPLE, DARKRED, GOLD, GRAY, GREEN, LIGHTPURPLE, RED, YELLOW, WHITE`

The style must be one of these:
`NORMAL, MAGIC, BOLD, STRIKETHROUGH, UNDERLINE, ITALIC`

![Example of world aliases with color](https://user-images.githubusercontent.com/8557785/59570127-01e84880-9059-11e9-853f-acc1a3349ad6.png)

### Example: Set alias to *FernWorld* (Italic and green)
__In Game Usage:__   
`mvm set style italic`   
`mvm set color green`   
`mvm set alias FernWorld`

__In the config:__

    alias: FernWorld
    color: GREEN
    style: ITALIC

[↑ Back to Top ↑](#top)



## World Blacklist
The world blacklist allows you to specify worlds that people __cannot go__ to from the specified world. For example, if you add `world_gold` to `world`'s `worldblacklist`, then players could teleport TO `world_gold` from `world` but not back.

**Type:**   
`List<String>`

**Example:** 

    worldblacklist:
    - world_fish
    - world_dog

[↑ Back to Top ↑](#top)



## Seed
The seed for this world. Do not change unless you are aware of the consequences of doing so (**WILL** cause chunk errors!).

__Type:__   
`String`

__Example:__   
`seed: 'gargamel'`

__In Game Usage:__   
__This command cannot be used in-game. You cannot change the seed of a generated world.__

[↑ Back to Top ↑](#top)



## Scale
Scaling of worlds when using Multiverse-NetherPortals. Setting this value will have no effect on anything but Multiverse-NetherPortals. See [the Multiverse-Netherportals documentation](https://github.com/Multiverse/Multiverse-NetherPortals/wiki/Simple-tutorial) for how this works.

__Type:__   
`double`

__NOTE:__ If you see a `scaling` value, you can delete it. It got carried over in early versions of the migrator and the value is now `scale`.

__In Game Usage:__   
`mvm set scale 1.2`

[↑ Back to Top ↑](#top)



## Respawn World
The world you will respawn to if you die in this world. This value can be the same as this world.

__Type:__   
`String`

__Example:__   
`respawnworld: 'hellplanet'`

__NOTE:__ If you see a `temprespawn` value, you can delete it. It got carried over in early versions of the migrator.

__In Game Usage:__   
`mvm set respawnWorld MyWorld`

[↑ Back to Top ↑](#top)



## Keep Spawn in Memory
If you disable this, bukkit will not keep this world's spawn chunks in memory, resulting in less memory used by your server when people are not logged in.

__Type:__   
`boolean`

__Example:__   
`keepspawninmemory: true`

__In Game Usage:__   
`mvm set memory false`

[↑ Back to Top ↑](#top)



## Weather
If this value is true, a world will have weather events, if false, it will not. If you want to turn off the current storm, just type `/mvm set weather false`, wait for the weather to subside, and then `/mvm set weather true`.

__Type:__   
`boolean`

__Example:__   
`weather: true`

__In Game Usage:__   
`mvm set weather false`

[↑ Back to Top ↑](#top)



## Game Mode
Allows you to set the type of mode a specific world is set to. Creative mode gives players unlimited resources while Survival makes boys become men. For more information about inventories on servers that use this feature, see our [[FAQ on Inventories|FAQ#wiki-inv]]

If you want to allow certain players to ignore the game mode set in a world, there's a special permission: 
```
mv.bypass.gamemode.[*|WORLDNAME]
```
This permission is under a different root namespace because it will be off by default.

__Type:__   
`String`

__Example:__   
`gamemode: SURVIVAL`

__In Game Usage:__   
`mvm set mode survival`   
`mvm set mode creative`

[↑ Back to Top ↑](#top)



## Difficulty
Allows you to set the difficulty of a given world. All possible values are: `0, 1, 2, 3, peaceful, easy, normal, hard`. Remember that there are only 4 difficulties, we just let you set it with either the int or the string. They are always stored as ints in the config.

__Type:__   
`String` OR `Integer`

__Example:__   
`difficulty: 1`

__In Game Usage:__   
`mvm set diff 1`   
`mvm set difficulty easy`   
`mvm set diff hard`   
`mvm set diff peaceful`

[↑ Back to Top ↑](#top)



## Hunger
Allows you to enable or disable hunger depletion in each world.

__Type__:
`Boolean`

__Example:__
`hunger: true`

__In Game Usage:__
`mvm set hunger true`
`mvm set hunger false`

[↑ Back to Top ↑](#top)



## World Visibility
This property allows you to have a world that exists, but does not show up in lists. When users chat from this world, if `worldnameprefix` is set to `true` and it is hidden, their chat will appear with no world prefix.

__Type:__   
`Boolean`

__Example:__   
`hidden: false`

__In Game Usage:__   
`mvm set hidden true`

[↑ Back to Top ↑](#top)



## Auto-Heal
If your [difficulty](#Difficulty) is set to `peaceful`, by default, players will regain health. If you do not want them to, simply set this variable to false. This setting has no effect on worlds with a [difficulty](#Difficulty) greater than `peaceful` or `0`.

__Type__:
`Boolean`

__Example:__
`autoheal: true`

__In Game Usage:__
`mvm set autoheal true`
`mvm set autoheal false`

[↑ Back to Top ↑](#top)



## Adjust Spawn
By default, Multiverse will fix spawns that are recorded in poor locations. By default the Minecraft server uses something like a `getTopBlock()` method and sets the spawn's `Y` coordinate somewhere in the middle of the earth. This is usually not safe to teleport a player directly too, so Multiverse will search for the nearest safe location.

Sometimes this is non ideal. If you do not want multiverse to do this, simply turn this variable on. If you set a spawn in an unsafe location (over a pit of lava), Multiverse will automatically disable this variable for you.

If you want to set this variable when importing a world, simply add a `-n` to your `/mv create` or `/mv import` command:

```
/mv create spaceworld normal -g NullTerrainGenerator -n
```

__Type__:
`Boolean`

__Example:__
`adjustspawn: true`

__In Game Usage:__
`mvm set adjustspawn true`  
`mvm set adjustspawn false`

[↑ Back to Top ↑](#top)


## Portal Form
Multiverse allows you to control whether or not users are allowed to create portals.

Allow portal forming must be `NONE`, `ALL`, `NETHER` or `END`.

__Type__
`String`

__Example__: 
`portalform: ALL`

__In Game Usage__:
`mvm set portalform none`
`mv modify portalform nether` 

Results are fairly self explanatory.

[↑ Back to Top ↑](#top)


## Time
Multiverse inclues _very basic_ support for setting world times. It does not scale time, or lock it or rewind it. It is provided mainly as an api for higher level things like server managers to set the time to something.

__Type__:
`String`

__Example:__
**This value is not present in the `config.yml`**

__In Game Usage:__
`mvm set time true`  
`mvm set time false`

[↑ Back to Top ↑](#top)


## Player Limit
Multiverse has the ability to set a maximum number of players allowed in a world.  By default, the limit is set to `-1` indicating no limit.  The setting is to specify how many players are allowed.

A player may bypass this limit with the following permissions:
`mv.bypass.playerlimit.*` for all worlds.
`mv.bypass.playerlimit.NAME` for specific worlds.

__Type__:
`Integer`

__Example:__
`playerLimit: -1`

__In Game Usage:__
`mvm set playerlimit 10`  
`mvm set limit -1`

[↑ Back to Top ↑](#top)


## Allow Flight
Multiverse has basic support for disabling flight per world.  By default, this setting is true, which will allow flight.  Set to false to disable flight.  Note: This does not affect Creative mode.

A player may bypass this setting with the following permissions:
**NOT YET IMPLEMENTED!** (Waiting for permissions overhaul.)

__Type__:
`Boolean`

__Example:__
`allowflight: true`

__In Game Usage:__
`mvm set flight false`  
`mvm set allowflight true`

[↑ Back to Top ↑](#top)


## Auto Load
Tells Multiverse to automatically load this world on startup.

__Type__:
`Boolean`

__Example:__
`autoload: true`

__In Game Usage:__
`mvm set autoload false`

[↑ Back to Top ↑](#top)


## Bed Respawn
If `bedrespawn` is set to true, players will be able to respawn at their bed in this world.

__Type__:
`Boolean`

__Example:__
`bedrespawn: true`

__In Game Usage:__
`mvm set bedrespawn false`

[↑ Back to Top ↑](#top)
