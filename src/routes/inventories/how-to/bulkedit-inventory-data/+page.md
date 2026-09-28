---
title: Bulk Edit Inventory Data
---

:::warning
All bulkedit actions **CANNOT BE UNDONE**! Please make sure you **BACKUP YOUR DATA** before running these commands.
:::

## Global Profiles and Player Profiles

A **global profile** stores the information Multiverse-Inventories uses to track a player across worlds. Each player has one global profile, identified by their UUID, which is their unique player ID. It contains:

| Property | Purpose |
| --- | --- |
| `last-known-name` | The player's last recorded name. Multiverse-Inventories uses it to detect name changes and migrate their saved world and group profiles. |
| `last-world` | The last world recorded for the player. This helps Multiverse-Inventories detect when the player logs into a different world and load the appropriate data. |
| `load-on-login` | Whether to apply the player's saved Multiverse-Inventories data when they next join. Bulk edits to player profiles set this to `true` so the changes can take effect on login. It is reset to `false` when the player joins. |

A **player profile** stores the actual inventory items and other sharables, such as health, experience, and bed spawn, for a particular world or group. Separate profile types hold the inventories used by gamemode sharing.

For example, a player can have one global profile that records their name and last world, plus separate player profiles for the `survival` group and the `creative1` world.

Choose the command according to the data you want to change:

- `globalprofile modify` changes a tracking property in the global profile.
- `globalprofile clear` removes the global profile file. World and group inventory data remains unless you add `--clear-all-player-profiles`.
- `playerprofile clear` removes the selected world/group profiles and profile types. Use this when resetting inventories for a world or group.

## Bulk Edit Commands Overview

### Available Commands

