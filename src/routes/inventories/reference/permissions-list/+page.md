---
title: "Permissions List"
---

## Command Permissions

- [multiverse.inventories.adddisabledshares](/inventories/fundamentals/commands-usage/#Add-Disabled-Shares-Command)
- [multiverse.inventories.addshares](/inventories/fundamentals/commands-usage/#Add-Shares-Command)
- [multiverse.inventories.addworlds](/inventories/fundamentals/commands-usage/#Add-Worlds-Command)
- [multiverse.inventories.bulkedit](/inventories/fundamentals/commands-usage/#Bulkedit-Global-Profile-Clear-Command)
- [multiverse.inventories.cache.invalidate](/inventories/fundamentals/commands-usage/#Cache-Invalidate-All-Command)
- [multiverse.inventories.cache.stats](/inventories/fundamentals/commands-usage/#Cache-Stats-Command)
- [multiverse.inventories.checkgroupconflict](/inventories/fundamentals/commands-usage/#Check-Group-Conflict-Command)
- [multiverse.inventories.config](/inventories/fundamentals/commands-usage/#Config-Command)
- [multiverse.inventories.creategroup](/inventories/fundamentals/commands-usage/#Create-Group-Command)
- [multiverse.inventories.deletegroup](/inventories/fundamentals/commands-usage/#Delete-Group-Command)
- [multiverse.inventories.give](/inventories/fundamentals/commands-usage/#Give-Command)
- [multiverse.inventories.group](/inventories/fundamentals/commands-usage/#Group-Command)
- [multiverse.inventories.help](/inventories/fundamentals/commands-usage/#Help-Command)
- [multiverse.inventories.info](/inventories/fundamentals/commands-usage/#Info-Command)
- [multiverse.inventories.list](/inventories/fundamentals/commands-usage/#List-Command)
- [multiverse.inventories.migrate](/inventories/fundamentals/commands-usage/#Migrate-Command)
- [multiverse.inventories.removegroup](/inventories/fundamentals/commands-usage/#Remove-Group-Command)
- [multiverse.inventories.removeshares](/inventories/fundamentals/commands-usage/#Remove-Shares-Command)
- [multiverse.inventories.removeworlds](/inventories/fundamentals/commands-usage/#Remove-Worlds-Command)
- [multiverse.inventories.toggle](/inventories/fundamentals/commands-usage/#Toggle-Command)

## Bypass Permissions
:::note
For bypass permissions to work, you must enable it in the [config.yml file](/inventories/reference/configuration-file/) by setting `enable-bypass-permissions` to true.
:::

`mvinv.bypass.group.NAME`

`mvinv.bypass.world.NAME`

`mvinv.bypass.group.*` - for all groups

`mvinv.bypass.world.*` - for all worlds

`mvinv.bypass.*` - for all groups and worlds

Please note you must "negate" these nodes if you have '*' permissions in your permission manager if you do not want to bypass the features of the plugin.
