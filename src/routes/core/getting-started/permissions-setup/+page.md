---
title: "Permissions Setup"
---

:::caution[Unfinished]
This page is not finished!

Todo:

- Links
  :::

:::tip[Can I just have all the permissions]
The big list of all permissions is at [[CHANGE ME PLEASE]]
:::

## Multiverse Permissions Plugin Support

Multiverse supports any plugin that adheres to the SuperPerms Bukkit Permissions API. As of now (6/16/2019) the working permission plugins are [LuckPerms](https://www.spigotmc.org/resources/luckperms-an-advanced-permissions-plugin.28140/) and [PermissionsEx](https://dev.bukkit.org/projects/permissionsEx).

## Multiverse World Permissions

Multiverse allows you to control who can enter worlds via permissions! When you create a world or import a world into Multiverse-Core, it automatically creates a permission: `multiverse.access.WORLDNAME`. If a player _has_ `multiverse.access.WORLDNAME`, then they can enter that world.

:::note[e]
Ensure you have `enforceaccess` **enabled** in your Multiverse [`config.yml`](https://github.com/Multiverse/Multiverse-Core/wiki/config.yml) to use this permission. If `enforceaccess` is set to `false` then _anyone_ can go to _any_ world and **all world-access permissions are ignored**.
:::

If you give a user `multiverse.access.*` they can go to all worlds.

### Multiverse Permissions

You can use: `multiverse.*` to give someone all permissions for Multiverse. If you only want to give someone access to all worlds, use: `multiverse.access.*` for example.

## Setting Permissions in-game

Multiverse has the courtesy to show which permission node is needed for a command if you enter a /command and it fails due to permissions. Having this info readily available to you in the game can save you some time looking up the permission, and allow you to enter that permission into a group on the spot if need be. An admin can simply enter permissions in as you need them. For example, you try to run [`/mvlist`](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference#list-command) and oh my you don't have permission, but you will be notified that you need `multiverse.world.list` permission node. Entering the command:

:::note[LuckPerms]
This command uses [LuckPerms](https://luckperms.net/), you will need to change it for your permissions plugin
:::

```
/lp <group/user> <group name or username> permission set multiverse.core.list true
```

For example:

```
/lp group admin permission set multiverse.core.list true
```

will add the permission to your admin group and voila! you have permission to use that command. MV has a lot of commands and permissions, so adding them in a need-to-use basis can sometimes be easier.

## Setting OP's

OP's by default have all the Multiverse permissions set to true. So the easiest way to give your admins all the Multiverse permissions is to just make them OP. Of course, this may not be the best option for everyone.

:::warning[Stuff breaks with OP!]
As _all_ permissions are enabled, this includes `mv.bypass.gamemode.*` - hence dissalowing multiverse gamemode management. Be aware of this when going down the route of OP
:::

## Sample Access Permissions Transcript

A lot of people seem to have trouble understanding how the access permissions work. This is an actual transcript of me (@FernFerret) playing on a test server, and typing exactly what happened. Whenever you see a `>` that means that I typed a command in the console.

```
11:18:38 [INFO] [world2]<fernferret> I do not have multiverse.core.list.worlds, I can't see any worlds
>perm player setperm fernferret multiverse.core.list.worlds true
11:18:59 [INFO] Player fernferret now has multiverse.core.list.worlds = true.
11:19:15 [INFO] [world2]<fernferret> cool. I can see the world list, but there are 0 worlds listed
>perm player setperm fernferret multiverse.access.world true
11:19:32 [INFO] Player fernferret now has multiverse.access.world = true.
11:19:42 [INFO] [world2]<fernferret> sweet. Now I can see the world 'world'
11:20:08 [INFO] [world2]<fernferret> I can't TP there though, I don't have *any* multiverse.teleport.X perm nodes
>perm player setperm fernferret multiverse.teleport.self.* true
11:20:26 [INFO] Player fernferret now has multiverse.teleport.self.* = true.
11:20:38 [INFO] [world]<fernferret> woo I'm in 'world'
11:20:54 [INFO] [world]<fernferret> now I can't tp to 'world' again, i need the spawn.self perm...
>perm player setperm fernferret multiverse.core.spawn.self true
11:21:05 [INFO] Player fernferret now has multiverse.core.spawn.self = true.
11:21:18 [INFO] [world]<fernferret> woo! now i'm at spawn!!!!!!111!
11:21:31 [INFO] [world]<fernferret> but I can't go back to world2...
11:21:34 [INFO] [world]<fernferret> I need some perms!
>perm player setperm fernferret multiverse.access.world2 true
11:21:44 [INFO] Player fernferret now has multiverse.access.world2 = true.
11:21:56 [INFO] [world2]<fernferret> hellz yea!!!!111! world2!!
11:24:05 [INFO] [world2]<fernferret> hmm ok, let's not give me the exact teleport perm... i'll test now!
11:24:15 [INFO] [world]<fernferret> ow...
11:24:20 [INFO] [world]<fernferret> i'm underground somewhere
11:24:25 [INFO] [world]<fernferret> the exact perm is dangerous
>perm player setperm fernferret multiverse.teleport.self.e false
11:24:40 [INFO] Player fernferret now has multiverse.teleport.self.e = false.
11:24:51 [INFO] [world]<fernferret> I went back to spawn
11:25:26 [INFO] [world]<fernferret> ok. I gave myself the false exact perm
11:25:36 [INFO] [world]<fernferret> but that gets checked _after_ the higher perm
11:25:48 [INFO] [world]<fernferret> so I  need to deny myself the parent, and just give myself the child perms
>perm player setperm fernferret multiverse.teleport.self.* false
11:26:14 [INFO] Player fernferret now has multiverse.teleport.self.* = false.
11:26:24 [INFO] [world]<fernferret> ok. I have no tp perms again.
11:26:35 [INFO] [world]<fernferret> now i'll _just_ give myself the ones I want, world and player
>perm player setperm fernferret multiverse.teleport.self.w true
11:26:41 [INFO] Player fernferret now has multiverse.teleport.self.w = true.
>perm player setperm fernferret multiverse.teleport.self.pl true
11:26:47 [INFO] Player fernferret now has multiverse.teleport.self.pl = true.
11:26:55 [INFO] [world]<fernferret> oh, and cannon! cannons are awesome!
>perm player setperm fernferret multiverse.teleport.self.ca true
11:27:00 [INFO] Player fernferret now has multiverse.teleport.self.ca = true.
11:27:15 [INFO] [world]<fernferret> weeeeeeeeeeeee (shot out of cannon)
```
