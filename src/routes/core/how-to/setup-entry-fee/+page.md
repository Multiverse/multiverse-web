---
title: "Currency"
---

Multiverse allows you to charge players an entry fee to enter a world. You can charge either items or virtual currency (via [Vault](https://www.spigotmc.org/resources/vault.34315/) + an economy plugin).

## Setting an entry fee

Use `/mv modify` to configure the three entry-fee properties:

### Enable/disable the fee

```
/mv modify [world] set entryfee-enabled true
/mv modify [world] set entryfee-enabled false
```

### Set the amount

```
/mv modify [world] set entryfee-amount <amount>
```

### Set the currency

For **items**, use the Minecraft material name:

```
/mv modify [world] set entryfee-currency DIRT
```

For **virtual currency** (requires [Vault](https://www.spigotmc.org/resources/vault.34315/) and a compatible economy plugin such as [EssentialsX](https://essentialsx.net/)):

```
/mv modify [world] set entryfee-currency @vault-economy
```

## Example: Charge 5 Dirt to enter FernWorld

```
/mv modify FernWorld set entryfee-enabled true
/mv modify FernWorld set entryfee-amount 5
/mv modify FernWorld set entryfee-currency DIRT
```

## Example: Charge $13.75 to enter VIPWorld

```
/mv modify VIPWorld set entryfee-enabled true
/mv modify VIPWorld set entryfee-amount 13.75
/mv modify VIPWorld set entryfee-currency @vault-economy
```

## Exempting players

To exempt a player or group from paying the entry fee, grant the permission:

```
multiverse.exempt.[worldname]
```

For example, `multiverse.exempt.VIPWorld` lets a player enter VIPWorld for free.

## YAML reference

Entry-fee settings are stored in `worlds.yml` under each world:

```yaml
entry-fee:
  enabled: true
  amount: 5
  currency: DIRT
```

See [World Properties](/core/fundamentals/world-properties#World-Fees) for the full reference.
