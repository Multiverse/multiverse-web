---
title: "FAQs"
---

## Is Multiverse compatible with datapack?

Short answer - you can install just like vanilla, but here is a deeper explanation. Datapacks is a vanilla feature that can only be added to the default world’s datapack folder. If datapacks loads additional worlds, Multiverse 5 should auto import it on startup and most should work fine. However, there are many caveats:

1. There is no per-world datapack support. You cannot install datapacks outside of the default world.
2. It’s up to the datapack itself to determine what it does to your worlds. If you are making your own datapack or willing to modify the datapack, you can manually edit the datapack actions to target the dimension your desire. Multiverse created worlds should be targeted using the namespace key `minecraft:<worldname>`.
3. Removing a worldgen datapack after installing may cause **worlds to break and crash on load**, and there is nothing Multiverse can do to fix it. So please make backups before installing such datapacks.
4. Worlds created with multiverse may or may not be affected by the datapack. This is completely dependent on the how the datapack itself is made.

We suggest trying to find a plugin with similar features of the datapack you want to use. If you really need to use datapack, please make backups and test it functionality before installing to your production server.

## I want a certain command/plugin to apply to only some worlds, how do I do that?

This is completely up to each plugin. Multiverse commands itself all have support for targeting each world. However, Multiverse has no control over how other plugin works. If those commands/plugins does not work as expected, please report the issue to the plugin's author and not us. Vanilla commands also likely does not have a way to target specific worlds, and there is no way to add support for it, other than to find a plugin that implements an alternate command to its vanilla counterpart.

## Support for slime worlds?

In 5.2, some changes to improve compatibility with other world format such as slime world manager with some limitations. These changes has been specifically tested with [AdvancedSlimePaper](https://infernalsuite.com) and their Slime World Plugin. However, it should work with other similar slime server and plugins as long as they implement the Bukkit API properly. 

Support operations:
- Use `/mv import` to add existing loaded slime worlds to multiverse.
- Use `/mv remove` remove slime worlds from multiverse's world list. Use `--no-unload-bukkit-world` to keep the slime world loaded on the server. You can use the relevant SlimeWorldManager commands to handle the world after that.
- Use `/mv unload` to unload the slime world. Using equivalent command in SlimeWorldManager works too.
- All world properties should work just like a normal vanilla based world.

Since slime world uses a completely different format and api the following is unsupported:
- Do not use `/mv create` to make a slime world. Use the equivalent command in SlimeWorldManager instead. Add to multiverse with `/mv import` afterwards.
- Do not use `/mv load` to load a slime world. Use the equivalent command in SlimeWorldManager instead. Multiverse will automatically detect that the world is being loaded by the server.
- Do not use `/mv delete` to delete a slime world from disk. Use the equivalent command in SlimeWorldManager instead. You can use `/mv remove` afterwards to remove the world from multiverse's world list.
- Do not use `/mv clone` and `/mv regen` on slime worlds as well.

## Does Multiverse work on hybrid servers such as Mohist?

It may work, but its not tested nor supported. Expect bugs and random issues depending on what mods you have installed on your server. Some mods may completely break Multiverse. We will not look into issues that is caused by these hybrid servers. If you think the issue you face is unrelated to the use of hybrid servers, please reproduce the issue with paper or spigot before reporting it to us.
