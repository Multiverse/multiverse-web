---
title: "World Meta"
---

World meta lets you attach arbitrary key-value string data to any Multiverse world. It is stored in `worlds.yml` alongside the rest of the world's configuration, and is fully accessible through both commands and [PlaceholderAPI](/core/reference/placeholders/).

Common uses include:
- Tagging worlds with a category or type for use in chat plugins or scoreboards
- Storing a colour code for the world (see [World colour](#world-colour) below)
- Keeping track of any custom attribute your server needs that isn't a built-in world property

## Viewing meta

List all meta entries for a world:

```java
/mv meta info [world] [--page <page>] [--filter <filter>]
```

- `[world]` — the world to inspect. Defaults to your current world in-game. Required from the console.
- `--page` / `--filter` — pagination and filtering, same as other list commands.

### Examples

- `/mv meta info` — shows meta for your current world
- `/mv meta info survival` — shows meta for the world named `survival`

### Permission

`multiverse.core.meta.info`

## Setting a meta value

```java
/mv meta modify [world] set <key> <value>
```

- `[world]` — the world to modify. Defaults to your current world in-game.
- `<key>` — the meta key. Can be any string without spaces.
- `<value>` — the value to store.

### Examples

- `/mv meta modify survival set category pvp` — tags `survival` with `category=pvp`
- `/mv meta modify lobby set max-players 50`

### Permission

`multiverse.core.meta.modify`

## Removing a meta value

```java
/mv meta modify [world] remove <key>
```

### Examples

- `/mv meta modify survival remove category` — removes the `category` key from `survival`

### Permission

`multiverse.core.meta.modify`

## Using meta in PlaceholderAPI

World meta values are accessible as placeholders using the format:

```
%multiverse-core_meta_<key>%
%multiverse-core_meta_<key>_<world>%
```

For example, if you set `/mv meta modify survival set category pvp`, you can display it elsewhere with:

```
%multiverse-core_meta_category%
```

If the key contains underscores (e.g. `my_key`), write it as-is in the placeholder — underscores in the key are preserved:

```
%multiverse-core_meta_my_key%
```

:::note[Note]
If the requested meta key does not exist for the world, the placeholder returns an empty string (or `null` depending on your `invalid-papi-format-returns-blank` config setting).
:::

## World colour

In Multiverse v4, worlds had a dedicated `world-colour` property. This was removed in v5 — instead, use the [Alias](/core/fundamentals/world-properties#Alias) property, which supports colour codes directly (e.g. `&aGreen World`).

If you need to expose a world's colour code as a standalone placeholder for use in other plugins, you can store it as a meta value:

```java
/mv meta modify survival set colour &a
```

Then reference it in chat plugins or scoreboards as:

```
%multiverse-core_meta_colour%
```

## Storage

Meta is stored under each world entry in `worlds.yml`:

```yaml
minecraft:overworld:
  meta:
    category: survival
    colour: "&a"
```

:::caution[Editing the config directly]
We do not recommend editing the `meta` section of `worlds.yml` by hand. YAML is sensitive to indentation and quoting, and a formatting error will cause `worlds.yml` to fail to load, potentially losing all your world configuration. Use the `/mv meta modify` command instead — it is safe and takes effect immediately without a reload.

If you must edit the file directly, take a backup first and run `/mv reload` afterwards.
:::
