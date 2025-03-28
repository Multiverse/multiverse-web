---
title: "Sharing Details"
---

This document details how sharing works in Multiverse-Inventories.  If you do not care for the nitty gritty details, this page doesn't contain any necessary information though it may be useful as another way to look at the plugin's usability.

## World Groups
* **WorldGroups** contain a list of worlds and details regarding how Multiverse-Inventories will treat players within, leaving and entering that group of worlds.
* Each **WorldGroup** has a list of **Sharables** called shares.
* A **Sharable** is a _thing_ (statistics mostly) that remains the same for a player when they move between worlds listed in a **WorldGroup**.  A **Sharable** should really be thought of as that value for purposes of this document.
* A **Sharable** has two main responsibilities.  It saves the appropriate value from the Minecraft player to a profile file and it loads that value from a profile file to the Minecraft player.  Read about Share Handling below for more details on this.
* Some **Sharables** are optional (Such as economy) which are _only_ considered if they're added to the optional shares list (Not covered here.)
* A **Sharable** can be _negative_ which means a group is specifically NOT sharing that **Sharable**.  This can be useful to share "all" and then simply remove a few instead of listing all but those.  Negative **Sharables** are indicated by a negative symbol (-) in front of the name (example: `-inventory`).  This is not to be confused with a yaml list entry (example: `- inventory`).
* A **WorldGroup** has an optional "spawn" setting (setup not covered here) which will cause players in that group to respawn at the world listed in the setting.

## Share Handling ##
* Multiverse-Inventories currently ONLY handles world sharing when a player actually changes worlds. (This means they have arrived in the world already.)  In other words, it doesn't touch players inventories/stats upon logging in/out.
* No matter what, a backup copy of every **Sharable's** data is stored in a file for the world the player came from.
* Then, for each of the groups that contain the **from world**:
   1. If the group contains the **to world**, the shares of the group are checked.  If the shares contain _every_ **Sharable**, nothing is done with this groups profile file.  Otherwise, we're going to save all the data for each **Sharable* that _isn't_ shared with the data from the Minecraft player.
   2. If the group does not contain the **to world** then the data for _all_ **Sharables** is saved to that group's profile file as the player is effectively "leaving the group."
* Then, for each of the groups that contain the **to world**:
   1. If the group contains the **from world**, the shares of the group are checked.  If the shares contain _every_ **Sharable**, nothing is done to the Minecraft player.  Otherwise, we're going to load all the data for each **Sharable** that _isn't_ shared into the Minecraft player
   2. If the group does not contain the **to world** then the data for _all_ **Sharables** is loaded from that group's profile file as the player is effectively "joining the group."
* If, after running the checks on the second set of groups, we have not determined a way to handle _all_ possible **Sharables**, we will load whatever **Sharables** that are left over from the profile file for the **to world**.
