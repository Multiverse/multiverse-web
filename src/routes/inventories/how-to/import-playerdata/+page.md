---
title: "Import/Migrate Player Data"
---

This guide will walk you through the steps to import vanilla player data or migrate data from another plugin into Multiverse-Inventories using the [Multiverse-InventoriesImporter](https://modrinth.com/plugin/multiverse-inventoriesimporter) plugin.

:::important
Before proceeding, ensure that you have latest version of [Multiverse-InventoriesImporter](https://modrinth.com/plugin/multiverse-inventoriesimporter) plugin installed on your server.
:::

## Importing Vanilla Player Data

:::important
Please ensure your server is running **PaperMC (or a fork such as purpur)**, as the vanilla import does not work on Spigot or Bukkit servers due to API limitations.
:::

Before getting started, here is a brief explanation of how Multiverse-Inventories interacts with vanilla player data. Bukkit based servers store the player's current inventory in the `playerdata` folder in the default world **ONLY**. There will **NOT** be a separate `playerdata` folder for each world. Multiverse-Inventories changes nothing about this behavior. Instead, the plugin swaps out the player's current inventory when they change worlds.

Hence, when you import a vanilla world with `playerdata` folder from another server, the inventories data for it will never be loaded. To get back your inventories data, you will need to import the playerdata from the vanilla world into Multiverse-Inventories using the `playerdata import` command provided by the [Multiverse-InventoriesImporter](https://modrinth.com/plugin/multiverse-inventoriesimporter) plugin.

The command is as follows, replacing `<world>` with the name of the world you are importing the playerdata for:
```java
/mvinv playerdata import <world>
```

If you have the default nether and end worlds also tied to this world, be sure to create groups for them first, before running the import command. For example, if you are importing playerdata for a world named `smp`, and you have `smp_nether` and `smp_the_end` also tied to it, you would run:
```java
/mvinv group create smp,smp_nether,smp_the_end all
/mvinv playerdata import smp
```

After running this command, your playerdata should be imported into Multiverse-Inventories to the smp world and group(s) the world is in. You can remove the importer plugin after the import is complete if you have nothing else to import.

### Currently Supported Sharables
However, note that not all sharable data is supported yet. Currently, the following data types are **supported** for import: _Armor, Ender Chest, Exhaustion, Fall Distance, Fire Ticks, Food Level, Health, Inventory, Level, Off Hand, Remaining Air, Saturation, Total Experience_

Currently **unsupported** data types: _Advancements, Bed Spawn (i.e. respawn location), Game Statistics, Last Location, Maximum Air, Max Health, Potion Effects, Recipes_

## Migrating from Another Plugin

Previously, the migration code was built into Multiverse-Inventories itself. However, to improve maintainability, the migration functionality has been moved to the [Multiverse-InventoriesImporter](https://modrinth.com/plugin/multiverse-inventoriesimporter) plugin. This should not affect most users, but if you were previously using the migration commands built into Multiverse-Inventories, please note the change.

To migrate data from another plugin, you will need to use the `migrate` command provided by the Multiverse-InventoriesImporter plugin. The command is as follows, replacing `<plugin>` with the name of the plugin you are migrating from (e.g., `MultiInv`, `WorldInventories`, or `PerWorldInventory`):
```java
/mvinv migrate <plugin>
```

You can remove the importer plugin after the migration is complete if you have nothing else to import.

### Currently Supported Plugins
- MultiInv
- WorldInventories
- PerWorldInventory
