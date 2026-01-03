---
title: "Permissions Setup"
---

# Portal Permissions

Before setting up permissions for Multiverse-Portals, ensure that you have a permissions plugin installed on your server, we recommend using [LuckPerms](https://luckperms.net/).

Follow the instructions provided by your chosen permissions plugin to set it up correctly. Do not ask for help on setting up permissions plugins on the Multiverse support channels, as this is outside the scope of Multiverse support.

## Multiverse Portals Permissions
Multiverse-Portals allows you to control who can use portals via permissions! By default, Multiverse-Portals enforces portal access permissions. This means that players will need the permission `multiverse.portal.access.<portal-name>` to use a particular portal. **All non-ops cannot use any portals until given the appropriate permissions.**

For example, if you have a portal named `vip_portal`, then players will need the permission `multiverse.portal.access.vip_portal` to use that portal. If you want to allow all players to use all portals, you can give them `multiverse.portal.access.*`.

## Exemptions
If you have certain groups that you want to exempt from payments, you can give those groups the specific exemption permission:
`multiverse.portal.exempt.PORTALNAME`.

## Fill Portal
If you have certain groups that you want to allow to fill portals (with lava/water), you can give those groups the specific fill permission:
`multiverse.portal.fill.PORTALNAME`.

*They must also have `multiverse.portal.access.PORTALNAME`

## Note 1
If players do not have `multiverse.access.WORLDNAME` (the world access permission) of the destination of the portal they will be denied access. Here's an example:

*Portal A* (in world) goes to *Portal C* (in world3)
Player `fernferret` **has**:   
`multiverse.portal.access.*` and `multiverse.access.world`   
**but not**
`multiverse.access.world3`

He will be **denied access** to use *Portal C*.

## Note 2
If you would like to **let all of your users use _all portals_ and go to _all worlds_**, use the following commands:

`/mv config enforc-eaccess false`

`/mvp config enforce-portal-access false`
