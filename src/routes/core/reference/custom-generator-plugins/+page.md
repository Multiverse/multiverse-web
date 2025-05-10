---
title: "Custom Generator Plugins"
---

Here you will find a list of open-source generator plugins. This list is not exhaustive, and any generator plugin will work with Multiverse. We are also not affiliated with any of these plugins.

## How to use generator plugins with Multiverse

1. Place the generator's jar in your plugins folder.
2. Start your server
3. Use the [generators command](/core/fundamentals/commands-usage/#Generators-Command). This will verify that the generator loaded properly. You should see its name appear:
   ```
   /mv generators
   ====[ Multiverse Generator List ]====
   VoidGenerator
   SkylandsPlus
   ```
4. Then simply use the create command to create the world with a generator.
   ```
   /mv create voidworld normal --generator VoidGenerator
   ```
5. Some generators allow you to specify ID to customise how the world is generator. For example, VoidGenerator allows you to specify the biomes as follows.
   ```
   /mv create coldworld normal --generator VoidGenerator:FROZEN_OCEAN
   ```

## [Terra](https://modrinth.com/plugin/terra)

**Description**: Terra is an incredibly powerful data-driven world generator. It allows you to create a world exactly to your specifications, with no knowledge of Java required.

**Author**: [dfsek](https://modrinth.com/user/dfsek)

**Github**: https://github.com/PolyhedralDev/Terra

**Discord**: https://discord.com/invite/PXUEbbF

## [Terraform Generator](https://www.spigotmc.org/resources/terraformgenerator-1-18-2-1-21-4.75132/)

**Description**: TerraformGenerator is a world generator plugin that aims to provide an enhanced vanilla feel.

**Author**: [Hex_27](https://www.spigotmc.org/resources/authors/hex_27.23764/)

**GitHub**: https://github.com/Hex27/TerraformGenerator

**Discord**: https://discord.gg/yW7JcqM

## [VoidGen](https://www.spigotmc.org/resources/fork-of-voidgen-1-21-3-supported.121721/)

**Description**: All in one super lightweight Void World Generator

**Author**: [niconekouwu](https://www.spigotmc.org/resources/authors/niconekouwu.1963482/)

**Github Wiki**: https://github.com/NicoNekoDev/VoidGen/blob/master/docs/tutorial.md

**GitHub**: https://github.com/NicoNekoDev/VoidGen

## [CleanroomGenerator](https://dev.bukkit.org/projects/cleanroomgenerator)

**Description**: Generates a nice flat landscape for building anything you could want!

**Author**: [NVX](https://github.com/NVX)

**Github Wiki**: https://github.com/nvx/CleanroomGenerator/wiki

**GitHub**: https://github.com/nvx/CleanroomGenerator
