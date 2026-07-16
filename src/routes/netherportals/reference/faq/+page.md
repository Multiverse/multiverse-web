---
title: "FAQ"
---

## Portals do nothing when I step into them

By default, Nether portals in world `X` look for a world named `X_nether`. If that world doesn't exist, the portal does nothing (players are bounced back if `bounceback: true` in the [config](/netherportals/reference/configuration-file)).

**Fix:** Either create the matching nether world (`/mv create myworld_nether nether`) or explicitly link the portals to an existing world with [`/mvnp link nether myworld targetworld`](/netherportals/fundamentals/commands-usage#Link-Command).

## How do I activate nether portal auto-creation / auto-linking?

Portals auto-link based on the naming convention in the [config](/netherportals/reference/configuration-file). The default convention is:

- Nether portals in world `X` → world `X_nether`
- End portals in world `X` → world `X_the_end`

As long as the worlds exist with those names, portals link automatically with no extra configuration needed.

## How do I change the `_nether` / `_the_end` suffix?

Edit `portal-auto-link-when` in `plugins/Multiverse-NetherPortals/config.yml`. For example, to use `nether_` as a prefix instead:

```yaml
portal-auto-link-when:
  nether:
    prefix: 'nether_'
    suffix: ''
```

See the [configuration reference](/netherportals/reference/configuration-file#portal-auto-link-when) for full details.

## How do I link portals to a world that doesn't follow the naming convention?

Use the [`/mvnp link`](/netherportals/fundamentals/commands-usage#Link-Command) command to set an explicit destination:

```
/mvnp link nether survival hub
```

This sends all nether portals in `survival` to `hub`, regardless of naming. See the [commands page](/netherportals/fundamentals/commands-usage) for full usage.

## How do I stop mobs from going through portals?

Set `teleport-entities: false` in `plugins/Multiverse-NetherPortals/config.yml` and restart or reload the plugin. See the [`teleport-entities` configuration reference](/netherportals/reference/configuration-file#teleport-entities).

## How do I suppress the "no destination" chat message?

Set `send-no-destination-message: false` in `plugins/Multiverse-NetherPortals/config.yml`. See the [`send-no-destination-message` configuration reference](/netherportals/reference/configuration-file#send-no-destination-message).

## Links are not two-way — how do I make portals go back?

Links are one-directional by default. Add `--bidirectional` (or `-b`) to create both directions at once:

```
/mvnp link nether world world_nether --bidirectional
```

You can also add the reverse link later with a second `/mvnp link` command. To remove both sides of a bidirectional pair, use `/mvnp unlink nether world --bidirectional`.

## World scaling — why does distance travelled differ between worlds?

Each world has a `scale` property. When a player travels through a nether portal, their exit position in the destination world is calculated using the ratio of the two worlds' scales. The standard Minecraft nether uses a scale of 8 (1 block in the nether = 8 blocks overworld). See [World Properties — Scale](/core/fundamentals/world-properties#Scale) and the [scaling section](/netherportals/fundamentals/basic-usage#World-scaling) on the basic usage page.
