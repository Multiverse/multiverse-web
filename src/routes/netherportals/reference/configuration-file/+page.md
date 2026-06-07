---
title: "Configuration File"
---

Here is the default config that ships with MV-NetherPortals with an explanation of each option.

## Multiverse-NetherPortals Sample Config
```yaml
bounceback: true
teleport_entities: true
send_no_destination_message: true
send_disabled_portal_message: true
portal-auto-link-when:
  nether:
    prefix: ''
    suffix: _nether
  end:
    prefix: ''
    suffix: _the_end
worlds: {}
```

## Option Reference

### `bounceback`
**Default:** `true`

When a player steps into a Nether portal and has no valid destination (e.g. no linked world exists and the naming convention doesn't match), they are pushed back out of the portal instead of being teleported to the vanilla nether. Set to `false` to let Minecraft's default portal behaviour take over instead.

:::note
Bounceback currently only applies to Nether portals. End portals do not have a bounceback implementation.
:::

---

### `teleport_entities`
**Default:** `true`

When `true`, non-player entities (mobs, minecarts, etc.) that enter a portal will also be teleported according to Multiverse's portal rules. Set to `false` to restrict teleportation to players only.

---

### `send_no_destination_message`
**Default:** `true`

When `true`, a player who steps into a portal that has no configured destination receives a chat message explaining there is no destination. Set to `false` to suppress this message.

---

### `send_disabled_portal_message`
**Default:** `true`

When `true`, a player who steps into a portal that has been disabled (e.g. a world linked to itself) receives a chat message saying the portal is disabled. Set to `false` to suppress this message.

---

### `portal-auto-link-when`
Controls the naming convention used to auto-link portals between worlds. When a player enters a portal in world `X` and no explicit link has been set with `/mvnp link`, Multiverse-NetherPortals looks for a world whose name matches the pattern defined here.

#### `nether`
- **`prefix`** — String prepended to the world name when searching for its nether world. Default: `''` (empty).
- **`suffix`** — String appended to the world name when searching for its nether world. Default: `_nether`.

So by default, portals in world `survival` auto-link to `survival_nether`.

#### `end`
- **`prefix`** — String prepended to the world name when searching for its end world. Default: `''` (empty).
- **`suffix`** — String appended to the world name when searching for its end world. Default: `_the_end`.

So by default, portals in world `survival` auto-link to `survival_the_end`.

**Example:** To use a `nether_` prefix instead of a `_nether` suffix:

```yaml
portal-auto-link-when:
  nether:
    prefix: 'nether_'
    suffix: ''
```

---

### `worlds`
**Default:** `{}`

Stores the explicit world links created by [`/mvnp link`](/netherportals/fundamentals/commands-usage#Link-Command). You should not edit this by hand — use the command instead.
