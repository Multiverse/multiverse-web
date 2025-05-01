---
title: Commands Usage
---

If you're looking for the [Multiverse-Core](/core/fundamentals/commands-usage), [Multiverse-Portals](/portals/fundamentals/commands-usage) or [Multiverse-NetherPortals](/netherportals/fundamentals/commands-usage) Command References, click the links!

## Index
1. [Group Command](#Group-Command)
1. [Info Command](#Info-Command)
1. [Import Command - for importing from MultiInv/WorldInventories](#Import-Command)
1. [List Command](#List-Command)
1. [Reload Command](#Reload-Command)

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

## Migrate Command

#### Description:
Migrate data from MultiInv, WorldInventories, or PerWorldInventory.

#### Usage:
```java
/mvinv migrate {MultiInv|WorldInventories}
```

#### Examples:
- `/mvinv migrate MultiInv`   
- `/mvinv migrate WorldInventories`

#### Permission:
`multiverse.inventories.import`

[↑ Back to Top ↑](#top)

## List Command

#### Description:
Displays a list of groups.

#### Usage:
`/mvinv list`

#### Examples:
`/mvinv list`   

#### Permission:
`multiverse.inventories.list`

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
