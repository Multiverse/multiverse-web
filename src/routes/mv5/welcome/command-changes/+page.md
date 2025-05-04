---
title: "Command Changes"
---

| Old MV4 Syntax | New MV5 Syntax |
| -------- | ------- |
| `/mv modify set <property> <value> [world]` | `/mv modify [world] set <property> <value>` |
| `/mv who [world]` | `/mv whoall` and `/mv who [world]` |
| `/mv anchor` | `/mv anchor list [--page <page>] [--filter <filter>]` |
| `/mv anchor <name>` | `/mv anchor set <name>` |
| `/mv anchor <name> -d` | `/mv anchor delete <name>` |
| `/mv gamerules [world]` | `/mv gamerule list [world] [--page <page>] [--filter <filter>]` |
| `/mv gamerule <gamerule> <value> [world]` | `/mv gamerule set <gamerule> <value> [world]` |
| `/mv purge [world/all] <all/animals/monsters/mobname>` | `/mv purge-all-entities <spawn-categories>` |
| `/mv env` | _removed_ |
| `/mv silent` | _removed_ |
| `/mv version -p` | `/mv dumps` |
