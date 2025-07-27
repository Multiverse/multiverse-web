---
title: "API Usages"
---

This pages provides examples and explanation for the common API usages of Multiverse-Core. It's impossible to cover all API methods in this guide, but rest assured we have [javadocs](https://multiverse.github.io/Multiverse-Core/javadoc/latest/) provided.

## Creating a new world

The following example creates a new world named `test_nether` in the Nether environment with a seed of `12345`. See the [CreateWorldOptions](https://multiverse.github.io/Multiverse-Core/javadoc/latest/org/mvplugins/multiverse/core/world/options/CreateWorldOptions.html) class for the full list of available methods.

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

## Deleting a world

The following example deletes the world named `test_nether` and only keeps the `paper-world.yml` file.

```java
coreApi.getWorldManager()
        .getWorld("test_nether")
        .peek(world -> {
            coreApi.getWorldManager()
                    .deleteWorld(DeleteWorldOptions.world(world).keepFiles(List.of("paper-world.yml")))
                    .onFailure(reason -> {
                        // send error message
                    })
                    .onSuccess(world -> {
                        // send success message
                    });
        })
        .onEmpty(() -> {
            // world not found
        });
```

## Get or Edit Multiverse World Properties

The following example gets the world named `test_nether` and changes its game mode. See the [MultiverseWorld](https://multiverse.github.io/Multiverse-Core/javadoc/latest/org/mvplugins/multiverse/core/world/MultiverseWorld.html) class for the full list of available property methods.

```java
coreApi.getWorldManager()
        .getWorld("test_nether")
        .peek(world -> {
            GameMode gamemode = world.getGameMode();
            if (gamemode == GameMode.CREATIVE) {
                world.setGameMode(GameMode.SURVIVAL);
            }

            // etc...

            // Required to save changes to disk immediately
            coreApi.getWorldManager().saveWorldsConfig();
        })
        .onEmpty(() -> {
            // world not found
        });
```

## Teleport to a destination with our safety teleporter

By using our [safety teleporter](https://multiverse.github.io/Multiverse-Core/javadoc/latest/org/mvplugins/multiverse/core/teleportation/AsyncSafetyTeleporter.html), you can utilise our block safety checking and vehicle teleport feature with ease. It also works well with our Destinations and uses papermc's async teleport.

The following example teleports the all online players to the world named `test_nether` at position x:10, y:10, z:10 with a pitch of 90 and a yaw of 0.

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

## Managing Anchors

The following example sets an anchor named `myanchor` at position x:0, y:0, z:0 in the world named `world`. If the anchor already exists, it's location will be overwritten.

```java
Location location = new Location(Bukkit.getWorld("world"), 0, 0, 0);
coreApi.getAnchorManager().setAnchor("myanchor", location);
```

Simple example of getting an existing anchor and deleting it

```java
coreApi.getAnchorManager().getAnchor("myanchor")
        .peek(anchor -> {
            // anchor found
            coreApi.getAnchorManager().deleteAnchor(anchor);
        })
        .onEmpty(() -> {
            // anchor not found
        });
```
