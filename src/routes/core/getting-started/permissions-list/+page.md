---
title: "Permissions List"
---

# All Multiverse-Core Permissions

:::caution[Unfinished]
This page is not finished!

Todo:
 - Links
 - Update permissions to MV5
:::

## Help Permissions
`[multiverse.help](Command-Reference#help-command)`  - Allow users to use /mv help

## Access Permissions
`[multiverse.access.WORLDNAME](Permissions#wiki-perm)` - Allows users to use the specified world

`[multiverse.exempt.WORLDNAME](Permissions#wiki-perm)` - Allows users to be exempted from paying for the world

`[mv.bypass.gamemode.WORLDNAME](FAQ#modsopsplayers-keep-having-their-game-mode-switched)` - Allows users to bypass the configured `gamemode` when accessing the world

## Teleport Permissions
`[multiverse.teleport.self.TYPE](Command-Reference#teleport-command)` - Allows users to teleport themselves to another world.

`[multiverse.teleport.other.TYPE](Command-Reference#teleport-command)`- Allows users to teleport themselves and others to another world.

**Note**: If `enforceaccess` is on (set to `true`), they can only teleport to worlds of which they have the `multiverse.access.WORLD` permission to, by default this is `false` and they have access to **ALL** worlds.

### Teleport types:
- `w` = World
- `p` = Portal
- `a` = Anchor
- `e` = Exact destination (coordinates)
- `pl` = Player
- `ca` = Cannon
- `b` = Bed


---

## Info Permissions
`[multiverse.core.confirm](Command-Reference#confirm-command)`

`[multiverse.core.coord](Command-Reference#coordinate-command)`

`[multiverse.core.info](Command-Reference#information-command)`

`[multiverse.core.list.environments](Command-Reference#environment-command)`

`[multiverse.core.list.who](Command-Reference#who-command)`

`[multiverse.core.list.worlds](Command-Reference#list-command)`


---

## Create Permissions
`[multiverse.core.create](Command-Reference#create-command)` - Allows users to create worlds

`[multiverse.core.clone](Command-Reference#clone-command)` - Allows users to copy worlds

`[multiverse.core.import](Command-Reference#import-command)` - Allows users to import worlds

`[multiverse.core.modify](Command-Reference#modify-command)` - Allows users to modify worlds

`[multiverse.core.modify.add](Command-Reference#modify-command-addremove)` - Allows users to use the add portion of the modify command

`[multiverse.core.modify.clear](Command-Reference#modify-command-clear)` - Allows users to use the clear portion of the modify command

`[multiverse.core.modify.modify](Command-Reference#modify-command-addremove)`

`[multiverse.core.modify.remove](Command-Reference#modify-command-addremove)`

`[multiverse.core.modify.set](Command-Reference#modify-command-set)` - Allows users to use the `set` portion of the modify command

`[multiverse.core.reload](Command-Reference#reload-command)` - Allows users to reload the config files


---

## Spawn Permissions
`[multiverse.core.spawn.other](Command-Reference#spawn-command)`

`[multiverse.core.spawn.self](Command-Reference#spawn-command)`

`[multiverse.core.spawn.set](Command-Reference#set-spawn-command)`


---

## Delete Permissions
`[multiverse.core.delete](Command-Reference#delete-command)`

`[multiverse.core.purge](Command-Reference#purge-command)`

`[multiverse.core.regen](Command-Reference#regen-command)`

`[multiverse.core.remove](Command-Reference#remove-command)`

`[multiverse.core.unload](Command-Reference#unload-command)`


---

## Other Permissions
`multiverse.core.anchor`

`multiverse.core.config`

`multiverse.core.debug`

`multiverse.core.generator`

`multiverse.core.load`

`multiverse.core.sleep`

`multiverse.core.spout`

`multiverse.core.tp.*`

`multiverse.core.tp.self`

`multiverse.core.version`

`multiverse.core.silent`
