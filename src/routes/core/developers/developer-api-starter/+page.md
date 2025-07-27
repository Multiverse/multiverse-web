---
title: "Developer API Starter"
---

## Versioning

The Multiverse API follows the [Semantic Versioning](https://semver.org/) convention. This means whenever a non-backwards compatible change is made, the major version will increment. You can rest assured knowing your integration will not break between minor/patch versions.

## Adding Multiverse to your project

The multiverse's artifacts are published on our own maven repository: https://repo.onarandombox.com

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
        <groupId>org.mvplugins.multiverse.core</groupId> <!-- Replace for other sub-modules -->
        <artifactId>multiverse-core</artifactId> <!-- Replace for other sub-modules -->
        <version>5.0.0-SNAPSHOT</version> <!-- Replace with the version you need -->
        <scope>provided</scope>
    </dependency>
</dependencies>
```

### Gradle

```md
repositories {
    maven { url = "https://repo.onarandombox.com/content/groups/public/" }
}

dependencies {
    compileOnly 'org.mvplugins.multiverse.core:multiverse-core:5.0.0-SNAPSHOT'
}
```

## Obtaining an instance of the API 

The root API instance is `MultiverseCoreApi`. You need to obtain an instance of this interface in order to do anything. Unlike previous Multiverse versions, you should not be getting Multiverse-Core instance through bukkit's `PluginManager#getPlugin()` method. This is due to use shifting to a dependency injection system where there will no longer to getter methods in the Plugin's class.

Before accessing the multiverse's api, ensure that the multiverse plugin is loaded before your plugin by adding "Multiverse-Core" to `softdepend` or `depend` in your `plugin.yml`. You can also use `PluginManager#isPluginLoaded()` method and `PluginEnableEvent` to check and detect when Multiverse-Core is loaded.

### Using the Singleton (Recommended) 

Note: this method will throw an IllegalStateException if the API is not loaded.

```java
MultiverseCoreApi coreApi = MultiverseCoreApi.get();
```

### Using the Bukkit ServicesManager 

```java
RegisteredServiceProvider<MultiverseCoreApi> provider = Bukkit.getServicesManager().getRegistration(MultiverseCoreApi.class);
if (provider != null) {
    MultiverseCoreApi coreApi = provider.getProvider();
}
```

## Useful Information

### Thread Safety

All world operations can only be done on the main server thread.

### Handling with [vavr](https://github.com/vavr-io/vavr)

Multiverse uses vavr for handling optionals and exceptions. This means instead of `if (xx == null)` checks, you will have to use callbacks such as `xxx.peek(obj -> { ... })` or methods such as `xxx.isDefined()`


```java
// !!!! THIS WILL NOTTTTTTT WORK
MultiverseWorld mvWorld = worldManager.getWorld("world");
if (mvWorld != null) {
    // do world action
}
```

```java
// Recommended way of doing it
worldManager.getWorld("world").peek(world -> {
    // do world action
});
```

```java
// If you still want to use if checking (Not recommended)
Option<MultiverseWorld> optMVWorld = worldManager.getWorld("world");
if (optMVWorld.isDefined()) {
    MultiverseWorld mvWorld = optMVWorld.get();
    // do world action
}
```

```java
// Convert back to old nullable object (Not recommended)
MultiverseWorld mvWorld = worldManager.getWorld("world").getOrNull();
if (mvWorld != null) {
    // do world action
}
```

We encourage developers to read more about vavr [here](https://docs.vavr.io) to better utilise the power of vavr when using Multiverse API.
