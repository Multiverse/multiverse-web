---
title: "Commands Usage"
---

If you're looking for the [Multiverse-Core](/core/fundamentals/commands-usage), [Multiverse-Portals](/portals/fundamentals/commands-usage) or [Multiverse-Inventories](/inventories/fundamentals/commands-usage) Command References, click the links!

## Index
1. [Link Command](#Link-Command)
2. [Unlink Command](#Unlink-Command)
3. [List Command](#List-Command)

## Introduction
For a complete reference on how to read this page, please refer to the [Multiverse-Core Command Reference Intro](/core/fundamentals/commands-usage)

The biggest difference with these commands is the __base__ command will be `/mvnp` rather than `/mv`. This is so you can determine which plugin a command belongs to. `/mvnp` comes from Multiverse-NetherPortals. If you want to see the in-game help for only the NetherPortals commands, you can type: [`/mvnp help`](/netherportals/fundamentals/commands-usage#Help-Command).

## Link Command

#### Description:
The link command allows you to basically set the destination of end or nether portals in a certain world.  Before specifying any worlds you must specify if this link is for End portals or Nether portals.  This will set ALL end or nether portals in the `from-world` to the `to-world`. If a `from-world` is not specified, the current world is used. The console requires both parameters.

This will **override** the standard [[Multiverse-NetherPortals Config|config.yml-(NetherPortals)]].

Another thing to note is that linking a given portal type in a world to itself will disable any of those portals in that world.

#### Usage:
```java
/mvnp link <end|nether> [from-world] <to-world>
```

#### Example:
- `/mvnp link nether world_nether`
- `/mvnp link nether Hell Sky`
- `/mvnp link nether "Spaced World" "Spaced Hell World"`
- `/mvnp link end TheEnd`
- `/mvnp link end Spawn BossWorld`

#### Permission:
`multiverse.netherportals.link`

[↑ Back to Top ↑](#top)

## Unlink Command

#### Description:
#### Details:
The Unlink command is basically the opposite of the [Link Command](#Link-Command). It allows you to remove the links you created there without ever having to touch a config file. It obviously will not let you remove links that do not exist. It only takes the `from-world`.

You must specify which type of portals to unlink, End or Nether.

Let's say you have the portals in `world` linked to `world_sky`, like this: `world -> world_sky`. If you wanted to remove this link, you would simply type `/mvnp unlink world` or if **you** were standing in `world` you could just type `/mvnp unlink` and that will unlink the current world.

#### Usage:
```java
/mvnp unlink <end|nether> [from-world]
```

#### Example:
- `/mv unlink nether`
- `/mv unlink nether world`
- `/mv unlink end`
- `/mv unlink end world`

#### Permission:
`multiverse.netherportals.unlink`

[↑ Back to Top ↑](#top)

## List Command

#### Description:
This command simply displays your portal links. This is an easy way of verifying that you have the correct flow set. The output will simply show you where each world will take a user when they build a portal there:

    world -> world_nether
    world_nether -> world_sky
    world_sky -> world

If this value is NOT set, for a given world, NetherPortals will first try spawning a user with it's predefined rules (if the world is WORLD\_nether it'll try to spawn in WORLD and vice versa). If those fail, it will follow notch's portal rules, which can cause unexpected things. If you want the most control, make sure EACH of your worlds show s up on the left side. You CAN link multiple worlds to the same world like this:

    world -> world_nether
    world_nether -> world
    world_sky -> world

This setup will make all portals in `world` go to `world_nether` and all portals in `world_nether` AND `world_sky` will go to world.

#### Usage:
`/mvnp list [PAGE #]`

#### Example:
`/mvnp list`
`/mvnp list 2`

#### Permission:
`multiverse.netherportals.show`

[↑ Back to Top ↑](#top)
