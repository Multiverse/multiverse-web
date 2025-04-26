---
title: "Configuration File"
---

Here is the default config that ships with MV. Note the version number at the bottom. We will (try to) update this page with newer configs when they ship.

### Make sure you're up to date

If you type `/mv version` a version string will be dumped to the console, in it you will see a line:

```
...
XX:XX:XX [INFO] [Multiverse-Core] [Multiverse-Core] Dumping Config Values: (version 2.7)
...
```

This is the current version of your config. If it does not **match the version in the example below**, please [grab an updated version of Multiverse-Core](/download/plugins) and [all of the Multiverse Plugins you use](/download/plugins).

Multiverse will **always** migrate your configs for you if we change the format (like when we did `5.0`->`5.1`). With that said, it never hurts to keep backups in case of server failure or a ferret munching a few bytes off the end of a file.

## Multiverse Core Sample Config

@code(./config.yaml)
