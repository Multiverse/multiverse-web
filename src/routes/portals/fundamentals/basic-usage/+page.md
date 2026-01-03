---
title: "Basic Usage"
---

Multiverse-Portals is a complement to Multiverse that is relatively easy to use (like Multiverse-Core). Here is a short outline of how to use Multiverse-Portals to create gateways to your worlds!

## Introduction

**Multiverse-Portals** provides portals between worlds, similar to vanilla portals, except the destination can go ANYWHERE, as opposed to just the nether. Note that the Nether portal blocks (the purple things that make the portals make the weird sound) __will not fill these portals__, but the portals can have water or lava placed into them for a more authentic experience. If you're seeking a multi-world authentic experience, you should check out [Multiverse-NetherPortals](/netherportals/).

## Making your portal
A portal can be constructed out of ANYTHING. Yes. Anything. Even nothing. Step 1 of creating a Multiverse Portal is to create the 'Portal Frame'. Here are a few examples:

![sample portal](https://github.com/Multiverse/Multiverse-Portals/wiki/images/sampleportals.png)

For this tutorial, I will be working with this portal I have made out of wool:

![sample portal](https://github.com/Multiverse/Multiverse-Portals/wiki/images/sampleportal.png)

## Getting a wand

Portals are constructed with a wand. To get one simply type `/mvp wand`. You should see something like this (but you may not, keep reading):
![portal wand](https://github.com/Multiverse/Multiverse-Portals/wiki/images/portalwand.png)

If you see:
![using world edit](https://github.com/Multiverse/Multiverse-Portals/wiki/images/usingworldedit.png)

Then WorldEdit has been detected on your server. If you're using WorldEdit, simply use that plugin to perform your selections by using `//wand`!

## Making your selection
First, click on one corner of your portal. In our example, I will be __left clicking__ the __green wool__ block.

![first](https://github.com/Multiverse/Multiverse-Portals/wiki/images/first.png)
You should then see 'First position set to...'

Then __right click__ the other corner. In my example, the __red wool__.

![second](https://github.com/Multiverse/Multiverse-Portals/wiki/images/second.png)

After this, you now have your portal __selection__ but the portal is __not__ created yet. Read on.   
_**NOTE:** Take note of the value in orange if you're NOT using WorldEdit (although it does this too). This value is the volume of your portal: x*y*z. If it's several thousand, you most likely started a selection somewhere and forgot about it. Make sure to left and right click until this number is reasonable._

## Making the actual portal
Ok, you now have your portal selection. Once you have decided where you want your portal to go, create the portal with the destination  
  
To go to a world: `/mvp create newportal w:world:se`  
To go to a world with coordinates: `/mvp create newportal e:world:23,43,1`  
To go to another portal: `/mvp create newportal p:otherportal`

These are just a __few__ examples. Please see the [Create Command](/portals/fundamentals/commands-usage#Create-Command) for more details.

After you type one of these you should receive a message:

![created](https://github.com/Multiverse/Multiverse-Portals/wiki/images/created.png)

**TADA!** You have made your first portal!

## Make it go somewhere
:::info
This is only required if you did not set the destination when you created the portal. However, if you ever want to change where a portal goes, this is the same process.
:::

Let's say you create portals `portal_a` and `portal_b`. You want them to go to each other. When creating `portal_a` portal_b did not exist, so you had to type `/mvp create portal_a` with no destination. Then you created `portal_b` via `/mvp create portal_b p:portal_a`.

Now, let's set the destination of `portal_a` to `p:portal_b`:

First, make sure `portal_a` is selected. (If you just type `/mvp select` Multiverse-Portals will tell you what portal you have currently selected.)

`/mvp select portal_a`

Then set the destination.
`/mvp modify destination p:portal_b`

Alternatively, you can use `w:worldname` to make it go to another world's spawn, or `e:@here` to make the portal go to the exact position you were at when you ran the command, or other locations: see [The Multiverse Destination Guide](/core/reference/destinations) for more details on all available destinations.

Portals can also be modified to do other actions, such as running commands or transferring to other servers via BungeeCord/Velocity. See the [Configure Portal Actions Guide](/portals/how-to/configure-portal-actions) for more details.

## Who can use the portal?

By default, ONLY players with permission `multiverse.portal.access.<portalname>` can use a portal. For example, to use a portal named `newportal`, the player need to have permission `multiverse.portal.access.newportal`. For more details on permissions, see the [Portal Permissions Guide](/portals/fundamentals/permissions-setup).

If just just want everyone to be able to use all portals, you may consider disabling portal access enforcement with the command:

```java
/mvp config enforce-portal-access false
```

## Allow vehicles and entities through the portal

By default, only players can use portals. If you want to allow vehicles (e.g., boats, minecarts) and other entities (e.g., mobs) to go through portals, you can enable this feature with the commands:

```java
/mvp config teleport-vehicles true
/mvp config teleport-entities true
```

Then you will need also to allow each portal to teleport non-players:

```java
/mvp modify <portal-name> teleport-non-players true
```

:::note
`teleport-vehicles` and `teleport-entities` config options require a full server restart to take effect.
:::

## Removing the portal
So you're sick of your portal and want it gone? Well, destroying the edge blocks won't work (this is intentional so you could make a frame, and then delete it to create an invisible portal), but you can do this:

`/mvp remove newportal`

And your original portal is destroyed. Note all portals linking to it will now be **broken**!
