---
title: "Basic Usage"
---

Multiverse-NetherPortals gives each Multiverse world its own vanilla-style Nether and End portal destinations. It can select those destinations automatically from world names, or you can explicitly link portals to any Multiverse world.

## Quick start

1. Install [Multiverse-Core and Multiverse-NetherPortals](/netherportals/).
2. Create the dimension worlds for your main world. For a world named `survival`, run:

   ```text
   /mv create survival_nether nether
   /mv create survival_the_end the_end
   ```

3. Build and light a normal [Nether portal](https://minecraft.wiki/w/Nether_portal) in `survival`. It will automatically lead to `survival_nether`.
4. Build portals normally in the linked worlds. Automatic links also work in reverse, so a Nether portal in `survival_nether` leads back to `survival`.
5. Run `/mvnp list` to check the links NetherPortals will use.

:::note
Multiverse-NetherPortals does not create destination worlds when a portal is used. Create or import the worlds with Multiverse-Core first. If no explicit or automatic destination exists, the portal does nothing; with `bounceback` enabled, players are pushed out of an unusable Nether portal.
:::

## Automatic linking

When a portal has no explicit link, NetherPortals derives its destination from the world's name. With the default configuration:

| Portal used in | Portal type | Automatic destination |
|---|---|---|
| `X` | Nether | `X_nether` |
| `X_nether` | Nether | `X` |
| `X` | End | `X_the_end` |
| `X_the_end` | End | `X` |

The destination must exist and be known to Multiverse. You can change the default `_nether` and `_the_end` naming rules with [`portal-auto-link-when`](/netherportals/reference/configuration-file#portal-auto-link-when).

## Customizing links

Use `/mvnp link` when a destination does not follow the automatic naming convention, or when you want a portal type to lead somewhere else entirely.

For example, this sends Nether portals in `survival` to `resource_nether`:

```text
/mvnp link nether survival resource_nether
```

Explicit links are directional. The command above changes portals in `survival`, but does not change portals in `resource_nether`. Add `--bidirectional` (or `-b`) to create both directions at once:

```text
/mvnp link nether survival resource_nether --bidirectional
```

The same commands work for End portals:

```text
/mvnp link end survival events_end --bidirectional
```

Links may connect worlds of any environment. Portal creation, coordinate scaling, and other NetherPortals behavior still apply based on the portal type and the source and destination worlds.

To remove an explicit link and return to automatic linking, run:

```text
/mvnp unlink nether survival
```

If the pair was linked in both directions, remove both links together:

```text
/mvnp unlink nether survival --bidirectional
```

See the [command reference](/netherportals/fundamentals/commands-usage) for all syntax and flag behavior.

### Disabling portals in one world

Link a world to itself to disable one portal type in that world:

```text
/mvnp link nether minigames minigames
```

Re-enable the portals by removing that self-link:

```text
/mvnp unlink nether minigames
```

## World scaling

World scaling controls how coordinates are converted when an entity travels between linked worlds. Each Multiverse world has a positive `scale` value. The destination coordinates are calculated as:

```text
destination coordinate = source coordinate × (source scale / destination scale)
```

For the standard Overworld-to-Nether relationship, the Overworld has a scale of `1` and the Nether has a scale of `8`. Entering a Nether portal at X/Z `800` in the Overworld therefore targets X/Z `100` in the Nether:

```text
800 × (1 / 8) = 100
```

Travelling back reverses the calculation:

```text
100 × (8 / 1) = 800
```

Multiverse-Core assigns environment-appropriate defaults to newly managed worlds. To inspect or change a world's scale, use its [`scale` world property](/core/fundamentals/world-properties#Scale):

```text
/mv modify <world> set scale <value>
```

Changing scale affects where portals search for or create their counterparts; it does not move existing portals or chunks.
