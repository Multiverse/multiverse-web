---
title: "Commands Usage"
---

If you're looking for the [Multiverse-Core](/core/fundamentals/commands-usage), [Multiverse-NetherPortals](/netherportals/fundamentals/commands-usage) or [Multiverse-Inventories](/inventories/fundamentals/commands-usage) Command References, click the links!

## Index
1. [Config Command](#Config-Command)
1. [List Command](#List-Command) 
2. [Select Command](#Select-Command)
3. [Wand Command](#Wand-Command)
4. [Info Command](#Info-Command)
5. [Create Portal Command](#Create-Portal-Command)
6. [Remove Portal Command](#Remove-Portal-Command)
7. [Modify Portal Command](#Modify-Portal-Command)
8. [Debug Command](#Debug-Command)

## Introduction
In Multiverse 5, we have included a handy new help system. To access this help, simply type: [`/mv help`](/core/fundamentals/commands-usage)

In order to properly read this command reference, we'll walk through reading the "usage" of a command. 

#### Command Case
Whenever reading this wiki or the in-game `/mv` help, you should remember that items in __ALL CAPS__ should be replaced with a variable. Items in lowercase should be typed exactly how they appear. 

#### Optional vs. Required Parameters
Items inside square braces (`[]`) are __OPTIONAL__ where items inside angular braces (`<>`) are __REQUIRED__ 

## Config Command

#### Description
Allows you to view or modify the configuration of Multiverse-Portals.

#### Usage
```java
/mvp config <property> [value]
```

#### Example
- `/mvp config teleport-entities true`

#### Permission
`multiverse.portal.config`

[↑ Back to Top ↑](#top)

## List Command

#### Description
Displays a listing of all portals.

![portals list](https://github.com/Multiverse/Multiverse-Portals/wiki/images/portallist.png)

#### Usage
```java
/mvp list [world]
```

#### Example
- `/mvp list`
- `/mvp list space`

#### Permission
`multiverse.portal.list`

[↑ Back to Top ↑](#top)

## Select Command

#### Description
Selects a portal so you can perform multiple modifications on it.

#### Usage
`/mvp select <portal>`

#### Example
`/mvp select spaceportal`

#### Permission
`multiverse.portal.select`

[↑ Back to Top ↑](#top)

## Wand Command

#### Description
Gives a Portal Creation Wand (wooden axe by default), used to select areas for portal creation. This will only work if you are NOT using WorldEdit, unless the WorldEdit or MultiVerse wands are changed to a different item.

#### Usage
```java
/mvp wand
```

#### Permission
`multiverse.portal.givewand`

[↑ Back to Top ↑](#top)

## Info Command

#### Description
Displays information about a portal.

#### Usage
```java
/mvp info <portal>
```

#### Example
- `/mvp info spaceportal`

#### Permission
`multiverse.portal.info`

[↑ Back to Top ↑](#top)

## Create Portal Command

#### Description:
Creates a new portal, assuming you have a region selected (use the [wand](#Wand-Command) to select a region). The destination can be set to where you want the portal to go, otherwise, it will be set to teleport all players to the position you were at when you created it.

[Destination](/core/reference/destinations) can either another portal (`p:portalname`), world (`w:worldname`), position (`e:worldname:x,y,z:pitch:yaw`).

#### Usage:
```java
/mvp create <name> [destination]
```

#### Example:
- `/mvp create spaceportal space`
- `/mvp create newportal` - Creates a portal without destination. You need to set a destination with [modify command](#Modify-Portal-Command) before using the portal.

#### Permission:
`multiverse.portal.create`

[↑ Back to Top ↑](#top)

## Remove Portal Command

#### Description
Remove the portal whose name is given.

#### Usage:
```java
/mvp remove <name>
```

#### Example:
- `/mvp remove spaceportal`

#### Permission:
`multiverse.portal.remove`

[↑ Back to Top ↑](#top)

## Modify Portal Command

#### Description
Allows you to modify all values that can be set on the selected portal. The target portal must be [selected](#Select-Portal-Command) first if `[portal]` is omitted. Values that can be set include owner, dest, and loc (owner, destination, and location, respectively)

#### Usage
```java
/mvp modify [portal] <property> <value>
```

#### Example
- `/mvp modify spaceportal owner Elizacat`

#### Permission:
`multiverse.portal.modify`

#### PROPERTIES that can be changed:
*   `owner`
*   `destination` - Use multiverse [destination format](/core/reference/destinations)
*   `location` - Use `@selected-region` for player with wand, or the format `WORLD:X,Y,Z:X,Y,Z`
*   `price`
*   `currency`
*   `safe-teleport`

[↑ Back to Top ↑](#top)

## Debug Command

#### Description
Instead of teleporting you to a place when you walk into a portal you will see the details about it. With no params, the command toggles the current on/off state.

#### Usage
`/mvp debug [on|off]`

#### Permission:
`multiverse.portal.debug`

[↑ Back to Top ↑](#top)
