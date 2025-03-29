---
title: "Configuration File"
---

Here is the default config that ships with MV-Inventories. Note the version number at the bottom. We will (try to) update this page with newer configs when they ship.

### Make sure you're up to date
If you type `/mv version` a version string will be dumped to the console, in it you will see a line:

```
...
XX:XX:XX [INFO] [Multiverse-Core] [Multiverse-Inventories] Dumping Config Values: (version 2.7)
...
```

This is the current version of your config. If it does not **match the version in the example below**, please [grab an updated version of Multiverse-Inventories](http://ci.onarandombox.com/job/Multiverse-Inventories) and [all of the Multiverse Plugins you use](http://ci.onarandombox.com/view/Multiverse).

Multiverse will **always** migrate your configs for you if we change the format (like when we did `2.7`->`2.8`). With that said, it never hurts to keep backups in case of server failure or a ferret munching a few bytes off the end of a file.

---

# Multiverse 2 Inventories Sample Config

```yml
# Multiverse-Inventories Settings

# ===[ Multiverse Inventories Config ]===
settings:
  # This is the locale you wish to use.
  locale: en
  # If this is true it will generate world groups for you based on MV worlds.
  first_run: false
  # If this is set to true, it will enable bypass permissions (Check the wiki for more info.)
  use_bypass: false
  # If set to true, any world not listed in a group will automatically use the settings for the default group!
  default_ungrouped_worlds: false
  # The default and suggested setting for this is FALSE.
  # False means Multiverse-Inventories will not attempt to load or save any player data when they log in and out.
  # That means that MINECRAFT will handle that exact thing JUST LIKE IT DOES NORMALLY.
  # Changing this to TRUE will have Multiverse-Inventories save player data when they log out and load it when they log in.
  # The biggest potential drawback here is that if your server crashes, player stats/inventories may be lost/rolled back!
  save_load_on_log_in_out: false
  # If this is set to true, players will have different inventories/stats for each game mode.
  # Please note that old data migrated to the version that has this feature will have their data copied for both game modes.
  use_game_mode_profiles: false
shares:
  # When set to true, optional shares WILL be utilized in cases where a group does not cover their uses for a world.
  # An example of this in action would be an ungrouped world using last_location.  When this is true, players will return to their last location in that world.
  # When set to false, optional shares WILL NOt be utilized in these cases, effectively disabling it for ungrouped worlds.
  optionals_for_ungrouped_worlds: true
  # You must specify optional shares you wish to use here or they will be ignored.
  # The only built in optional share is "economy"
  use_optionals: []
```
