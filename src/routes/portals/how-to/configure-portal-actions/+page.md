---
title: "Configure Portal Actions"
---

Previously portals created by Multiverse-Portals can only perform [destination](/core/reference/destinations) teleports. With the new Portal Actions system, you can now configure portals to perform a variety of actions when a player uses them. Currently, there is built-in supported actions to teleport to a destination, run a command, and transfer to another server via BungeeCord/Velocity. 3rd party plugins can also add their own custom actions via the API.

## Configuring with `/mvp modify` Command

There is two properties you will need to modify on a portal to configure its actions: `action-type` and `action`. The `action-type` property determines what type of action the portal will perform, while the `action` property contains the parameters for that action. The template command for modifying these properties are as follows:

```
/mvp modify <portal-name> action-type <action-type>
/mvp modify <portal-name> action <action-parameters>
```

:::note
When changing the `action-type` of a portal, the `action` property will be untouched. You will need to also change the `action` property to match the usage of the new `action-type` as required.
:::

## Action Types and Parameters

The following only covers the built-in action types. For information on any 3rd party action types, please refer to the documentation of the respective plugin.

### Multiverse Destination Action

This `action-type` name is `multiverse-destination`. This action type teleports the player to a specified destination using Multiverse's built-in teleportation system. This is the default action type for portals created in Multiverse-Portals.

The `action` parameter uses the same system as `/mvtp` [destination](/core/reference/destinations) strings. All destinations that is supported by `/mvtp` are also supported here.

Example Usage:
```java
/mvp modify myportal action-type multiverse-destination
/mvp modify myportal action e:smp_world:100,64,200:90:90
```

### Command Action

This `action-type` name is `command`. This action type executes a command when they use the portal.

The `action` parameter is the command to be run. Note that the command should not start with a `/`. There is two built in placeholders `%player%` and `%world%` that can be used in the command string, as well as PlaceholderAPI support. Prefix with `op:` or `console:` to run as operator or console respectively. (e.g. `"console:say Hello %player% from %world%!"`)

You can modify the command to be run any valid command on your server. If you are running command as a player, the player must have permission to run the command, otherwise may fail silently. You may want to run commands as console or operator to avoid permission issues. Also note that multiverse is **NOT RESPONSIBLE** for how the command behaves or outputs, as those are not multiverse commands.

Example Usage:
```java
/mvp modify myportal action-type command
/mvp modify myportal action "say Welcome %player% to the server!"
```

### Server Action

This `action-type` name is `server`. This action type transfers the player to another server via BungeeCord/Velocity.

The `action` parameter is the name of the target server as configured in your BungeeCord/Velocity setup. Due to limitations in BungeeCord/Velocity, there may be no feedback on whether the transfer was successful or not (but it will be quite obvious if it worked).

Example Usage:
```java
/mvp modify myportal action-type server
/mvp modify myportal action lobby-server
```