[`/mvinv bulkedit globalprofile clear <players> [--clear-all-player-profiles]`](/inventories/fundamentals/commands-usage/#Bulkedit-Global-Profile-Clear-Command)

[`/mvinv bulkedit globalprofile modify <property> <value> <players>`](/inventories/fundamentals/commands-usage/#Bulkedit-Global-Profile-Modify-Command)

[`/mvinv bulkedit playerprofile clear <players> <groups/worlds> [profile-type] [--include-groups-worlds]`](/inventories/fundamentals/commands-usage/#Bulkedit-Player-Profile-Clear-Command)

[`/mvinv bulkedit playerprofile clone-player <from-player> <to-player> <groups/worlds> [profile-types] [--include-groups-worlds]`](/inventories/fundamentals/commands-usage/#Bulkedit-Player-Profile-Clone-Player-Command)

[`/mvinv bulkedit playerprofile clone-world-group <players> <from-group/world> <to-groups/worlds> [profile-types] [--include-groups-worlds]`](/inventories/fundamentals/commands-usage/#Bulkedit-Player-Profile-Clone-World-Group-Command)

[`/mvinv bulkedit playerprofile delete <sharable> <players> <groups/worlds> [profile-type] [--include-groups-worlds]`](/inventories/fundamentals/commands-usage/#Bulkedit-Player-Profile-Delete-Command)

[`/mvinv bulkedit migrate player-name <current-name> <new-name>`](/inventories/fundamentals/commands-usage/#Bulkedit-Player-Profile-Migrate-Player-Name-Command)

[`/mvinv bulkedit migrate inventory-serialization <nbt|bukkit>`](/inventories/fundamentals/commands-usage/#Bulkedit-Player-Profile-Migrate-Inventory-Serialisation-Command)

All commands require the `multiverse.inventories.bulkedit` permission.

### General notes on Syntax

- `<players>` and `<to-player>` - A player name or a comma-separated list of player names known to Multiverse-Inventories. Unknown names in these lists are ignored.
- `<groups/worlds>` and `<to-groups/worlds>` - Comma-separated list of groups or/and worlds. To mix groups and worlds, separate them with a semicolon. Examples: `world=test`, `group=survival`, `group=survival,creative;world=world1,world2`
- `<from-player>` and `<from-group/world>` - A single source player or world/group to copy from. For a source world/group, use `world=creative1` or `group=survival`.
- `[profile-type]` or `[profile-types]` - A profile type or comma-separated list of profile types. These select the separate inventories per gamemode when `enable-gamemode-share-handling` is enabled. Omitting this argument selects all profile types.
- Use the shorthand `@all` to select all players, groups + worlds, or profile types in arguments that accept multiple values. It cannot be used for a single cloning source or the migration arguments.
- `--include-groups-worlds` (or `-i`) - Also includes the individual world profiles for worlds in the selected groups. For `clone-world-group`, this applies to the destination groups.
- `<sharable>` - Use the primary sharable name, such as `hit_points` for health. This command does not accept sharable aliases or share groups.

When cloning all profile types with `@all` or by omitting the profile-type argument, each existing source file replaces the destination file. If a source file is missing, the destination is left unchanged. When cloning only specific profile types, a missing or empty source profile clears that profile type at the destination.

## Common Bulk Edit Use Cases

:::warning
Please **DOUBLE CHECK** the syntax of your commands to make sure you are modifying the correct data!!!
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

Occasionally, you may want to "reset everyone's bed/respawn point" or "reset everyone's health". This can be done with any specific sharable. The following are examples with `bed_spawn` and `hit_points`.

Example for deleting all bed data for all players for group named `survival`:
```java
/mvinv bulkedit playerprofile delete bed_spawn @all group=survival @all
```

Example for deleting health data for all players for world named `gaming`:
```java
/mvinv bulkedit playerprofile delete hit_points @all world=gaming @all
```

Example for deleting health data for all players for all worlds and groups:
```java
/mvinv bulkedit playerprofile delete hit_points @all @all @all
```

### Delete all data for a specific Player

Maybe the player did something really bad and you want to wipe their inventory data. This can be done by selecting a specific player instead of using `@all` like the previous examples.

Example for deleting all data from all worlds and groups for a player named `benthecat10`:
```java
/mvinv bulkedit playerprofile clear benthecat10 @all @all
```

This clears the player's world and group profiles. To also remove their global profile, use `/mvinv bulkedit globalprofile clear benthecat10 --clear-all-player-profiles`.

### Delete specific data for a specific Player

Sometimes, old misconfigure may cause certain players to have data that should not be there such as a player's last_location. This can be done by selecting a specific player instead of using `@all` like the previous examples.

Example for deleting all last_location data from world `creative1` for a player named `benthecat10`:
```java
/mvinv bulkedit playerprofile delete last_location benthecat10 world=creative1 @all
```

### Copy data from one Player to another

Use `clone-player` to copy a player's profiles to another player, for example when moving to a new account. The selected destination profiles are overwritten.

Example for copying all world and group profiles from `benji_0224` to `benthecat10`, for all profile types:
```java
/mvinv bulkedit playerprofile clone-player benji_0224 benthecat10 @all @all
```

To copy only the profiles for the `survival` group:
```java
/mvinv bulkedit playerprofile clone-player benji_0224 benthecat10 group=survival @all
```

### Copy data between Worlds and Groups

:::warning
Inventories from two worlds **cannot be merged into one**. Choose which world's data to keep as the source. Cloning overwrites the selected destination profiles. It does not combine items from both inventories.
:::

Use `clone-world-group` to copy each selected player's profiles from one world or group to other worlds or groups. This keeps the same players and overwrites their selected destination profiles. The source must not also be a destination.

#### Keep existing inventories when introducing a shared Group

Suppose players have been playing in the standalone world `creative1`. You now want `creative1` and `creative2` to share inventories through a group named `creatives`, using each player's existing `creative1` data as their starting data for the group.

After [setting up the group and its shares](/inventories/fundamentals/basic-usage/#Creating-a-New-Group), make sure both the source world and destination group have data folders under Multiverse-Inventories. The command selects worlds and groups by those folders. It does not require an existing destination profile for every player. Then copy the saved world profiles into the group:

```java
/mvinv bulkedit playerprofile clone-world-group @all world=creative1 group=creatives @all
```

The first `@all` selects every known player. The last selects all profile types. Each player's existing `creative1` file is copied to their `creatives` file, replacing it if it already exists. Players without a source file are skipped. The group's configured shares determine which data is shared when they move between its worlds.

A newly configured group without a data folder will not be selected. Check the affected-profile summary before confirming the bulk edit.

#### Carry player progress into a replacement Group

Suppose you are replacing the worlds in `survival` with a new set of worlds in `survival_new`, but want players to keep their inventory data and progress. Once the destination group's data folder exists, copy each player's old group profiles to it. Add `--include-groups-worlds` to also update the individual world profiles in the destination group:

```java
/mvinv bulkedit playerprofile clone-world-group @all group=survival group=survival_new @all --include-groups-worlds
```

This copies the selected profiles, including all their stored sharables, rather than only inventory items. Stored locations still refer to their original worlds. The command does not move those locations to the replacement worlds. The destination group should contain different worlds from the source group if you want the original worlds' profiles to remain unchanged.

### Migrate data after a Player Name change

Player name changes are normally handled automatically when the player logs in. Use `migrate player-name` only if automatic migration failed, to rename the stored world and group profile files from the old player name to the new one.

For each world or group, if files exist under both the old and new names, migration leaves both files unchanged and logs a warning. It continues with the other worlds and groups. This check applies even if the destination file is empty. Existing files are not merged or overwritten.

:::note
Check that `migrate player-name` is listed in `/mvinv help` before using it. Some builds do not register this manual command. Automatic name migration is handled separately.
:::

```java
/mvinv bulkedit migrate player-name benji_0224 benthecat10
```
