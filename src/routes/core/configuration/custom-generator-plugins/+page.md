---
title: "Custom Generator Plugins"
---


Here you will find a list of open-source generator plugins.

You may add your plugin using the [BukkitFullOfMoon](https://github.com/Dinnerbone/BukkitFullOfMoon) template, but be warned, if you don't post the source, your entry will be deleted.

## How to use generator plugins with Multiverse
1. Place the generator's jar in your plugins folder.
2. Start your server
3. Use the generator command. This will verify that the generator loaded properly. You should see its name appear:
    ```
    /mv gens
    --- Loaded Generator Plugins ---
    VoidGenerator SkylandsPlus 
    ```
4. Then simply use the create command to create the world with a generator.
    ```
    /mv create voidworld normal -g VoidGenerator
    ```
5. Some generators allow you to specify ID to customise how the world is generator. For example, VoidGenerator allows you to specify the biomes as follows.
    ```
    /mv create coldworld normal -g VoidGenerator:FROZEN_OCEAN
    ```

## [Terra](https://www.spigotmc.org/resources/terra.85151/)
__Description__: Terra is an incredibly powerful data-driven world generator. It allows you to create a world exactly to your specifications, with no knowledge of Java required.

__Author__: [dfsek](https://www.spigotmc.org/resources/authors/dfsek.597832/)

__Github__: https://github.com/PolyhedralDev/Terra

__Discord__: https://discord.com/invite/PXUEbbF

## [VoidGen](https://www.spigotmc.org/resources/voidgen.25391/)
__Description__: All in one super lightweight Void World Generator

__Author__: [xtkq](https://www.spigotmc.org/resources/authors/xtkq.35246/)

**GitHub**: https://github.com/xtkq-is-not-available/VoidGen

__Discord__: https://discord.com/invite/Q7yj32FMFh

## [CleanroomGenerator](https://dev.bukkit.org/projects/cleanroomgenerator)
__Description__: Generates a nice flat landscape for building anything you could want!

__Author__: [NVX](https://github.com/NVX)

__Github Wiki__: [Wiki](https://github.com/nvx/CleanroomGenerator/wiki)

__Source__: https://github.com/nvx/CleanroomGenerator
