---
title: "Shares List"
---

This is a complete list of everything that is [sharable](https://mvplugins.org/inventories/reference/sharing-details/) in Multiverse-Inventories.

The shares will be listed first with all the possible keywords you may use to indicate you want to share followed by a description.  Alternate keywords will be included in parenthesis after the description.

### Individual Shares - These represent ONE "value"

* **inventory_contents** - the contents of a player's inventory NOT including armor.
* **off_hand** - Item that player is holding on their off-hand. (**shield**)
* **armor_contents** - the player's armor. (**armor**)
* **ender_chest** - The contents of a player's Ender Chest.
* **hit_points** - the player's health. (**health**, **hp**, **hitpoints**)
* **max_hit_points** - The player's max health (**maxhealth**, **maxhp**, **maxhitpoints**)
* **remaining_air** - the player's remaining breath, for when they're underwater.
* **maximum_air** - the player's maximum breath, which may be altered by plugins.
* **fall_distance** - the player's fall distance, to keep them falling and taking damage when they switch worlds. (**falling**)
* **fire_ticks** - the amount of ticks the player is burning for. (**fire**, **burning**)
* **xp** - the percentage of a level a player has obtained.
* **lvl** - the level of the player.
* **total_xp** - the total amount of experience points of a player.
* **food_level** - the food meter - "hunger bar" - of a player. (**food**)
* **exhaustion** - part of the hunger mechanics, read more here http://www.minecraftwiki.net/wiki/Hunger#Mechanics (**exhaust**, **exh**)
* **saturation** - part of the hunger mechanics, read more here http://www.minecraftwiki.net/wiki/Hunger#Mechanics (**sat**)
* **bed_spawn** - the player's bed spawn location.  This will cause messages to appear that say the bed spawn location is invalid occasionally. (**bedspawn**, **bed**, **beds**, **bedspawns**)
* **potion_effects** - effects from potions on the player.  (**potion**, **potions**)

### Optional Shares - Must be enabled via `/mvinv toggle <sharename>` or they have NO effect.

- **economy** - the player's economy balance. This one still has some flaws... It WILL transfer balances but it cannot prevent people from paying players in other world groups. We recommending leaving it to the economy to handle everything instead. (**money**, **econ**, **cash**, **balance**)

- **last_location** - the player's last location in the world group. This feature completely overrides any sort of teleport into a world that doesn't share this with the previous world.  This means it may end up teleporting them to a DIFFERENT world than intended on the first try. (**loc**, **location**, **pos**, **position**)

- **recipe** - the player's recipes unlocked based on the items they have discover in the world/group. Note: We are unable to disable the client's notification on recipe unlocked

- **advancement** - the player's advancement progress. Note: We are unable to disable the client's notification on advancement achieved

- **gamestats** - Data such as play time, number of deaths etc...

### Grouped Shares - These are "shorthands" that include multiple of the above shares with one keyword.

This is useful for quickly sharing common sets of data without having to type them all out, but you can always specify the individual shares if you want more control or just feel like typing more :)

* **all** - This includes ALL shares listed above, even the optional ones (though optional shares still must be toggled to have any effect.) (__*__, **everything**)
* **stats** - includes: hit_points, max_hit_points, food_level, saturation, exhaustion, xp, total_xp, lvl, remaining_air, maximum_air, fall_distance, fire_ticks, potion_effects
* **health** - includes: hit_points, max_hit_points, remaining_air, maximum_air, fall_distance, fire_ticks
* **hunger** - includes: food_level, saturation, exhaustion
* **air** - includes: remaining_air, maximum_air (**breath**)
* **experience** - includes: xp, total_xp, lvl (**exp**, **level**)
* **inventory** - includes: inventory_contents, armor_contents, ender_chest, off_hand (**inv**, **inventories**)
