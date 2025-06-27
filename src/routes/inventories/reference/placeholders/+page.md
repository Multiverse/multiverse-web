---
title: "Placeholders"
---

Similar to the new [placeholders in Multiverse-Core](/core/reference/placeholders), Multiverse-Inventories also supports placeholders with PlaceholderAPI. 

There is 2 types of placeholders, `world` and `group`. The format is `%multiverse-inventories_world_<placeholder>_[worldname]%` and `%multiverse-inventories_group_<placeholder>_[groupname]%`
respectively. World name and group name is optional for online players and can be automatically detected based on player's location. If you have a world with multiple groups, you may want to specify the exact groupname instead.

## Big list o' placeholders

### world

- `%multiverse-inventories_world_groups%`

### group

- `%multiverse-inventories_group_name%`
- `%multiverse-inventories_group_worlds%`
- `%multiverse-inventories_group_shares%`
- `%multiverse-inventories_group_players%`
- `%multiverse-inventories_group_playercount%`
