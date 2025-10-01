---
title: "Destinations"
---

## Index
- [World Destinations](#World-Destinations)
- [Anchor Destinations](#Anchor-Destinations)
- [Exact Destinations](#Exact-Destinations)
- [Player Destinations](#Player-Destinations)
- [Cannon Destinations](#Cannon-Destinations)
- [Bed Destinations](#Bed-Destinations)
- [Portal Destinations](#Portal-Destinations)

## Destination Permissions

Destinations require permissions to be teleported to using [`/mvtp`](/core/fundamentals/commands-usage/#Teleport-Command). By default you require `multiverse.teleport.self.<destination>` and `multiverse.teleport.self.<destination>.<world>`. This can be changed with the `use-finer-teleport-permission` config option in [config.yml](/core/reference/configuration-file/) to only require the `multiverse.teleport.self.<destination>` permission. When migrating from MV4 to MV5 this option is set to `false` but for new installs of the plugin this is set to `true`.

## World Destinations

World destinations can be prefixed with a `w:` but it is not required unless you are including a direction. If no prefix is found for a destination, it is assumed to be a world. You can also add a direction to spawn a player in a world just like with portals.

### Examples

- `/mvtp world`
- `/mvtp w:world`
- `/mvtp w:world:se`

### Permissions

`multiverse.teleport.self.w`
`multiverse.teleport.other.w`

If finer permissions is enabled: `multiverse.teleport.self.w.<worldname>`

## Anchor Destinations

[Anchors](/core/how-to/manage-anchors/) should be used if you have a place you want to go frequently. Using the `/mv anchor set <name>` command to first create an [anchor](/core/how-to/manage-anchors/), then you can then use it in any command that takes a destination.

### Examples

`/mvtp a:myplace`

### Permissions

`multiverse.teleport.self.a`
`multiverse.teleport.other.a`

If finer permissions is enabled: `multiverse.teleport.self.a.<anchorname>`

## Exact Destinations

Exact destinations are useful if you know exactly where someone should spawn, but they're difficult to set, as that's a lot to type! Luckily, an easy way of setting an exact destination is by using: `/mvp modify destination e:@here` this will set the destination to an exact dest of your current location, **including where you are looking**. This is great if you want people to spawn looking at your awesome creations! Relative positions are also supported, so you can use `~,~1,~` to spawn a player one block above the current player's coordinates.

### Examples

`/mvtp e:world:0,0,0`  
`/mvtp e:world:0,0,0:0:0`
`/mvtp e:world:~,~,~`  
`/mvtp e:world:~,~1,~:0:0`

### Permissions

`multiverse.teleport.self.e`
`multiverse.teleport.other.e`

If finer permissions is enabled: `multiverse.teleport.self.e.<worldname>`

## Player Destinations

Player destinations are exactly what they sound like, they will always teleport you to a _specific_ player! If that player is not online, you will not teleport, or if you're using a portal, it will act as if it's inactive. If a player tries to teleport to themselves, nothing will happen.

### Examples

`/mvtp pl:fernferret`

### Permissions

`multiverse.teleport.self.pl`
`multiverse.teleport.other.pl`

If finer permissions is enabled: `multiverse.teleport.self.pl.<playername>`

## Cannon Destinations

:::caution[unfinished]
Cannon destinations are not implemented in MV5 yet
:::
The thing you have to remember with Cannon Destinations is that **you will never see a cannon**. This basically creates an exact destination with a velocity. The reason it's a different dest type entirely is due to the fact that we have provided a convince method: `cannon-X` where X is a velocity.

### Examples

`/mvtp cannon-2`  
`/mvtp ca:world:x,y,z:pitch:yaw:speed`

### Permissions

`multiverse.teleport.self.ca`
`multiverse.teleport.other.ca`

If finer permissions is enabled: `multiverse.teleport.self.ca.<worldname>`

## Bed Destinations

Takes a player to the bed that the specified player will spawn at if they die. For own's player bed location, use `playerbed`.

### Examples

`/mvtp b:playername`
`/mvtp b:playerbed` - teleports the player to their own bed.

### Permissions

`multiverse.teleport.self.b`
`multiverse.teleport.other.b`

If finer permissions is enabled: `multiverse.teleport.self.pl.<playername>`

## Portal Destinations

:::note[Note]
Requires [Multiverse-Portals](/portals/)
:::

Portal destination types teleport the player to the specified portal. They are ONLY available if you have [Multiverse-Portals](/portals/) installed. If you want players to face a different direction when being placed at the destination, you can add any of the following with a colon (as shown twice below) `n,e,s,w,ne,nw,se,sw` (or with full names: `north,east,south,west,northeast,northwest,southeast,southwest`)

### Examples

`/mvtp p:portal`  
`/mvtp p:portal:n`  
`/mvtp p:portal:sw`

### Special case

When you're _standing_ inside a portal (let's say `PortalB`), if you want to set the destination of another (`PortalA`) to **the center of that portal facing the rounded direction**, you can simply use `/mvp modify destination e:@here`. This will set the destination of the selected _source_ portal (`PortalA`) to the portal you're standing in _plus_ the cardinal direction (`p:portal:se`). This makes it a snap to set the directions of portals without any lookups!

### Permissions

`multiverse.teleport.self.p`
`multiverse.teleport.other.p`

If finer permissions is enabled: `multiverse.teleport.self.p.<portalname>`
