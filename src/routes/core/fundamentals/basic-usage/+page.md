---
title: "Basics Usage"
---

## Introduction

World creation is provided by **Multiverse-Core**. It can control mob spawning, environment type, enable custom terrain generators, **and much more!** Despite being able to do all this, do note that **Multiverse-Core does not create worlds itself**, it simply makes calls to the Bukkit-API to create the worlds. If other plugins exist that create worlds, then you may have messy conflicts. Inception is a well-known example and many horror stories have been told when conflicts do happen (seemingly working fine with Multiverse-Core for some but not others). Another caveat is that Bukkit still has control over the world; Multiverse just does its best to control behavior, but ultimately, **other** plugins or quirks with Bukkit may possibly override desired behavior. The developers and testers have done a great job of including the tools with Multiverse-Core to help you quickly and easily resolve these issues!

## Creating your first world

Let say you want a `creative` world! World creation is a relatively simple process. The magic invocation is as follows:

[`/mv create <worldname> <environment> --seed [seed] --generator [generatorname[:id]]`](/core/fundamentals/commands-usage#Create-Command)

Don't worry about all the parameters for now, all you need to know is that any text enclosed inside **`<>`** is **REQUIRED** and anything enclosed inside **`[]`** is **OPTIONAL**.

For our example, let's simply do:

[`/mv create creative normal`](/core/fundamentals/commands-usage#Create-Command)

This may take a few seconds and you can see progress in your server console.

This creates a world named creative with a `normal` (overworld) type environment. If you are particularly clever, you could set the seed here or change the environment to `nether` or `the_end`, or if you're really clever, you can figure out how to set the [generator](/core/reference/custom-generator-plugins) to create all sorts of cool terrain (e.g., `-g BukkitFullOfMoon`). Let's not concern ourselves with that just yet.

With that invocation, your world should now be created. Horray!

### Teleporting to your new world

Well now you have your world, fantastic! But... you need to get to it now, don't you? Well, that's simple too, just do:

```
/mv tp creative
```

And tada, you should now be in your new world! If you want to bring along a mate and he doesn't care if you teleport him all over the bloody place, just do

```
/mv tp <playername> creative
```

## Setting the new world's spawn

Well let's say your new world's 0, 0 isn't exactly the most... ideal of places. You'd rather players not be dumped there when they teleport to or spawn in it! Simply walk/climb/mine to where you want your new spawn to be, and then type:

```
/mv setspawn
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
/mv entity-spawn-config modify monster set spawn false
```

You can change a load of other settings very easily (such as turn off animal spawning and PvP).

## Purging monsters and other fun things

So you're sick of a bunch of animals getting in the way of your building. Perhaps some jackass op spawned a bunch of cows where you were building. No matter! Just clean them up with:

```
/mv purge-all-entities creative animal
```

## Removing the world

You're so sick of this world! You quit! It's enough! Well, then you can nuke the world! To nuke it, just do:

```
/mv delete creative
```

![Danger Will Robinson!](/core/basics/danger-command.png)

You will then have 30 seconds to type:

_Remember:_ Once you **confirm** your world will be completely destroyed. Gone. Not coming back. Ever. Use this command with **extreme care**!

    /mv confirm <otp>

## Import existing worlds

If you have a world from another server or downloaded from the internet, you can import it into Multiverse with the following command:

[`/mv import <worldname> <environment>`](/core/fundamentals/commands-usage#Import-Command)

Now, you'll have to replace `<worldname>` with your **folder name** and `<environment>` with the **environment type**. There are 3 currently available: `normal`, `nether` and `the_end`.

![Importing a world](/core/basics/import-world.png)

You should then see the following result:

![Import Complete!](/core/basics/import-complete.png)

Sweet! Now just repeat the process for all of your worlds! Don't like the folder name you have? **Don't rename the folder** simply set a [Multiverse World Alias](/core/fundamentals/world-properties/#Alias) instead!

:::caution[Server version]
You must ensure that the world you are importing is generated on the same minecraft version as your server.
:::

## First Spawn Location

Multiverse allows you to set what world users will first spawn in. This does _not_ have to be the world that is in `server.properties`. To do this, make sure you have the following 2 values set in your [`config.yml`](/core/reference/configuration-file). You can set this value in-game by using `/mv config first-spawn-override true` and `/mv config first-spawn-location myworld`. We advise against editing the file, but here is the clip:

```yaml
spawn:
  # Sets whether Multiverse will override the first spawn location of a world.
  # If enabled, Multiverse will set the first spawn location of a world to the spawn location of the world.
  # If disabled, it will default to server.properties settings.
  first-spawn-override: true

  # Sets the world that Multiverse will use as the location for players that first join the server.
  # This only applies if first-spawn-override is set to true.
  first-spawn-location: ""
```

## Join Destination

Multiverse allows you to set the [destination](/core/reference/destinations/) that players will always spawn in when logging in. This is useful for a hub world or similar, to enable this you need to set the the following 2 values set in your [`config.yml`](/core/reference/configuration-file). You can set this value in-game by using `/mv config enable-join-destination true` and `/mv config join-destination mydestination`. We advise against editing the file, but here is the clip:

```yaml
spawn:
  # Enables join-destination below.
  enable-join-destination: false

  # Sets the destination that Multiverse will use to spawn players on every login
  # Set the above enable-join-destination to false to disable
  join-destination: ""
```

## Conclusion

Well, that's about it. Once you get curious about more advanced usage, check out both the `/mv` command in-game and the [Command Reference](/core/fundamentals/commands-usage).

For clarity, we have used the most verbose command names in this tutorial. To get help for a specific command simply type: `/mv help` and the in-game help will be shown. It should also be noted that around 90% of the Multiverse commands **CAN** be used from the console. Only commands that do not make sense are not supported (for example, `/mv setspawn`)
