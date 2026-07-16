---
title: "Commands Usage"
---

If you are looking for the [Multiverse-Core](/core/fundamentals/commands-usage), [Multiverse-Portals](/portals/fundamentals/commands-usage), or [Multiverse-Inventories](/inventories/fundamentals/commands-usage) command references, follow those links instead.

## Index

1. [Link Command](#Link-Command)
2. [Unlink Command](#Unlink-Command)
3. [List Command](#List-Command)

## Introduction

See the [Multiverse-Core command reference introduction](/core/fundamentals/commands-usage) for the notation used on this page. NetherPortals commands use `/mvnp` as their base command. Run `/mvnp help` in-game to see the commands available to you.

World links are directional. A link from `survival` to `survival_nether` changes portals in `survival`; it does not change portals in `survival_nether` unless you also create the reverse link. Both the link and unlink commands support `--bidirectional` (short form `-b`) when you want to update both directions at once.

## Link Command

#### Description:

Sets the destination of every Nether or End portal in a source world. The explicit link takes precedence over the [automatic naming rules](/netherportals/fundamentals/basic-usage#Automatic-linking).

If `fromWorld` is omitted by a player, their current world is used. The console must provide both world names. Linking a portal type from a world to itself disables that type of portal in the world.

Add `--bidirectional` or `-b` to create the matching reverse link in the same command. Existing links in either direction are replaced.

#### Usage:

```text
/mvnp link <nether|end> [fromWorld] <toWorld> [--bidirectional]
```

#### Examples:

```text
/mvnp link nether world_nether
/mvnp link nether survival survival_nether --bidirectional
/mvnp link end survival survival_the_end -b
/mvnp link nether "Spaced World" "Spaced Nether" --bidirectional
/mvnp link nether minigames minigames
```

The first example uses the player's current world as the source. The final example disables Nether portals in `minigames`.

#### Permission:

`multiverse.netherportals.link`

[↑ Back to Top ↑](#top)

## Unlink Command

#### Description:

Removes an explicit portal link from a source world. Once removed, portals in that world use the [automatic naming rules](/netherportals/fundamentals/basic-usage#Automatic-linking) again.

If `fromWorld` is omitted by a player, their current world is used. The console must provide it. When Multiverse-Core's alias resolution is enabled, `fromWorld` may be a world alias. A raw world name is also accepted so links can still be removed after their source world has been deleted.

Add `--bidirectional` or `-b` to remove the reverse link too. The reverse link is removed only when it points back to the original source world. If it is missing or points somewhere else, NetherPortals reports the mismatch and leaves it unchanged.

#### Usage:

```text
/mvnp unlink <nether|end> [fromWorld] [--bidirectional]
```

#### Examples:

```text
/mvnp unlink nether
/mvnp unlink nether survival
/mvnp unlink nether survival --bidirectional
/mvnp unlink end survival -b
```

#### Permission:

`multiverse.netherportals.unlink`

[↑ Back to Top ↑](#top)

## List Command

#### Description:

Displays portal links for all known worlds. You can optionally show only Nether or End links.

The list includes explicit links and valid automatic links. Its arrows describe the configured flow:

```text
[nether] survival --> resource_nether
[nether] world <---> world_nether (auto)
[end] minigames -- DISABLED
```

- `-->` is a one-way link.
- `<--->` means both worlds link to each other.
- `(auto)` identifies a link selected by the configured naming convention rather than `/mvnp link`.
- `DISABLED` means the world has been explicitly linked to itself for that portal type.

#### Usage:

```text
/mvnp list [nether|end]
```

#### Examples:

```text
/mvnp list
/mvnp list nether
/mvnp list end
```

#### Permission:

`multiverse.netherportals.show`

[↑ Back to Top ↑](#top)
