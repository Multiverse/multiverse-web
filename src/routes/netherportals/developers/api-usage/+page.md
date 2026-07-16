---
title: "API Usage"
---

Multiverse-NetherPortals 5.1 introduces `MultiverseNetherPortalsApi`, the main entry point for integrations. This page covers the most common API tasks. See the [developer API starter](/core/developers/developer-api-starter) for general Multiverse API conventions and the [Javadocs](https://multiverse.github.io/Multiverse-NetherPortals/javadoc/latest/) for the complete API.

:::note
The API described on this page is available in Multiverse-NetherPortals 5.1 and newer. Direct API access through the `MultiverseNetherPortals` plugin class is deprecated and scheduled for removal in Multiverse 6.
:::

## Adding Multiverse-NetherPortals to your project

Replace `VERSION` with the Multiverse-NetherPortals version used by your server.

### Gradle

```java
repositories {
    maven { url = "https://repo.onarandombox.com/content/groups/public/" }
}

dependencies {
    compileOnly 'org.mvplugins.multiverse.netherportals:multiverse-netherportals:VERSION'
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
        <groupId>org.mvplugins.multiverse.netherportals</groupId>
        <artifactId>multiverse-netherportals</artifactId>
        <version>VERSION</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

Add Multiverse-NetherPortals to your `plugin.yml` so its API is ready before your plugin is enabled:

```yaml
depend: [Multiverse-NetherPortals]
```

Use `softdepend` instead if the integration is optional, and check that the API is loaded before using it.

## Obtaining the API

### Using the singleton (recommended)

`get()` throws an `IllegalStateException` if Multiverse-NetherPortals has not finished loading.

```java
MultiverseNetherPortalsApi netherPortalsApi = MultiverseNetherPortalsApi.get();
```

For an optional integration that might initialize before Multiverse-NetherPortals, register a callback instead:

```java
MultiverseNetherPortalsApi.whenLoaded(netherPortalsApi -> {
    // Register the integration here.
});
```

You can also check the current state with `MultiverseNetherPortalsApi.isLoaded()`.

### Using the Bukkit ServicesManager

```java
RegisteredServiceProvider<MultiverseNetherPortalsApi> provider =
        Bukkit.getServicesManager().getRegistration(MultiverseNetherPortalsApi.class);

if (provider != null) {
    MultiverseNetherPortalsApi netherPortalsApi = provider.getProvider();
}
```

## Managing world links

Use the API's `LinksManager` to read, add, or remove explicit Nether and End portal links. A link only controls portals in its source world, so create a second link when travel should work in both directions.

:::warning
`addWorldLink` and `removeWorldLink` update links in memory. Call `save()` after making changes if they must persist to `links.yml` across a restart.
:::

### Linking an SMP world set

The following example links an overworld with its Nether and End in both directions, then saves all four links:

```java
public void linkSmpWorlds(String overworld, String netherWorld, String endWorld) {
    LinksManager links = MultiverseNetherPortalsApi.get().getLinksManager();

    links.addWorldLink(overworld, netherWorld, WorldLinkType.NETHER);
    links.addWorldLink(netherWorld, overworld, WorldLinkType.NETHER);

    links.addWorldLink(overworld, endWorld, WorldLinkType.END);
    links.addWorldLink(endWorld, overworld, WorldLinkType.END);

    links.save()
            .onSuccess(ignored -> getLogger().info("Saved the portal links."))
            .onFailure(error -> getLogger().severe(
                    "Could not save the portal links: " + error.getMessage()));
}
```

The `addWorldLink` method also has an overload that accepts two `MultiverseWorld` instances.

### Reading a link

`getWorldLink` returns a Vavr `Option`. It is empty when the source world has no explicit link of that type.

```java
LinksManager links = MultiverseNetherPortalsApi.get().getLinksManager();

links.getWorldLink("survival", WorldLinkType.NETHER)
        .peek(destination -> getLogger().info(
                "survival's Nether portals lead to " + destination));
```

Use `getWorldLinks()` to inspect every configured `WorldLink`, or `getLinksMapForType(WorldLinkType)` to get the source-to-destination mappings for one portal type.

### Removing a link

```java
LinksManager links = MultiverseNetherPortalsApi.get().getLinksManager();

if (links.removeWorldLink("survival", WorldLinkType.NETHER)) {
    links.save().onFailure(error -> getLogger().severe(
            "Could not save the portal links: " + error.getMessage()));
}
```

Removing a link restores the normal [automatic-linking behavior](/netherportals/fundamentals/basic-usage#Automatic-linking) for that source world and portal type.

## Letting a custom portal plugin take control

Some plugins use vanilla Nether or End portal blocks but provide their own destination logic. Register a `CustomPortalsHandleCheck` to tell Multiverse-NetherPortals which portal locations your plugin handles.

When a check returns `true`, Multiverse-NetherPortals leaves that portal event alone and does not run its own linking logic. Return `false` for every location that your plugin does not handle.

```java
public final class MyPlugin extends JavaPlugin {

    private CustomPortalsHandleCheck portalHandleCheck;

    @Override
    public void onEnable() {
        portalHandleCheck = (entity, portalLocation) ->
                myPortalManager.isCustomPortal(portalLocation);

        MultiverseNetherPortalsApi.get()
                .getCustomPortalsHandler()
                .registerHandleCheck(portalHandleCheck);
    }

    @Override
    public void onDisable() {
        if (portalHandleCheck != null && MultiverseNetherPortalsApi.isLoaded()) {
            MultiverseNetherPortalsApi.get()
                    .getCustomPortalsHandler()
                    .unregisterHandleCheck(portalHandleCheck);
        }
    }
}
```

Keep the registered `CustomPortalsHandleCheck` instance so you can unregister that same instance when your plugin is disabled. The `entity` argument may be `null`, so a check that uses it must handle that case. If a check throws an exception, Multiverse-NetherPortals logs the error, treats that check as `false`, and continues normally.

Multiverse-Portals uses this API automatically, so its custom portals take precedence over NetherPortals world links.

## Other API services

`MultiverseNetherPortalsApi` also exposes:

- `getNetherPortalsConfig()` for reading, changing, loading, and saving the plugin configuration.
- `getServiceLocator()` for advanced access to services in the Multiverse-NetherPortals dependency-injection system.
