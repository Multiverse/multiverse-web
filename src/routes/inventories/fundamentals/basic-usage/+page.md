---
title: "Basic Usage"
---

## Method 1: (Recommended)

### Step #1 
Type `/mv list` to get a list of your worlds (you can skip this if you know your world names), then type `/mvinv group`.

![1](https://user-images.githubusercontent.com/8557785/63902555-c27e9680-c9cf-11e9-9e0b-80077e42cbc2.png)

### Step #2
It will ask if you would like to create, edit or delete. Since it's your first time, you want to type "`create`", you'll then be prompted to name your group, this is just a name of your choice that you'll remember is the group link between the worlds, in my example, it's "`creativeworlds`".

![2](https://user-images.githubusercontent.com/8557785/63902641-18ebd500-c9d0-11e9-8276-47a574af3584.png)

### Step #3
In this example, I'm linking the worlds `creative` and `creative2` as shown in the first screenshot, so I will type those world names.

![3](https://user-images.githubusercontent.com/8557785/63902742-74b65e00-c9d0-11e9-8952-301bf6f77b95.png)
(As you can see at the end of the statement, the current worlds listed show "`creative`" and "`creative2`", so it added them to the group successfully)

### Step #4
Once you add all the worlds, you type "`@`" to continue to the next step, which will be the shares you want to share between these worlds. All available shares can be found [on this wiki](https://github.com/Multiverse/Multiverse-Core/wiki/Shares-List-(Inventories)). In this example, I'm going to share everything, so I will type "`all`".

![4](https://user-images.githubusercontent.com/8557785/63902954-6157c280-c9d1-11e9-96a5-7659357d4d6e.png)
(As you can see at the end of the statement, everything is shared between the worlds I listed above)

### Step #5
Type "`@`" when you're finished and that is all! The next message shows you created a new group and a summary of what you just linked. Now my worlds "`creative`" and "`creative2`" will have everything shared.

![5](https://user-images.githubusercontent.com/8557785/63903035-a0861380-c9d1-11e9-9a55-9998053d25e5.png)

---


## Method 2 (A little more advanced):
### Step #1
Find the Multiverse-Inventories directory in your server's plugin directory.

### Step #2
Open up the [Configuration file (config.yml)](/inventories/reference/configuration-file) file. (The config has informative comments inside to help you understand what each option does.)

### Step #3
Once you have your configuration set up as desired, simply type `/mvinv reload` in-game or `mvinv reload` in the server console.

Please refer to the [[frequently asked questions|FAQ-(Inventories)]] for an understanding of how groups and shares work!
