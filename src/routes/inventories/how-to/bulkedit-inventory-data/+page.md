---
title: Bulk Edit Inventory Data
---

:::warning
All bulkedit actions **CANNOT BE UNDONE**! Please make sure you **BACKUP YOUR DATA** before running these commands.
:::

## Bulk Edit Commands Overview

### Available Commands
[`/mvinv bulkedit globalprofile clear <players> [--clear-all-playerprofiles]`](/inventories/fundamentals/commands-usage/#Bulkedit-Global-Profile-Clear-Command)

[`/mvinv bulkedit globalprofile modify <property> <value> <players>`](/inventories/fundamentals/commands-usage/#Bulkedit-Global-Profile-Modify-Command)

[`/mvinv bulkedit playerprofile clear <players> <groups|worlds> [profile-type] [--include-groups-worlds]`](/inventories/fundamentals/commands-usage/#Bulkedit-Player-Profile-Clear-Command)

[`/mvinv bulkedit playerprofile delete <sharable> <players> <groups|worlds> [profile-type] [--include-groups-worlds]`](/inventories/fundamentals/commands-usage/#Bulkedit-Player-Profile-Delete-Command)

### General notes on Syntax
- `<groups|worlds>` - Comma-separated list of groups or/and worlds. To mix groups and worlds, separate them with a semicolon. Examples: `world=test`, `group=survival`, `group=survival,creative;world=world1,world2`
- `[profile-type]` - Only required if `enable-gamemode-share-handling` is set to true in configuration file. It will target the different inventory data per gamemode, just like how that feature works.
- Use the shorthand `@all` to select all players, groups + worlds, or profile types.

## Common Bulk Edit Use Cases

:::warning
Please **DOUBLE CHECK** the syntax of your commands to make sure you are deleting the correct data!!!
:::

### Reset all data for a World/Group

The most common use case is to reset all data for a world or group, usually when a world is being regenerated and you want to wipe all inventory data to start fresh.

Example for deleting all data for a group named `survival` for all players:
```java
/mvinv bulkedit playerprofile clear @all group=survival @all
```

Example for deleting all data for a world named `creative1` for all players:
```java
/mvinv bulkedit playerprofile clear @all world=creative1 @all
```

### Reset a specific Sharable

Occasionally, you may want to "reset everyone's bed/respawn point" or "reset everyone's health". This can be done with any specific sharable. The following are examples with bed_spawn and health.

Example for deleting all bed data for all players for group named `survival`:
```java
/mvinv bulkedit playerprofile delete bed_spawn @all group=survival @all
```

Example for deleting all health data for all players for world named `gaming`:
```java
/mvinv bulkedit playerprofile delete health @all world=gaming @all
```

Example for deleting all health data for all players for all worlds and groups:
```java
/mvinv bulkedit playerprofile delete health @all @all @all
```

### Delete all data for a specific Player

Maybe the player did something really bad and you want to wipe their inventory data. This can be done by selecting a specific player instead of using `@all` like the previous examples.

Example for deleting all data from all worlds and groups for a player named `benthecat10`:
```java
/mvinv bulkedit playerprofile clear benthecat10 @all @all
```

### Delete specific data for a specific Player

Sometimes, old misconfigure may cause certain players to have data that should not be there such as a player's last_location. This can be done by selecting a specific player instead of using `@all` like the previous examples.

Example for deleting all last_location data from world `creative1` for a player named `benthecat10`:
```java
/mvinv bulkedit playerprofile delete last_location benthecat10 world=creative1 @all
```
