---
title: "Configure Portal Messages"
---

Multiverse-Portals lets you configure the message sent after a portal action succeeds and the message shown when a player does not have permission to enter a portal.

## Message properties

Use `/mvp modify` to set either property:

```text
/mvp modify <portal-name> action-success-message <message>
/mvp modify <portal-name> no-permission-message <message>
```

Messages can use legacy colour codes such as `&a` and these placeholders:

| Placeholder | Replaced with |
|---|---|
| `{player}` | The name of the player or entity using the portal |
| `{portal}` | The portal name |

Quote a message that contains spaces. For example:

```text
/mvp modify spawn-portal action-success-message "&aWelcome, {player}!"
/mvp modify vip-portal no-permission-message "&cYou cannot use {portal}."
```

The success message is only sent after the portal action completes successfully. By default it is disabled. The no-permission message is shown when `enforce-portal-access` is enabled and the player does not have `multiverse.portal.access.<portal-name>`.

## Special values

Both message properties accept these special values:

| Value | Behaviour |
|---|---|
| `@disabled` | Do not send a message |
| `@default` | Use the built-in localized message |
| `@@<message-key>` | Use a specific key from a Multiverse-Portals locale file |

The defaults are `@disabled` for `action-success-message` and `@default` for `no-permission-message`.

To restore those defaults:

```text
/mvp modify spawn-portal action-success-message @disabled
/mvp modify spawn-portal no-permission-message @default
```

## Using a locale key

Use a locale key when the message should follow each player's client language. Follow [Customise Locale Messages](/core/how-to/customise-locales/) to create the Multiverse-Portals locale files, then add the same custom key to each applicable file in `plugins/Multiverse-Portals/locales/`:

```ini
# multiverse-portals_en.properties
myserver.portal.welcome=&aWelcome, {player}!

# multiverse-portals_es.properties
myserver.portal.welcome=&a¡Bienvenido, {player}!
```

Then prefix the key with `@@` when assigning it to the portal:

```text
/mvp modify spawn-portal action-success-message @@myserver.portal.welcome
```

## Globally hiding permission-denied messages

To stop all portals from sending their permission-denied message, use:

```text
/mvp config send-no-permission-messages false
```

This is a global switch. It takes precedence over each portal's `no-permission-message` value. Permission checks still happen while `enforce-portal-access` is enabled; only the message is hidden.
