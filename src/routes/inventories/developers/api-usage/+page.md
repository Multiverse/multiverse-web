---
title: API Usage
---

This pages provides examples and explanation for the common API usages of Multiverse-Inventories introduced [here](/core/developers/developer-api-starter). It's impossible to cover all API methods in this guide, but rest assured we have [javadocs](https://multiverse.github.io/Multiverse-Inventories/javadoc/latest/) provided.

## [WorldGroupManager](https://github.com/Multiverse/Multiverse-Inventories/blob/main/src/main/java/com/onarandombox/multiverseinventories/profile/WorldGroupManager.java)
World groups (stored in `groups.yml`) have powerful features to customise how player data is share/separated between worlds on your server. The 2 main parts of a `WorldGroup` is the worlds and sharables. To learn more on detailed mechanics see [this](/inventories/reference/sharing-details).

### Get WorldGroupManager instance
```java
WorldGroupManager groupManager = inventories.getGroupManager();
```

### Create new [WorldGroup](https://github.com/Multiverse/Multiverse-Inventories/blob/main/src/main/java/com/onarandombox/multiverseinventories/WorldGroup.java) for SMP setup
The following is a simple example method to create a world group for a typical SMP setup. You can easily adapt this to other world setups as well.
```java
public void createSMPWorldGroup(String worldName) {
    // Create new group named after the world. 
    // Note this does not add group to Multiverse-Inventories knowledge yet.
    WorldGroup newGroup = groupManager.newEmptyGroup(worldName); 

    // Add the 3 usual SMP world dims.
    newGroup.addWorld(worldName);
    newGroup.addWorld(worldName + "_nether");
    newGroup.addWorld(worldName + "_the_end");

    // Set to shares to all, so player data is consistent in overworld, nether and end.
    newGroup.getShares().addAll(Sharables.allOf());

    // Finally we add it to Multiverse-Inventories knowledge.
    // This step is important, else your WorldGroup will not work!
    groupManager.updateGroup(newGroup);
}
```



## [Sharable](https://github.com/Multiverse/Multiverse-Inventories/blob/main/src/main/java/com/onarandombox/multiverseinventories/share/Sharable.java)
Let's learn how to create your unique sharable to allow for per world/worldgroup data!

1. Create a class for the static sharable definitions to go.
```java
public class MyAmazingSharables {
    
}
```
2. Decide what data the sharable will store.
   * If my plugin was an economy plugin I would use the Double type so that I could store the amount for each player
   * If I have a plugin that gives backpacks, I would use an array of ItemStack as the type because that's what is stored.
   * If I had something like a custom set of data per player, I could also write a custom class and use that.

3. Create a Sharable definition in your class. In this case, I will use an ItemStack array, as it will be for a custom inventory.
```java
public class MyAmazingSharables {
            
    public static final Sharable<ItemStack[]> MySharable = new Sharable.Builder<ItemStack[]>("mySharable", ItemStack[].class, new SharableHandler<ItemStack[]>() {
        @Override
        public void updateProfile(PlayerProfile profile, Player player) {
            profile.set(MySharable, player.getInventory().getContents());
        }
                    
        @Override
        public boolean updatePlayer(Player player, PlayerProfile profile) {
            ItemStack[] value = profile.get(MySharable);
            if ( value == null ) {
                return false;
            }
            player.getInventory().setContents(value);
            player.updateInventory();
            return true;
                              
        }
    }).stringSerializer(new ProfileEntry(false, "mySharable")).altName("ms").build();
}
```
The final ProfileEntry string defines the name in the storage file itself, not just internally. The altName(String) function allows you to specify other values in the config file that would equate to the same internal name for the share.

