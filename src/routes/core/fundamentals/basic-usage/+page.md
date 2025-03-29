---
title: "Basics - Core"
---

# Basic Tutorial

:::caution[Unfinished]
This page is not finished!

Todo:

- Update to MV5
- Links

:::

## Introduction

World creation is provided by **Multiverse-Core**. It can control mob spawning, environment type, enable custom terrain generators, **and much more!** Despite being able to do all this, do note that **Multiverse-Core does not create worlds itself**, it simply makes calls to the Bukkit-API to create the worlds. If other plugins exist that create worlds, then you may have messy conflicts. Inception is a well-known example and many horror stories have been told when conflicts do happen (seemingly working fine with Multiverse-Core for some but not others). Another caveat is that Bukkit still has control over the world; Multiverse just does its best to control behavior, but ultimately, **other** plugins or quirks with Bukkit may possibly override desired behavior. The developers and testers have done a great job of including the tools with Multiverse-Core to help you quickly and easily resolve these issues!

## Importing Your existing worlds

Presuming you have op on your server, when you log in the _first time_ after installing Multiverse-Core, you will see the following notification:

![New server](/core/basics/new-server.png)

This tells you that even though you may have a bunch of world folders already created, you'll have to tell Multiverse-Core about them. The reason for this is that we don't know if your main world is a normal world or a floating skyland! Doing this is very simple in Multiverse-Core. Type:

[`/mv import WORLD ENV`](/core/fundamentals/commands-usage#Import-Command)

Now, you'll have to replace `WORLD` with your **folder name** and `ENV` with the **environment type**. There are 3 currently available: `normal`, `nether` and `end`. If you forget these you can always use [`/mv env`](/core/fundamentals/commands-usage#Environment-Command). It will always list all of these choices.

So, most servers will have a world named `world`. I do for this example. Here is what I typed:

![Importing a world](/core/basics/import-world.png)

You should then see the following result:

![Import Complete!](/core/basics/import-complete.png)

:::caution[unfinished]
The linked to page doesn't exist
:::
Sweet! Now just repeat the process for all of your worlds! Don't like the folder name you have? **Don't rename the folder** simply set a [Multiverse World Alias](/core/fundamentals/world-properties#wiki-alias) instead!

## Creating your first world

So, you've imported your `world` and `world_nether`, but you want a `creative` world now! World creation is a relatively simple process. The magic invocation is as follows:

:::caution[unfinished]
This needs updating to MV5
:::
[`/mv create <NAME> <ENV> -s [SEED] -g [GENERATOR[:ID]]`](/core/fundamentals/commands-usage#Create-Command)

Don't worry about all the parameters for now, all you need to know is that any text enclosed inside **`<>`** is **REQUIRED** and anything enclosed inside **`[]`** is **OPTIONAL**.
For our example, let's simply do

[`/mv create creative NORMAL`](/core/fundamentals/commands-usage#Create-Command)

This will take a bit longer than the import did and you can see progress in your server console.

This creates a world named creative with a `NORMAL` (overworld) type environment. If you are particularly clever, you could set the seed here or change the environment to `NETHER` or `END`, or if you're really clever, you can figure out how to set the [generator](/core/reference/custom-generator-plugins#wiki-howto) to create all sorts of cool terrain (e.g., `-g BukkitFullOfMoon`). Let's not concern ourselves with that just yet.

With that invocation, your world should now be created. Horray!

### Teleporting to your new world

Well now you have your world, fantastic! But... you need to get to it now, don't you? Well, that's simple too, just do:

```
/mv tp testworld
```

And tada, you should now be in your new world! If you want to bring along a mate and he doesn't care if you teleport him all over the bloody place, just do

```
/mv tp YOURMATE testworld
```

## Setting the new world's spawn

Well let's say your new world's 0, 0 isn't exactly the most... ideal of places. You'd rather players not be dumped there when they teleport to or spawn in it! Simply walk/climb/mine to where you want your new spawn to be, and then type:

```
/mv set spawn
```

It's like magic!

## Getting back to spawn

Oh no! You got lost in your world! You need to go back to spawn! Well that's pretty simple:

```
/mv spawn
```

Tada! Welcome home!

## Modifying some parameters

Ok, so you're sick of creepers blowing your stuff up, and you want to turn off the hostiles? No problem!

```
/mv modify set monsters false
```

You can change a load of other settings very easily (such as turn off animal spawning and PvP).

## Purging monsters and other fun things

So you're sick of a bunch of animals getting in the way of your building. Perhaps some jackass op spawned a bunch of cows where you were building. No matter! Just clean them up with:

```
/mv purge testworld animals
```

You can also use `ALL` instead of testworld to do it to all worlds. Instead of animals, you can specify a comma-separated list of mobs to purge, monsters, or "all" for all mobs. Beautiful.

## Removing the world

You're so sick of this world! You quit! It's enough! Well, then you can nuke the world! To nuke it, just do:

```
/mv delete testworld
```

![Danger Will Robinson!](/core/basics/danger-command.png)

You will then have 10 seconds to type:

_Remember:_ Once you **confirm** your world will be completely destroyed. Gone. Not coming back. Ever. Use this command with **extreme care**!

    /mv confirm

## Conclusion

Well, that's about it. Once you get curious about more advanced usage, check out both the `/mv` command in-game and the [[Command Reference]].

For clarity, we have used the most verbose command names in this tutorial. To get help for a specific command simply type: `/COMMAND ?` and the in-game help will be shown. It should also be noted that around 90% of the Multiverse commands **CAN** be used from the console. Only commands that do not make sense are not supported (for example, `/mv set spawn`)
