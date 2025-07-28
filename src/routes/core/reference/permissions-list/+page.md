---
title: "All Multiverse-Core Permissions"
---

## Help Permissions

[multiverse.help](/core/fundamentals/commands-usage/#Help-Command) - Allow users to use /mv help

## Access Permissions

multiverse.access.[worldname] - Allows users to use the specified world

[multiverse.exempt.[worldname]](/core/fundamentals/world-properties/#World-Fees) - Allows users to be exempted from paying for the world

[mv.bypass.gamemode.[worldname]](/core/fundamentals/world-properties/#Game-Mode) - Allows users to bypass the configured `gamemode` when accessing the world

[mv.bypass.playerlimit.[worldname]](/core/fundamentals/world-properties/#Player-Limit) - Allows users to bypass the configured `playerlimit` when accessing the world

mv.bypass.joinlocation - Allows users to bypass the configured `join-location` in config.yml when logging into the server.

## Teleport Permissions

[multiverse.teleport.self.[type].[finer-permission]](/core/fundamentals/commands-usage/#Teleport-Command) - Allows users to teleport themselves to another world.

[multiverse.teleport.other.[type].[finer-permission]](/core/fundamentals/commands-usage/#Teleport-Command) - Allows users to teleport themselves and others to another world.

**Note**: If `enforceaccess` is on (set to `true`), they can only teleport to worlds of which they have the `multiverse.access.WORLD` permission to, by default this is `false` and they have access to **ALL** worlds.

### Teleport types:

- `w` = World
- `p` = Portal
- `a` = Anchor
- `e` = Exact destination (coordinates)
- `pl` = Player
- `ca` = Cannon
- `b` = Bed

**See Also:** [Details on Destinations](/core/reference/destinations)

## Info Permissions

[multiverse.core.confirm](/core/fundamentals/commands-usage/#Confirm-Command)

[multiverse.core.coord](/core/fundamentals/commands-usage/#Coordinate-Command)

[multiverse.core.info](/core/fundamentals/commands-usage/#Information-Command)

[multiverse.core.list.who](/core/fundamentals/commands-usage/#Who-Command)

[multiverse.core.list.who.all](/core/fundamentals/commands-usage/#Who-All-Command)

[multiverse.core.list.worlds](/core/fundamentals/commands-usage/#List-Command)

---

## World Management Permissions

[multiverse.core.create](/core/fundamentals/commands-usage/#Create-Command) - Allows users to create worlds

[multiverse.core.clone](/core/fundamentals/commands-usage/#Clone-Command) - Allows users to copy worlds

[multiverse.core.import](/core/fundamentals/commands-usage/#Import-Command) - Allows users to import worlds

[multiverse.core.modify](/core/fundamentals/commands-usage/#Modify-Command) - Allows users to modify worlds

[multiverse.core.regen](/core/fundamentals/commands-usage/#Regen-Command)

[multiverse.core.remove](/core/fundamentals/commands-usage/#Remove-Command)

[multiverse.core.load](/core/fundamentals/commands-usage/#Load-Command)

[multiverse.core.unload](/core/fundamentals/commands-usage/#Unload-Command)

[multiverse.core.delete](/core/fundamentals/commands-usage/#Delete-Command)

## Spawn Permissions

[multiverse.core.spawn.other.[worldname]](/core/fundamentals/commands-usage/#Spawn-Command)

[multiverse.core.spawn.self.[worldname]](/core/fundamentals/commands-usage/#Spawn-Command)

[multiverse.core.spawn.set](/core/fundamentals/commands-usage/#Set-Spawn-Command)

## Entities Management Permissions

[multiverse.core.entityspawnconfig.info](/core/fundamentals/commands-usage/#Entity-Spawn-Config-Info-Command)

[multiverse.core.entityspawnconfig.modify](/core/fundamentals/commands-usage/#Entity-Spawn-Config-Modify-Command)

[multiverse.core.purge](/core/fundamentals/commands-usage/#Purge-Entities-Command)

[multiverse.core.purgeall](/core/fundamentals/commands-usage/#Purge-All-Entities-Command)

## Anchor Permissions

[multiverse.core.anchor.create](/core/fundamentals/commands-usage/#Anchor-Set-Command)

[multiverse.core.anchor.list](/core/fundamentals/commands-usage/#Anchor-List-Command)

[multiverse.core.anchor.delete](/core/fundamentals/commands-usage/#Anchor-Delete-Command)

## Misc Permissions

[multiverse.core.config](/core/fundamentals/commands-usage/#Config-Command)

[multiverse.core.reload](/core/fundamentals/commands-usage/#Reload-Command) - Allows users to reload the config files

[multiverse.core.debug](/core/fundamentals/commands-usage/#Debug-Command)
