---
title: "FAQs"
---

## Is Multiverse compatible with datapack?

Short answer - not really, but here is a deeper explanation. Datapacks is a vanilla feature that can only be added to the default world’s datapack folder. If datapacks loads additional worlds, Multiverse 5 may auto import it on startup and most should work fine. However, there are many caveats:

1. There is no per-world datapack support.
2. It’s up to the datapack itself to determine what it does to your worlds. 
3. Removing a datapack after installing may cause worlds to be unable to load, and there is nothing Multiverse can do to fix it. So please make backups before installing datapacks.
4. Worlds created with multiverse may or may not be affected by the datapack. This is completely dependent on the how the datapack itself is made.

We suggest trying to find a plugin with similar features of the datapack you want to use. Only if you really need to use datapack, please make backups and test it functionality before installing to your production server.

## I want a certain command/plugin to apply to only some worlds, how do I do that?

This is completely up to each plugin. Multiverse commands itself all have support for targeting each world. However, Multiverse has no control over how other plugin works. If those commands/plugins does not work as expected, please report the issue to the plugin's author and not us. Vanilla commands also likely does not have a way to target specific worlds, and there is no way to add support for it, other than to find a plugin that implements an alternate command to its vanilla counterpart.
