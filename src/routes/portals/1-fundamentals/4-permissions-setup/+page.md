---
title: "Permissions Setup"
---

# Portal Permissions
_**NOTE:** Are you looking for [[the list of all Multiverse-Portals permissions|Permissions-List-(Portals)]]?_

## <a name="perm" href="#wiki-perm">•</a>Multiverse Portals Permissions
Multiverse-Portals allows you to control who can use portals via permissions! When you create a portal, it automatically creates a permission: `multiverse.portal.access.PORTALNAME`. If a player _has_ `multiverse.portal.access.PORTALNAME`, then they can use that portal.

For this reason, Portals are case __insensitive__, meaning `MyPortal` is the __same__ as `myportal`.

## <a name="exemptions" href="#wiki-exemptions">•</a>Exemptions
If you have certain groups that you want to exempt from payments, you can give those groups the specific exemption permission:
`multiverse.portal.exempt.PORTALNAME`.

## <a name="fill" href="#wiki-fill">•</a>Fill Portal
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

`/mv conf enforceaccess false`

`/mvp conf enforceportalaccess false`
