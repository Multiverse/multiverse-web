---
title: "Commands Usage"
---

If you're looking for the [Multiverse-Core](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference), [Multiverse-NetherPortals](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference-(NetherPortals)) or [Multiverse-Inventories](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference-(Inventories)) Command References, click the links!

## <a name="top" href="#wiki-top">•</a>Index
1. [Introduction](#wiki-intro)
1. [List Command](#wiki-list)
1. [Select Command](#wiki-select)
1. [MVP Wand](#wiki-wand)
1. [Portal Information](#wiki-info)
1. [Create Portal](#wiki-create)
1. [Remove Portal](#wiki-remove)
1. [Modify Portal](#wiki-modify)
1. [Debug Mode](#wiki-debug)

---

## <a name="intro" href="#wiki-intro">•</a>Introduction
In Multiverse 2, we have included a handy new help system. To access this help, simply type:

[`/mv`](https://www.github.com/Multiverse/Multiverse-Core/wiki/Command-Reference#wiki-help)

In order to properly read this command reference, we'll walk through reading the "usage" of a command. 
#### Command Case
Whenever reading this wiki or the in-game `/mv` help, you should remember that items in __ALL CAPS__ should be replaced with a variable. Items in lowercase should be typed exactly how they appear. 
#### Optional vs. Required Parameters
Items inside square braces (`[]`) are __OPTIONAL__ where items inside curly braces (`{}`) are __REQUIRED__ 

---

## <a name="list" href="#wiki-list">•</a>List Command
#### Description:
Displays a listing of all portals.

[[https://github.com/Multiverse/Multiverse-Portals/wiki/images/portallist.png]]

#### Usage:
`/mvp list [WORLD]`
#### Example:
`/mvp list`

`/mvp list space`
#### Aliases:
`mvp list, mvpl, mvplist`
#### Permission:
`multiverse.portal.list`

---

## <a name="select" href="#wiki-select">•</a>Select Command
#### Description:
Selects a portal so you can perform multiple modifications on it.
#### Usage:
`/mvp select {PORTAL}`
#### Example:
`/mvp select spaceportal`
#### Aliases:
`mvp select, mvps, mvpselect`
#### Permission:
`multiverse.portal.select`

---

## <a name="wand" href="#wiki-wand">•</a>MVP Wand
#### Description:
Gives a Portal Creation Wand (wooden axe by default), used to select areas for portal creation. This will only work if you are NOT using WorldEdit, unless the WorldEdit or MultiVerse wands are changed to a different item.
#### Usage:
`/mvp wand`
#### Example:
`/mvp wand`
#### Aliases:
`mvp wand, mvpw, mvpwand`
#### Permission:
`multiverse.portal.givewand`

---

## <a name="info" href="#wiki-info">•</a>Portal information
#### Description:
Displays information about a portal.
#### Usage:
`/mvp info {PORTAL}`
#### Example:
`/mvp info spaceportal`
#### Aliases:
`mvp info, mvpi, mvpinfo`
#### Permission:
`multiverse.portal.info`

---

## <a name="create" href="#wiki-create">•</a>Create Portal
#### Description:
Creates a new portal, assuming you have a region selected (use the [wand](#wiki-wand) to select a region). The destination can be set to where you want the portal to go, otherwise, it will be set to teleport all players to the position you were at when you created it (`here` can also be used as the destination for the same purpose).

Destination can either another portal (`p:portalname`), world (`w:worldname`), position (e:WORLD:X,Y,Z[:PITCH:YAW]), or current position (`here`).
#### Usage:
`/mvp create {NAME} [DESTINATION]`
#### Example:
`/mvp create spaceportal space`
#### Aliases:
`mvp create, mvpc, mvpcreate`
#### Permission:
`multiverse.portal.create`

---

## <a name="remove" href="#wiki-remove">•</a>Remove Portal
#### Description:
Remove the portal whose name is given.
#### Usage:
`/mvp remove {NAME}`
#### Example:
`/mvp remove spaceportal`
#### Aliases:
`mvp remove, mvpr, mvpremove`
#### Permission:
`multiverse.portal.remove`

---

## <a name="modify" href="#wiki-modify">•</a>Modify Portal
#### Description:
Allows you to modify all values that can be set on the selected portal. The target portal must be [selected](#wiki-select) first if `[-p PORTAL]` is omitted. Values that can be set include owner, dest, and loc (owner, destination, and location, respectively)
#### Usage:
`/mvp modify {PROPERTY} [VALUE] [-p PORTAL]`
#### Example:
`/mvp modify owner Elizacat -p spaceportal`
#### Aliases:
`mvp modify, mvpm, mvpmodify`
#### Permission:
`multiverse.portal.modify`
#### PROPERTIES that can be changed:
*   `owner`
*   `dest` or `destination`
*   `loc` or `location`
*   `price`
*   `curr` or `currency`
*   `safe`

---

## <a name="debug" href="#wiki-debug">•</a>Debug Mode
#### Description:
Instead of teleporting you to a place when you walk into a portal you will see the details about it. With no params, the command toggles the current on/off state.
#### Usage:
`/mvp debug [on|off]`
#### Example:
`/mvp debug`
#### Aliases:
`mvp debug, mvpd, mvpdebug`
#### Permission:
`multiverse.portal.debug`
