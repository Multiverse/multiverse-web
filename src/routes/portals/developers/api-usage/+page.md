---
title: API Usage
---

This page provides examples and explanations for common Multiverse-Portals API usages. See the [developer API starter](/core/developers/developer-api-starter) for general Multiverse API conventions and the [Javadocs](https://multiverse.github.io/Multiverse-Portals/javadoc/latest/) for the complete API.

## Adding Multiverse-Portals to your project

Replace `VERSION` with the Multiverse-Portals version used by your server.

### Gradle

```md
repositories {
    maven { url = "https://repo.onarandombox.com/content/groups/public/" }
}

dependencies {
    compileOnly 'org.mvplugins.multiverse.portals:multiverse-portals:VERSION'
}
```

### Maven

```xml
<repositories>
    <repository>
        <id>onarandombox</id>
        <url>https://repo.onarandombox.com/content/groups/public/</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>org.mvplugins.multiverse.portals</groupId>
        <artifactId>multiverse-portals</artifactId>
        <version>VERSION</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

Also add `Multiverse-Portals` to `softdepend` or `depend` in your `plugin.yml` to ensure it loads before your plugin.

## Obtaining the API instance

### Using the singleton (recommended)

Note: this method will throw an `IllegalStateException` if the API is not loaded.

```java
MultiversePortalsApi portalsApi = MultiversePortalsApi.get();
```

For an optional integration that might initialize before Multiverse-Portals, register a callback instead. The callback runs immediately if the API is already ready, or once initialization finishes otherwise:

```java
MultiversePortalsApi.whenLoaded(portalsApi -> {
    PortalManager portalManager = portalsApi.getPortalManager();
    // initialize the integration
});
```

You can check the current state without throwing an exception:

```java
if (MultiversePortalsApi.isLoaded()) {
    MultiversePortalsApi portalsApi = MultiversePortalsApi.get();
}
```

### Using the Bukkit ServicesManager

```java
RegisteredServiceProvider<MultiversePortalsApi> provider = Bukkit.getServicesManager().getRegistration(MultiversePortalsApi.class);
if (provider != null) {
    MultiversePortalsApi portalsApi = provider.getProvider();
}
```

## Getting a portal by name

`getPortal(String)` returns `null` if no portal with that name exists.

```java
MVPortal portal = portalsApi.getPortalManager().getPortal("spawn-hub");
if (portal != null) {
    // portal found
}
```

## Getting a portal at a location

The following returns the portal a player is standing in, respecting their access permissions. Returns `null` if the player is not in any accessible portal.

```java
MVPortal portal = portalsApi.getPortalManager().getPortal(player, player.getLocation());
if (portal != null) {
    // player is standing in a portal they can use
}
```

To check a location without a player (no permission check), use the location-only overload:

```java
MVPortal portal = portalsApi.getPortalManager().getPortal(location);
```

## Getting all portals

```java
List<MVPortal> allPortals = portalsApi.getPortalManager().getAllPortals();

// Or only portals a specific player has access to:
List<MVPortal> accessiblePortals = portalsApi.getPortalManager().getPortals(player);
```

## Creating a portal

A `PortalLocation` defines the axis-aligned bounding box of the portal region as two corner vectors inside a Multiverse world. The string format is `WORLD:X,Y,Z:X,Y,Z`. The API can register and inspect portals whose Multiverse world is currently unloaded.

```java
PortalManager portalManager = portalsApi.getPortalManager();

// Parse a location from a world-prefixed string
PortalLocation location = PortalLocation.parseLocation("world:10,64,10:12,68,10");

MultiverseWorld mvWorld = MultiverseCoreApi.get().getWorldManager().getWorld("world").getOrNull();
if (mvWorld != null && location.isValidLocation()) {
    boolean added = portalManager.addPortal(mvWorld, "my-portal", "ServerOwner", location);
    if (added) {
        // portal successfully created
    }
}
```

## Getting a portal's world

Use `getMultiverseWorld()` when the configured Multiverse world may be unloaded. Use `getBukkitWorld()` only when you need a live Bukkit `World`; it returns an empty `Option` while the world is unloaded.

```java
portal.getMultiverseWorld().peek(mvWorld ->
        getLogger().info("Portal world: " + mvWorld.getName()));

portal.getBukkitWorld().peek(bukkitWorld ->
        getLogger().info("Loaded Bukkit world: " + bukkitWorld.getName()));
```

`getWorld()` and the `LoadedMultiverseWorld` portal constructor are deprecated and scheduled for removal in Multiverse 6. Use the optional world getters and the `MultiverseWorld` constructor instead.

## Removing a portal

Pass `true` as the second argument to also remove the portal from `portals.yml`. Passing `false` removes it from memory only (useful for temporary changes during a reload).

```java
MVPortal removed = portalsApi.getPortalManager().removePortal("my-portal", true);
if (removed != null) {
    // portal was removed
}
```

## Editing portal properties

### Setting the portal action

Since 5.2, portals support three built-in action types:

| Action type | Description |
|---|---|
| `multiverse-destination` | Teleport the entity to any Multiverse [destination](/core/reference/destinations) |
| `command` | Execute a command when an entity enters the portal |
| `server` | Send the player to a BungeeCord/Velocity server |

```java
// Teleport to a Multiverse destination
portal.setActionType("multiverse-destination");
portal.setAction("w:nether_world");

// Run a command (as player, or with "op:" / "console:" prefix)
portal.setActionType("command");
portal.setAction("say Hello %player%!");

// Send to a BungeeCord/Velocity server
portal.setActionType("server");
portal.setAction("lobby");
```

You can also set both at once using an `ActionHandler` obtained from the `ActionHandlerProvider`:

```java
ActionHandlerProvider handlerProvider = portalsApi.getActionHandlerProvider();

handlerProvider.parseHandler("multiverse-destination", "e:world:0,64,0:0:0")
        .peek(handler -> portal.setActionHandler(handler))
        .onFailure(failure -> {
            // invalid action string
        });
```

### Setting the portal owner

```java
portal.setOwner("PlayerName");
String owner = portal.getOwner();
```

### Toggling non-player teleportation

```java
portal.setTeleportNonPlayers(true);  // also teleport mobs/vehicles
boolean teleportsEntities = portal.getTeleportNonPlayers();
```

### Destination safety checking

```java
portal.setCheckDestinationSafety(false); // skip safe-spawn check at destination
boolean checksSafety = portal.getCheckDestinationSafety();
```

### Configuring portal messages

Each portal can send a message after a successful action or when a player lacks access. The values accept literal text, `@disabled`, `@default`, or `@@<locale-key>`. Literal and localized messages support `{player}` and `{portal}` replacements.

```java
portal.setActionSuccessMessage("&aWelcome, {player}!");
portal.setNoPermissionMessage("@@myplugin.portal.denied");
```

Both setters return `Try<Void>`. See [Configure Portal Messages](/portals/how-to/configure-portal-messages/) for the complete value format. The global permission-message switch is also available through `PortalsConfig`:

```java
PortalsConfig config = portalsApi.getPortalsConfig();
config.setSendNoPermissionMessages(false);
```

### Using StringPropertyHandle

Since 5.1 you can get or set any portal property by its string name — handy for generic editors or config commands:

```java
StringPropertyHandle handle = portal.getStringPropertyHandle();

// Set a property by name
handle.setPropertyString("teleport-non-players", "true");

// Get a property by name
handle.getPropertyString("owner").peek(value -> {
    // use value
});
```

## Listening to MVPortalEvent

`MVPortalEvent` is fired (and cancellable) whenever a player is about to be teleported by a portal. Listen to it like any other Bukkit event:

```java
@EventHandler
public void onPortalUse(MVPortalEvent event) {
    Player player = event.getTeleportee();
    MVPortal portal = event.getSendingPortal();

    if (portal != null && portal.getName().equals("vip-portal")) {
        if (!player.hasPermission("myplugin.vip")) {
            event.setCancelled(true);
            player.sendMessage("You need VIP rank to use this portal!");
        }
    }
}
```

## Registering a custom action handler type

Since 5.2 you can extend `ActionHandlerType` to add your own portal action, such as opening a GUI or granting a reward.

### 1. Define the handler

```java
public class RewardActionHandler extends ActionHandler<RewardActionHandlerType, RewardActionHandler> {

    private final String rewardId;

    public RewardActionHandler(RewardActionHandlerType type, String rewardId) {
        super(type);
        this.rewardId = rewardId;
    }

    @Override
    public Attempt<Void, ActionFailureReason> runAction(MVPortal portal, Entity entity) {
        if (entity instanceof Player player) {
            MyRewardPlugin.giveReward(player, rewardId);
        }
        return Attempt.success(null);
    }

    @Override
    public Message actionDescription(Entity entity) {
        return Message.of("Gives reward: " + rewardId);
    }

    @Override
    public String serialise() {
        return rewardId;
    }
}
```

### 2. Define the type

```java
public class RewardActionHandlerType extends ActionHandlerType<RewardActionHandlerType, RewardActionHandler> {

    public RewardActionHandlerType() {
        super("reward");
    }

    @Override
    public Attempt<RewardActionHandler, ActionFailureReason> parseHandler(CommandSender sender, String action) {
        if (action.isEmpty()) {
            return Attempt.failure(ActionFailureReason.INSTANCE, Message.of("Please specify a reward ID."));
        }
        return Attempt.success(new RewardActionHandler(this, action));
    }
}
```

### 3. Register on plugin enable

```java
@Override
public void onEnable() {
    ActionHandlerProvider handlerProvider = MultiversePortalsApi.get()
            .getActionHandlerProvider();

    handlerProvider.registerHandlerType(new RewardActionHandlerType());
}
```

Now portals can use `action-type: reward` and `action: my-reward-id` in their config.
