---
title: "Customise World Creation"
---

## Creating a flat/superflat world
The command to create a very basic flat world: `/mv create <world-name> normal --world-type flat`

:::note[Note]
Note that environment MUST be `normal`.
:::

### Customizing superflat world
You can customize the layers and biome of your superflat world using the `--generator-settings` flag. The value for this flag is a JSON string that defines the layers and biome. For example, to create a flat world with a layer of stone, a layer of grass, and a layer of sea lanterns, you can use the following command:

```java
/mv create flat normal --world-type flat --generator-settings {"layers":[{"block":"stone","height":1},{"block":"grass_block","height":1},{"block":"sea_lantern","height":1}],"biome":"plains"}
```

## Creating a void world
Void worlds are worlds that are completely empty, with no blocks or terrain (except for a single spawnpoint). There are two main methods to create a void world in Minecraft.

### Method 1: Using flat world with THE_VOID biome
By using the `--generator-settings` flag introduced about, you can create a flat world with the `the_void` biome. This will create a world that is completely empty, except for 33x33 stone platform. You can use the following command to create a void world:

```java
/mv create thevoid normal --world-type flat --generator-settings {"layers":[{"block":"air","height":1}],"biome":"the_void","features":true}
```

### Method 2: Using void generator plugin
Firstly, install this VoiGen generator plugin: https://www.spigotmc.org/resources/fork-of-voidgen-1-21-3-supported.121721/

Creating a void world is as shown below. See https://github.com/NicoNekoDev/VoidGen/wiki/Parameters for more customization options of the void world.
```java
/mv create <worldname> normal --generator VoidGen --world-type flat
```

If you are importing a world and want to continue it being void in new chunks:
```java
/mv import <worldname> normal --generator VoidGen --world-type flat
```

:::note[Note]
Multiverse team is not affiliated with the void gen plugin. This is just provided as an option for users who want to create void worlds.
:::

## Single biome worlds
You can create a world with a single biome using the `--biome` flag. For example, to create a normal world with only the desert biome, you can use the following command:
```java
/mv import <worldname> normal --biome @single:desert
```

All the biomes can be found here: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/block/Biome.html (note that some biomes may not be available in certain Minecraft versions)
