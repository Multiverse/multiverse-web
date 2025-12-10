---
title: FAQ
---

## What is Multiverse-Inventories?
Multiverse-Inventories is a plugin that allows groups of worlds to have their own set of inventories/stats for each player.  Multiverse-Inventories is a module for Multiverse-Core, which means you MUST be running Multiverse-Core to use Multiverse-Inventories. See the [getting started guide](/inventories/fundamentals/basic-usage) for a very brief overview!

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

For a complete up to date list check out: [Shares List](/inventories/reference/shares-list)

## What is a World Group?
A "World Group" is a collection of worlds with a specified set of _shares_.  Everything a world group **shares** will be the **same** for all worlds in the world group.  Any worlds on your server **not** in a world group are treated as if they are in a world group **alone** (_Which means they will have their own inventories/stats for each player!_).

## How do I create a World Group?
After installing, from in-game, run the command:

    /mvinv group

## How do I make worlds NOT share stuff?
Anything sharable that is **not** listed in a group will not be shared between the worlds in that group.  If you want a world that does not share anything with any other world, simply do not put it into a group.  To rephrase, any world not in a group will have its _own_ set of inventories/stats for each player.

## Is there a way admins can ignore the effects of this plugin?
Yes!  There are permissions available of this.  Please refer to the [list of permissions](/inventories/reference/permissions-list).

## Can I export playerdata back to a vanilla world?

Short answer: It is currently not possible. Multiverse-Inventories stores all its data in its own plugin folder and does not touch the vanilla playerdata directly at all. The only way is to install Multiverse-Inventories in the other server you are transferring your world to and copy over the Multiverse-Inventories plugin folder contents as well.
