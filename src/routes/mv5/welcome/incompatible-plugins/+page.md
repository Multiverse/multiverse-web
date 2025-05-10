---
title: "Incompatible Plugins"
---

Multiverse 5 completely changes the internal structure of the plugin, and as such it is incompatible with existing 3rd-party plugins that depend on the old MV4 api. 


_**We strongly recommend that you update your plugins to use the [new MV5 api](/core/developers/developer-api-starter).**_

But do not fear! We have created a legacy compatibility plugin to ease this transition. However, this is only temporary, and we strongly encourage developers to update their plugin to use the refreshed MV5's api when as we move out of the alpha stage. You can download the compatibility plugin here: 

https://modrinth.com/plugin/multiverse-legacy-api 

### Tested working plugins
- StayPut
- DiscordSRV
- eco
- Dynmap-Multiverse
- SavageDeathChest
- BentoBox (v3.3.5 or later)

### Not working plugins
Currently there is been no reports on any plugins that are known to be incompatible after installing the legacy api. If you face any issues, please contact us on [Discord](https://discord.gg/NZtfKky)!

### Implemented v4 API classes

```
[Multiverse-Core]
- Core
- MultiverseWorld
- MVWorldManager
- MVRespawnEvent
- MVWorldDeleteEvent
- AnchorManager
- MVDestination
- DestinationFactory
- MVPlayerTouchedPortalEvent
- MVTeleportEvent
- AnchorManager

[Multiverse-Inventories]
- GameModeChangeShareHandlingEvent
- WorldChangeShareHandlingEvent
- WorldGroupManager
- WorldGroup

[Multiverse-Portals]
- MVPortalEvent
- MVPortal
```
