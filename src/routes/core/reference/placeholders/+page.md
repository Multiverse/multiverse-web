---
title: "Placeholders"
---

Multiverse 5 adds official support for [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/). This means that you can access the world properties in many other plugins that also support PAPI. DO NOT use the ecloud version anymore! To enable it, ensure `register-papi-hook: true` is set in the config file.

## Format

All placeholders follow the format of `%multiverse-core_<placeholder>_<optional world>%` where the placeholder is a world property and the world can optionally be omitted then it will use the player's current world instead.

## Migrating from v4 to v5

If you are migrating from v4 (the ecloud version), there is changes to the placeholder format. Generally, all the prefixes has changed from `%multiverse_xxx%` to `%multiverse-core_xxx%`. There may also be some minor text format difference, especially for the `time` placeholder.

## Big list o' placeholders

These could also have a world added on to the end if desired as described previously

- `%multiverse-core_alias%`
- `%multiverse-core_animalspwn%`
- `%multiverse-core_autoheal%`
- `%multiverse-core_blacklist%`
- `%multiverse-core_currency%`
- `%multiverse-core_difficulty%`
- `%multiverse-core_entryfee%`
- `%multiverse-core_environment%`
- `%multiverse-core_flight%`
- `%multiverse-core_gamemode%`
- `%multiverse-core_generators%`
- `%multiverse-core_hunger%`
- `%multiverse-core_monstersspawn%`
- `%multiverse-core_name%`
- `%multiverse-core_playerlimit%`
- `%multiverse-core_price%`
- `%multiverse-core_pvp%`
- `%multiverse-core_seed%`
- `%multiverse-core_time%` (in ticks)
- `%multiverse-core_time_12h%`
- `%multiverse-core_time_24h%`
- `%multiverse-core_time_<format>` (e.g. [formats](https://www.digitalocean.com/community/tutorials/java-simpledateformat-java-date-format#patterns) are `HH:mm:ss`, `hh:mm:ss a`)
- `%multiverse-core_type%`
- `%multiverse-core_weather%`
