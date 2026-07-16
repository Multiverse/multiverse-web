---
title: "Configuration File"
---

Here is the default config that ships with MV-NetherPortals with an explanation of each option.

## Multiverse-NetherPortals Sample Config

@code(./config.yml)

:::note
Since Multiverse-NetherPortals 5.1, explicit portal links are stored separately in `plugins/Multiverse-NetherPortals/links.yml`. Create and remove links with [`/mvnp link` and `/mvnp unlink`](/netherportals/fundamentals/commands-usage) instead of editing either file by hand.
:::

## Changes in 5.1

Multiverse-NetherPortals automatically migrates these older underscore-separated names when it loads the configuration:

| Before 5.1 | 5.1 and newer |
|---|---|
| `teleport_entities` | `teleport-entities` |
| `send_disabled_portal_message` | `send-disabled-portal-message` |
| `send_no_destination_message` | `send-no-destination-message` |
| `end_platform_drop_blocks` | `end-platform-drop-blocks` |

Legacy links under `worlds` are imported into `links.yml`. The `worlds` section is no longer a Multiverse-NetherPortals configuration option.

## Option Reference

### `portal-auto-link-when`

Controls the naming convention used to automatically link portals between dimension worlds. Automatic linking is used only when the source world does not have an explicit link for that portal type.

#### `portal-auto-link-when.nether.prefix`

**Default:** `''` (empty)

Text added before a base world name when looking for its Nether world.

#### `portal-auto-link-when.nether.suffix`

**Default:** `_nether`

Text added after a base world name when looking for its Nether world. With the default prefix and suffix, Nether portals in `survival` automatically lead to `survival_nether`, and Nether portals in `survival_nether` lead back to `survival`.

#### `portal-auto-link-when.end.prefix`

**Default:** `''` (empty)

Text added before a base world name when looking for its End world.

#### `portal-auto-link-when.end.suffix`

**Default:** `_the_end`

Text added after a base world name when looking for its End world. With the default prefix and suffix, End portals in `survival` automatically lead to `survival_the_end`, and the End exit returns to `survival` when End-exit handling is enabled.

For example, use a `nether_` prefix instead of the default suffix with:

```yaml
portal-auto-link-when:
  nether:
    prefix: 'nether_'
    suffix: ''
```

### `handle-end-exit-respawn`

**Default for new configurations:** `true`

Controls the special handling required when a player uses an End exit portal. Minecraft treats this as a respawn rather than a normal portal teleport. When enabled, Multiverse-NetherPortals sends the player to the spawn of the explicitly or automatically linked world, while preserving a valid bed or respawn-anchor destination where applicable.

:::warning
This option is supported only on Paper servers. When upgrading an older configuration to 5.1, it is initially set to `false` to preserve the server's previous behavior. Enable it manually after confirming that you want Multiverse-NetherPortals to control End exits.
:::

### `bounceback`

**Default:** `true`

When enabled, a player is physically pushed out of an unusable Nether portal—for example, when its explicit or automatic destination does not exist, or the player cannot enter the destination world. When disabled, the player is not pushed, but a portal without a valid destination still cannot teleport them.

:::note
Bounceback currently only applies to Nether portals. End portals do not have a bounceback implementation.
:::

### `teleport-entities`

**Default:** `true`

When enabled, non-player entities such as mobs, boats, and minecarts can travel through Nether and End portals using the same world-linking rules. Set it to `false` to restrict NetherPortals teleportation to players.

### `send-disabled-portal-message`

**Default:** `true`

When enabled, players are told when the current world's portal type has been disabled by explicitly linking the world to itself. Set it to `false` to suppress this message.

### `send-no-destination-message`

**Default:** `true`

When enabled, players are told when a portal has no valid explicit or automatic destination. The message also identifies the automatically selected world that could not be found. Set it to `false` to suppress these messages.

### `end-platform-drop-blocks`

**Default:** `true`

When enabled, blocks replaced while Multiverse-NetherPortals creates an End arrival platform in a non-default End world are dropped as items, matching vanilla behavior. Set it to `false` to replace those blocks without dropping them.

:::note
The server handles the default End world and its arrival platform directly, even when Multiverse is installed. This option therefore affects platforms created by Multiverse-NetherPortals in non-default End worlds only.
:::

### `version`

**Current value:** `5.1`

Tracks the configuration format so Multiverse-NetherPortals can apply migrations. Do not edit this value.
