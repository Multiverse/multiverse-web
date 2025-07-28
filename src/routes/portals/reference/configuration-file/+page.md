---
title: "Configuration File"
---

Here is the default config that ships with MV-Portals. 

## Multiverse 2 Portals Sample Config
```yml
#-------------------------------------------------------------------------------------------------------#
#                                                                                                       #
#          __  __ _   _ _  _____ _____   _____ ___  ___ ___   ___  ___  ___ _____ _   _    ___          #
#         |  \/  | | | | ||_   _|_ _\ \ / / __| _ \/ __| __| | _ \/ _ \| _ \_   _/_\ | |  / __|         #
#         | |\/| | |_| | |__| |  | | \ V /| _||   /\__ \ _|  |  _/ (_) |   / | |/ _ \| |__\__ \         #
#         |_|  |_|\___/|____|_| |___| \_/ |___|_|_\|___/___| |_|  \___/|_|_\ |_/_/ \_\____|___/         #
#                                                                                                       #
#                                                                                                       #
#               WIKI:        https://mvplugins.org/portals/fundamentals/basic-usage/                    #
#               DISCORD:     https://discord.gg/NZtfKky                                                 #
#               BUG REPORTS: https://github.com/Multiverse/Multiverse-Portals/issues                    #
#                                                                                                       #
#                                                                                                       #
#           New options are added to this file automatically. If you manually made changes              #
#           to this file while your server is running, please run `/mvp reload` command.                #
#                                                                                                       #
#-------------------------------------------------------------------------------------------------------#
  
  
portal-creation:
  # The item used to select a region to create a mvportal. Run `/mv wand` to start selection.
  # This will be ignore if worldedit is used for selection instead.
  wand-material: wooden_pickaxe
  
  # If enabled, water and lava bucket can be used to fill a mvportal.
  bucket-filling: true
  
  # The allowed materials used to create the frame of the portal.
  # If the list is empty, all materials are allowed.
  frame-materials: []
  
  # If enabled, nether/end fills will be cleared when the portal is removed.
  # This keeps us from leaving behind portal blocks (which would take an unsuspecting player to the nether when trying to use the mvportal)
  clear-on-remove: false
  
  
portal-usage:
  # If enabled, players will not be able to teleport to mvportals they do not have access to.
  # The permission node is: `multiverse.portal.access.<portal-name>`
  enforce-portal-access: true
  
  # The time (in milliseconds) a player must wait between using a mvportal.
  portal-cooldown: 1000
  
  # If enabled, when a mvportal with nether fill that is unusable, either due to invalid destination or lack of permissions,
  # will fallback and behave as a normal nether portal teleporting between the nether world.
  portals-default-to-nether: false
  
  # If enabled, the nether blobbing animation will be played before the player is teleported.
  # Note: This does not work if the player is in creative mode due to server software limitations.
  nether-animation: true
  
  # If enabled, mvportals will teleport all vehicles along with its passengers when the vehicle enters the portal.
  # Vehicles are usually boats, minecarts, pigs and horses.
  teleport-vehicles: false
  
  # If enabled, player movement will be tracked to determine if the player has entered a portal.
  # Disabling this will cause mvportals without nether or end fill to not work.
  # Only disable this if all your portals have nether or end fill and want to slight enhance performance.
  use-on-move: true
  
  
# This just signifies the version number so we can see what version of config you have.
# NEVER TOUCH THIS VALUE
version: 5.0
```
