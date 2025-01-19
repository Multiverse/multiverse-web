---
title: "Destinations"
---

- [World Destinations](#World-Destinations)
- [Anchor Destinations](#Anchor-Destinations)
- [Exact Destinations](#Exact-Destinations)
- [Player Destinations](#Player-Destinations)
- [Cannon Destinations](#Cannon-Destinations)
- [Bed Destinations](#Bed-Destinations)
- [Portal Destinations](#Portal-Destinations)
  - [Special case](#Special-Case)


## World Destinations
`/mvtp world`
`/mvtp w:world` 
`/mvtp w:world:se`
 
**Permissions**   
`multiverse.teleport.self.w`   
`multiverse.teleport.other.w`

World destinations can be prefixed with a `w:` but it is not required unless you are including a direction. If no prefix is found for a destination, it is assumed to be a world. You can also add a direction to spawn a player in a world just like with portals.

## Anchor Destinations
`/mvtp a:myplace`
 
**Permissions**   
`multiverse.teleport.self.a`   
`multiverse.teleport.other.a`

Anchors should be used if you have a place you want to go frequently. Using the `/mv anchor NAME` command to first create an anchor, you can then use it in any command that takes a destination.

## Exact Destinations
`/mvtp e:world:0,0,0`   
`/mvtp e:world:0,0,0:0:0`
 
**Permissions**   
`multiverse.teleport.self.e`   
`multiverse.teleport.other.e`

Exact destinations are useful if you know exactly where someone should spawn, but they're difficult to set, as that's a lot to type! Luckily, an easy way of setting an exact destination is by using: `/mvpm dest here` this will set the destination to an exact dest of your current location, __including where you are looking__. This is great if you want people to spawn looking at your awesome creations!

## Player Destinations
`/mvtp pl:fernferret`

**Permissions**   
`multiverse.teleport.self.pl` (Note: This will do nothing, but it's included for completeness)   
`multiverse.teleport.other.pl`

Player destinations are exactly what they sound like, they will always teleport you to a _specific_ player! If that player is not online, you will not teleport, or if you're using a portal, it will act as if it's inactive. If a player tries to teleport to themselves, nothing will happen.

## Cannon Destinations
`/mvtp cannon-2`   
`/mvtp ca:world:x,y,z:pitch:yaw:speed`
 
**Permissions**   
`multiverse.teleport.self.ca`   
`multiverse.teleport.other.ca`

The thing you have to remember with Cannon Destinations is that __you will never see a cannon__. This basically creates an exact destination with a velocity. The reason it's a different dest type entirely is due to the fact that we have provided a convince method: `cannon-X` where X is a velocity.

## Bed Destinations
`/mvtp b:playername`

`/mvtp b:playerbed` - Legacy backwards compatibility, teleports the player to their own bed.
 
**Permissions**   
`multiverse.teleport.self.b`   
`multiverse.teleport.other.b`

Takes a player to the bed that [playername] will spawn at if they die.

## Portal Destinations
:::note[Note]
Requires [Multiverse-NetherPortals](#todo)
:::
`/mvtp p:portal`   
`/mvtp p:portal:n`   
`/mvtp p:portal:sw`
 
**Permissions**   
`multiverse.teleport.self.p`   
`multiverse.teleport.other.p`

These are examples of the `PORTAL` destination type. Portal destination types are ONLY available if you have [Multiverse-Portals](https://github.com/Multiverse/Multiverse-Portals/wiki) installed. If you want players to face a different direction when being placed at the destination, you can add any of the following with a colon (as shown twice above) `n,e,s,w,ne,nw,se,sw` (or with fullnames: `north,east,south,west,northeast,northwest,southeast,southwest`)

### Special case
When you're *standing* inside a portal (let's say `PortalB`), if you want to set the destination of another (`PortalA`) to **the center of that portal facing the rounded direction**, you can simply use `/mvpm dest here`. This will set the destination of the selected *source* portal (`PortalA`) to the portal you're standing in *plus* the cardinal direction (`p:portal:se`). This makes it a snap to set the directions of portals without any lookups!