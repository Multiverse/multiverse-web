---
title: Configure Last Location
---

Last Location is a feature in Multiverse-Inventories that allows players to return to their last known position in a world/group when they teleport back to it. This is particularly useful for servers with multiple worlds, as it enhances the player experience by allowing them to pick up where they left off.

## Enabling Last Location

By default, Last Location is **DISABLED**. To enable it, please run the following command:
```java
/mvinv toggle last_location
```

You should see a confirmation message indicating that Last Location has been enabled:
![Last Location Enabled](/inventories/last-location/last-location-toggle.png)

If you just want last location to apply to all worlds and groups, you are all set! If you want to have a deeper understanding of how Last Location works as well as more customization options, read on!

## Last Location Default Behavior
The following describes how Last Location works by default once it is enabled, without any additional configuration changes.

### How does it apply to groups and worlds?
For groups that are sharing `all` (or `last_location` specifically) will have a common `last_location`, and all ungrouped worlds will have their own `last_location`.  You can check your group shares by using the `/mvinv info <groupname>` command.

For example, you have a group with world1 and world2 sharing `last_location`. If a player teleports from world2 to any world outside the group, they will return to the group's `last_location` in world2, even if you teleported them to world1. If the player teleports between world1 and world2, mvinv will not do anything, since they are sharing `last_location`.

For ungrouped worlds, each world will have its own `last_location`. If a player teleports from world3 (ungrouped) to any other world, they will return to their last known position in world3 when they teleport back.

### How does the Last Location teleport work?
It works by doing a second teleport when a player teleports between worlds that do not share `last_location`. This means that there will be TWO teleports happening in quick succession:
1. The first teleport is the one you issue (e.g., `/mvtp world2`).
2. The second teleport is the Last Location teleport, which takes the player to their last known position in the target world.

Hence, if you have another plugin that tracks teleports such as for using `/back`, you may find that records two teleports instead of one. The only way to avoid this is to use the `ll` destination by using `/mvtp` command or mv portals for the teleport. For example, to teleport to your last location in world2, you would use `/mvtp ll:world2`.

## Customizing Last Location Behavior
By default `last_location` will always apply to all worlds and all teleports between worlds not sharing a common `last_location`. Removing the `last_location` share from a group **WILL NOT disable** it. If you want to disable `last_location` or have final control over when `last_location` applies, you can explore the following config options.

### Disable for all ungrouped worlds
If you want to disable `last_location` for all ungrouped worlds, you can change the following config option:
```java
/mvinv config use-optionals-for-ungrouped-worlds false
```

### Disable for specific group/world
If you want to disable `last_location` for a specific group, you can use the following command:
```java
/mvinv add-disabled-shares <group-name> last_location
```

If you want to disable `last_location` for a specific ungrouped world, you will have to first create a group for that world, then use the above command to disable `last_location` for that group. This is typically useful for your hub or lobby world where you do not need players to return to their last location there.

For example: (replace `<worldname>` with your actual world name and use any group name you like)
```java
/mvinv create-group nollgroup <worldname>
/mvinv add-disabled-shares nollgroup last_location
```

### Disable for all teleports
If you want only apply `last_location` for only specific teleports, you can change the following config option:
```java
/mvinv config apply-last-location-for-all-teleports false
```

Then, you have to use `/mvtp ll:worldname` to teleport to the player's last location. Any other teleport by other commands or plugins will not apply `last_location`.
