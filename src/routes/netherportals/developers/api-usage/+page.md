---
title: "API Usage"
---

This pages provides examples and explanation for the common API usages of Multiverse-NetherPortals introduced [here](/core/developers/developer-api-starter). It's impossible to cover all API methods in this guide, but rest assured we have [javadocs](http://ci.onarandombox.com/job/Multiverse-Core/javadoc/overview-summary.html) provided.

### Link a set of SMP worlds
```java
public void linkSMPWorlds(String overworld, String netherworld, String endworld) {
    // Linking nether portals both ways
    netherportals.addWorldLink(overworld, netherworld, PortalType.NETHER);
    netherportals.addWorldLink(netherworld, overworld, PortalType.NETHER);

    // Linking end portals both ways
    netherportals.addWorldLink(overworld, endworld, PortalType.ENDER);
    netherportals.addWorldLink(endworld, overworld, PortalType.ENDER);
}
```
