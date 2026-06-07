---
title: "Anchors"
---

## Introduction

Anchors are named locations you can save and teleport to from anywhere on the server. They work as a [destination type](/core/reference/destinations) — prefix the anchor name with `a:` to use one anywhere a destination is accepted, including [`/mv tp`](/core/fundamentals/commands-usage#Teleport-Command) and [Multiverse-Portals](/portals/).

Unlike world spawns or coordinates, anchors are **world-agnostic**: a single anchor can point to any location in any world.

## Creating an Anchor

Walk to the location you want to save, then run:

```
/mv anchor set <name>
```

For example:

```
/mv anchor set lobby
```

The anchor is saved at your current position, facing direction included.

**Permission:** `multiverse.core.anchor.create`

## Listing Anchors

To see all saved anchors:

```
/mv anchor list
```

**Permission:** `multiverse.core.anchor.list`

## Teleporting to an Anchor

Use the `a:` destination prefix with any teleport command:

```
/mv tp a:<name>
/mv tp a:lobby
```

You can also use anchors as portal destinations in [Multiverse-Portals](/portals/) or [Multiverse-SignPortals](/signportals/).

**Permission:** `multiverse.teleport.self.a.*` (or the finer-grained `multiverse.teleport.self.a.<anchor-name>`)

## Deleting an Anchor

```
/mv anchor delete <name>
```

For example:

```
/mv anchor delete lobby
```

**Permission:** `multiverse.core.anchor.delete`

## Permission Summary

| Permission | Description |
|---|---|
| `multiverse.core.anchor.create` | Create or overwrite an anchor |
| `multiverse.core.anchor.list` | List all anchors |
| `multiverse.core.anchor.delete` | Delete an anchor |
| `multiverse.teleport.self.a.*` | Teleport yourself to any anchor |
| `multiverse.teleport.self.a.<name>` | Teleport yourself to a specific anchor |
| `multiverse.teleport.other.a.*` | Teleport others to any anchor |
