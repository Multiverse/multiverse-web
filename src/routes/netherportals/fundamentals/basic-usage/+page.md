---
title: "Basic Usage"
---

## Summary

* Create Nether portals like you would in single-player.
* Nether portals in world `X` look for a world called `X_nether`, and take you there if it exists.
* Nether portals in world `X_nether` look for a world called `X`, and take you there if it exists.
* Redirect Nether portals by "linking" two worlds: [`/mvnp link {end|nether} X Y`](/netherportals/fundamentals/commands-usage#Link-Command).

## What you need

Before you begin to use Nether portals, you'll need...

* [[To install Multiverse-NetherPortals|Install-(NetherPortals)]].

## Getting started

_Note: you may skip this section if you know how to create a standard, single-player-style nether portal._

Once both the Core and NetherPortals plugins are installed on your server:

1. Log in to your server.
2. Gather up at least 10 [obsidian](http://www.minecraftwiki.net/wiki/Obsidian), as well as a [flint and steel](http://www.minecraftwiki.net/wiki/Flint_and_steel).
3. Create a [portal](http://www.minecraftwiki.net/wiki/Portal) in the usual (single-player style) shape. It should have an internal size of **2 x 3** blocks and a total external size of **4 x 5** blocks.
4. Light one of the inside surfaces on fire with the flint and steel.

You should see the inside of your obsidian frame light up with purple portal tiles. Congratulations - you made a nether portal!

## Behavior

By default, Nether portals behave similarly to how they do in single-player: they take you to a Nether world. However, with Multiverse 2.0, there are some added features you can use to make your Nether portals even better; moreover, Multiverse 2.0 makes one Nether per world a reality, instead of having one Nether overall.

### Standard

When you have multiple worlds, what does it mean to go "to the nether"? With Multiverse, the nether gets interpreted following a few simple rules:

* Each world gets **its own nether** by default.
* For a world named `X`, the Nether world is named `X_nether`.
* If a Nether exists for a world (e.g. `X_nether` is already a world), the portal takes you there. Otherwise, **nether portals do nothing in that world** - the plugin will not create a nether world for you. (The converse is also true, for players already in the Nether.)

Without any customization, that's it. Each world gets a separate Nether, and those worlds behave **just like any other Multiverse world** - the only difference is that they have `_nether` at the end of their names. (Bold users can even change the suffix in the Multiverse-NetherPortals configuration file.)

### <a name="linking"></a>Customizing ("linking")

Inevitably, there are users who want to use Nether-style portals to teleport to other regular worlds. With Multiverse-NetherPortals, this is easy! Just link the two worlds together.

"Linking" worlds involves setting the destination of nether portals in one world (call it `X`) to another specific, usually non-nether, world (call it `Y`). To link all the Nether portals in `X` to world `Y`, run:

    /mvnp link {end|nether} X Y

Now, when your players step into a Nether or End portal (depending on what was specified in command) in world `X`, they'll be taken to world `Y` instead of world `X_nether` or `X_the_end`. What's more: all the normal Nether options still apply, including portal auto-creation (if specified) and distance scaling.

Keep in mind that **links are not two-way**. You can link `X` to `Y`, but if `Y` isn't linked back to `X`, nether portals in `Y` will take you to `Y_nether`, not `X`.

Of course, what good would world linking be without world **un**linking? You can remove the link between `X` and `Y` by running:

    /mvnp unlink {end|nether} X

After that command, Nether or End portals in world `X` will once again lead to world `X_nether` or `X_the_end`.

Linking and unlinking works in both normal and nether worlds - you can leave world `X` pointing to `X_nether`, then link `X_nether` to world `Y`. More complicated configurations like this can literally let your users walk "through hell and into another world."

Another thing to note is that linking a given portal type in a world to itself will disable any of those portals in that world.

## World scaling

By default, the standard single-player Minecraft Nether uses something called "distance scaling" - for every chunk you walk in the Nether, it's equivalent to eight chunks in your regular world. A similar effect is - naturally - possible using Multiverse. But first, we need to take a brief diversion into how the scaling works.

### A little math

To begin, every world has a "scaling" associated with it. This scaling can be any positive number: 1, 2, 100, and 0.42 are all valid scaling values. Using these values, we then say that the "scaling factor" from world `X` to world `Y` is:

    SF(X,Y) = scaling(X) / scaling(Y)

So if world `X` has scaling 6 and world `Y` has scaling 2, then the scaling factor from `X` to `Y` is 3.

### What does it all mean?

We've tossed around a bunch of numbers here, but what exactly is a scaling factor? This definition is very important in world scaling, so remember it well:

**The scaling factor from `X` to `Y` is how far in `Y` you can go by walking in `X`.**

For the more mathematically inclined, this can also be expressed as:

    dist(Y) = SF(X,Y) * dist(X) = (scaling(X) / scaling(Y)) * dist(X)

Let's consider an example. Once again, we have our two worlds `X` and `Y`. Say that `X` has scaling 2 and `Y` has scaling 1; then the scaling factor from `X` to `Y` is 2. Now our friendly player Alice walks 100 blocks in world `X`; that's the same as walking **200** blocks in world `Y`. Player Bob, on the other hand, isn't so smart: he walks 100 blocks in world `Y`, then moves to world `X` and finds out he's only gone **50** blocks.

How does this work? Look at the math:

* For Alice: `dist(Y) = (2 / 1) * 100 = 200`
* For Bob: `dist(X) = (1 / 2) * 100 = 50`
