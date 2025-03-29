---
title: "Redstone Teleporting"
---

[Sign style](/signportals/fundamentals/create-sign-style) SignPortals can be set up to teleport specified entities within a cuboid area around the sign when the sign receives a redstone signal.  This means you could set up a redstone contraption that ultimately teleports all animals or players in a room to the destination on the sign.

# Get a destination
Find the [destination](/core/reference/destinations) that you would like to be teleported to 

# Redstone sign syntax
On the first line of the sign, specify what to teleport, how large of a radius, and optionally an offset direction (relative to the sign).  The format for this line looks like `[A:5:UP]` which means that A (animals) within a 10x10x10 cube above the sign (starting on the same y level as the sign) will be teleported to the destination on the sign when the sign receives a redstone pulse.

To explain further, the first line must first start with `[`,
then the option for **what** to teleport:
* A - animals
* P - players
* M - monsters
* ALL - all entities
Followed by a `:`, then a number representing the "radius" of the cuboid (The length/width/height of the cuboid will be double the radius).

Optionally, follow the radius with another `:`,
then the option for the direction of the cuboid:
* UP - cuboid above the sign, including the sign's y-level as the base
* DOWN - cuboid below the sign, including the sign's y-level as the top
* NORTH - cuboid north of the sign, including the sign's x position in the south side
* SOUTH - cuboid south of the sign, including the sign's x position in the north side
* EAST - cuboid east of the sign, including the sign's z position in the west side
* WEST - cuboid west of the sign, including the sign's z position in the east side

(Not entering this optional part will cause the cuboid to be centred on the sign)

Finally, end the line with a `]`

Next, add `[mv]` so that Multiverse knows this is a signportal, then add the destination you found before. As with all other signportals, if the text turns green, then success! You have entered a valid combination.

# Examples

All entities within 10 blocks of the sign to go to the spawn of `world`
```
   [ALL:10]
     [mv]
    w:world
```

All monsters directly above the sign to teleport to `fernferret`
```
   [M:1:UP]
     [mv]
 pl:fernferret
```

# Powering

Signs can be powered from all sides except the top, and for wall signs you must power the sign itself, not the block that it is attached to.

![image](https://github.com/Multiverse/Multiverse-Core/assets/67716263/f36bef36-3543-4d76-a446-3521623f622d)
Powering from the bottom

![image](https://github.com/Multiverse/Multiverse-Core/assets/67716263/736b28c7-dbe4-4e66-8439-3ee3b0f1af86)
Powering from the side

![image](https://github.com/Multiverse/Multiverse-Core/assets/67716263/e76ba57d-3a01-4d7e-8528-8b42ba8c0f29)
Using a wall sign
