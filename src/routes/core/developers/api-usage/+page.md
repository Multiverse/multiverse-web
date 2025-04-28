---
title: "API Usages"
---

## Creating a new world

```java
coreApi.getWorldManager()
        .createWorld(CreateWorldOptions.worldName("test_nether")
                .environment(World.Environment.NETHER)
                .seed(12345)
                .generateStructures(true))
        .onFailure(reason -> {
            // send error message
        })
        .onSuccess(world -> {
            // send success message
       });
```



## Teleport to a destination with our safety teleporter

```java
coreApi.getDestinationsProvider().parseDestination("e:test_nether:10,10,10:90:0")
        .peek(destination -> {
            coreApi.getSafetyTeleporter().to(destination)
                    .checkSafety(false)
                    .teleport(Bukkit.getOnlinePlayers().stream().toList());
        })
        .onEmpty(() -> {
            this.getLogger().warning("Failed to parse destination!");
        });
```

