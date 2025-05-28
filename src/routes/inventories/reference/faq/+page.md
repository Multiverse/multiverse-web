---
title: FAQ
---

## What is Multiverse-Inventories?
Multiverse-Inventories is a plugin that allows groups of worlds to have their own set of inventories/stats for each player.  Multiverse-Inventories is a module for Multiverse-Core, which means you MUST be running Multiverse-Core to use Multiverse-Inventories. See the [[Basic Multiverse Inventories Tutorial|Basics-(Inventories)]] for a very brief overview!

## Why is it not working?
Chances are it _appears_ to be not working because you have given yourself '*' permission which causes you to automatically have [bypass permissions](/inventories/reference/permissions-list#Bypass-Permissions).  If this is __not__ the case, come chat with us on [Discord](https://discord.gg/NZtfKky) or open an [issue](https://github.com/Multiverse/Multiverse-Inventories/issues).

## What all can be shared?
Multiverse-Inventories currently allows you to share the following things among worlds in a world group:

* Inventories (inventory, inv)
* Health (health, hp)
* Experience (experience, exp, xp)
* Hunger (hunger, food)
* Bed Spawns (bed_spawn, bedspawn, bed, beds)

Any combination of these can be set for each world group.  When something is **shared** that means it is the **same** for all worlds sharing it.

To share all of these set a group's shares option to 'all' or '*'.  To share only some of them, simply list the ones you would like to share (using one of the terms in parenthesis above.)

For a complete up to date list check out: [[Shares List|Shares-List-(Inventories)]]

## What is a World Group?
A "World Group" is a collection of worlds with a specified set of _shares_.  Everything a world group **shares** will be the **same** for all worlds in the world group.  Any worlds on your server **not** in a world group are treated as if they are in a world group **alone** (_Which means they will have their own inventories/stats for each player!_).

## How do I create a World Group?

After installing, from in-game, run the command:

    /mvinv group

## How do I make worlds NOT share stuff?
Anything sharable that is **not** listed in a group will not be shared between the worlds in that group.  If you want a world that does not share anything with any other world, simply do not put it into a group.  To rephrase, any world not in a group will have its _own_ set of inventories/stats for each player.

## Is there a way admins can ignore the effects of this plugin?
Yes!  There are permissions available of this.  Please refer to the [list of permissions](/inventories/reference/permissions-list).

## How do I import inventories from an existing vanilla world?
You can **not** import/merge your vanilla inventories with Multiverse-Inventories. Once you install Multiverse-Inventories, your players will log in with the inventories they previously had.
**Why?** Bukkit based servers store the player's current inventory in player.dat in the default world. Multiverse-Inventories changes nothing about this behavior. Instead, the plugin swaps out the player's current inventory when they change worlds

## How do I allow players to teleport back to where they left off in a world?

Firstly, enable the last_location feature with `/mvinv toggle last_location`. Now, groups that are sharing ALL (or last_location specifically) will have a common last_location, and all ungrouped worlds will have their own last_location. 

For example, you have a group with world1 and world2 sharing last_location. If a player teleports from world2 to any world outside the group, they will return to the group's last_location in world2, even if you teleported them to world1. If the player teleports within world1 and world2, mvinv will not do anything, since they are sharing last_location.

## How do I disable last_location for a world or group?

By default last_location will always apply to all worlds and all teleports between worlds not sharing a common last_location. Removing the last_location share from a group WILL NOT disable it. If you want to disable last_location or have final control over when last_location applies, you can explore the following config options:
1. If you want to disable last_location for all ungrouped worlds, you can change the following config option: `/mvinv config use-optionals-for-ungrouped-worlds false`.
2. If you want to disable last_location for a specific group, you can use the following command: `/mvinv add-disabled-shares [group] last_location`.
3. If you want only apply last_location for specific teleports, you can change the following config option: `/mvinv config apply-last-location-for-all-teleports false`. Then, you have to use `/mv tp ll:worldname` to teleport to the player's last location.
