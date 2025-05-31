---
title: "Placeholders"
---

Multiverse 5 adds official support for [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/). This means that you can access the world properties in many other plugins that also support PAPI. DO NOT use the ecloud version anymore! To enable it, ensure `register-papi-hook: true` is set in the config file.

## Format

All placeholders follow the format of `%multiverse-core_<placeholder>_<optional world>%` where the placeholder is a world property and the world can optionally be omitted then it will use the player's current world instead.

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
- `%multiverse-core_time%`
- `%multiverse-core_type%`
- `%multiverse-core_weather%`
