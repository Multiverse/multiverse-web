---
title: FAQ
---

## What is Multiverse-Inventories?
Multiverse-Inventories is a plugin that allows groups of worlds to have their own set of inventories/stats for each player.  Multiverse-Inventories is a module for Multiverse-Core, which means you MUST be running Multiverse-Core to use Multiverse-Inventories. See the [getting started guide](/inventories/fundamentals/basic-usage) for a very brief overview!

## Why is it not working?
Chances are it _appears_ to be not working because you have given yourself '*' permission which causes you to automatically have [bypass permissions](/inventories/reference/permissions-list#Bypass-Permissions).  If this is __not__ the case, come chat with us on [Discord](https://discord.gg/NZtfKky) or open an [issue](https://github.com/Multiverse/Multiverse-Inventories/issues).

## What all can be shared?
Multiverse-Inventories can share the following things among worlds in a world group:

* Inventory contents (`inventory_contents`)
* Off-hand item (`off_hand`)
* Armor (`armor_contents`)
* Ender chest (`ender_chest`)
* Health / max health (`hit_points`, `max_hit_points`)
* Hunger, saturation, exhaustion (`food_level`, `saturation`, `exhaustion`)
* Experience — level, XP bar, total XP (`xp`, `lvl`, `total_xp`)
* Potion effects (`potion_effects`)
* Bed spawn location (`bed_spawn`)
* Remaining and maximum air (`remaining_air`, `maximum_air`)
* Fall distance and fire ticks (`fall_distance`, `fire_ticks`)

There are also optional shares that must be explicitly enabled with `/mvinv toggle <sharename>` before they have any effect: `economy`, `last_location`, `recipes`, `advancements`, and `game_statistics`.

Use `all` to share everything, or list individual share names. For the full reference including shorthand keywords, see the [Shares List](/inventories/reference/shares-list).

When something is **shared** it is the **same** across all worlds in the group. Anything not listed in a group's shares will be **separate** per world.

## What is a World Group?
A "World Group" is a collection of worlds with a specified set of _shares_.  Everything a world group **shares** will be the **same** for all worlds in the world group.  Any worlds on your server **not** in a world group are treated as if they are in a world group **alone** (_Which means they will have their own inventories/stats for each player!_).

## How do I create a World Group?
After installing, from in-game, use the create-group command. For example, to create a group called `smpgroup` containing `smp` and `smp_nether` sharing everything:

```
/mvinv create-group smpgroup smp,smp_nether all
```

See the [Basic Usage guide](/inventories/fundamentals/basic-usage) for a full walkthrough.

## How do I make worlds NOT share stuff?
Anything sharable that is **not** listed in a group will not be shared between the worlds in that group.  If you want a world that does not share anything with any other world, simply do not put it into a group.  To rephrase, any world not in a group will have its _own_ set of inventories/stats for each player.

## Is there a way admins can ignore the effects of this plugin?
Yes!  There are permissions available of this.  Please refer to the [list of permissions](/inventories/reference/permissions-list).

## Can I export playerdata back to a vanilla world?

Short answer: It is currently not possible. Multiverse-Inventories stores all its data in its own plugin folder and does not touch the vanilla playerdata directly at all. The only way is to install Multiverse-Inventories in the other server you are transferring your world to and copy over the Multiverse-Inventories plugin folder contents as well.
