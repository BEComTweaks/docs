---
prev: false
next: false
---

# To-Do Tracker
Stuff to do or in progress.<br>Feel free to help me with these!
## Incomplete
- General
	- Make a proper footer aside from the credits footer
 - Make an easily accessible console log like in [BEComTweaks/btrp-updater](https://github.com/BEComTweaks/btrp-updater)
 - Move away from a server to full frontend
    - Resource Packs
    - Behaviour Packs [`no-backend`](https://github.com/BEComTweaks/behaviour-packs/tree/no-backend)
    - Crafting Tweaks
- docs
	- Finish it up! <!--too lazy-->

## Completed
- General
	- Setup [becomtweaks.github.io](https://becomtweaks.github.io) as the landing page
	- Copy over stuff from [BEComTweaks/resource-packs](https://github.com/BEComTweaks/resource-packs) for
		- Behaviour Packs/Addons
		- Crafting Tweaks
 	- Show pack list on side similar to vanilla tweaks
	- Make a menu bar
	- Make subcategories a thing
	- Make opening categories animated instead of it showing instantly [#23](https://github.com/BEComTweaks/resource-packs/pull/23)
    - Show whether pack is being fetched (need to merge)
        - Resource Packs [#25](https://github.com/BEComTweaks/resource-packs/pull/25)
        - Behaviour Packs [#2](https://github.com/BEComTweaks/behaviour-packs/pull/2)
        - Crafting Tweaks [#1](https://github.com/BEComTweaks/crafting-tweaks/pull/1)
	- Add docs to the large nav bar
		- Resource Packs [`@ 0b18283`](https://github.com/BEComTweaks/resource-packs/commit/0b18283e70f7a154334b1074be877c7925320149)
		- Behaviour Packs [`@ 3e90363`](https://github.com/BEComTweaks/behaviour-packs/commit/3e90363ac8af48b7324546dedab1555ffd47f775)
		- Crafting Tweaks [`@ 050b2f0`](https://github.com/BEComTweaks/crafting-tweaks/commit/050b2f02a61732aa1d627351457953c150327957)
	- Merge the webUI overhaul PRs 
		- Resource Packs [#32](https://github.com/BEComTweaks/resource-packs/pull/32)
		- Behaviour Packs [#4](https://github.com/BEComTweaks/behaviour-packs/pull/4)
		- Crafting Tweaks [#3](https://github.com/BEComTweaks/crafting-tweaks/pull/3)
- resource-packs
	- Make Credits Footer use white text
	- Fix pre_commit.py for the index.html changes and make it use a formatted version
  	- Fix resource pack page not showing a pack list
	- Add new 1.21 tweaks from vanilla tweaks [#23](https://github.com/BEComTweaks/resource-packs/pull/23)
		- Glass Doors for Copper Doors
		- Texture for Waxed Copper Door Items
		- Move Colorful Slimes to subcategory of World of Color
		- Colorful Elytra subcategory of World of Color
		- Move Crosshairs and Menu Panoramas to subcategory of GUI
		- Hearts and Hunger bars as subcategory of GUI
		- Quieter Breezes, Armadillos and Skeletons
		- Soyjak Vault
		- Pottery Sherd to Shard for new Sherds
	- Update `terrain_texture.json` for flattening of keys
	- Remove Endless End Rods (they are bugged)
	- Finish Clear Blocks Category [#26](https://github.com/BEComTweaks/resource-packs/pull/26)
	- Do the monthly pull from [BedrockTweaks/Files](https://github.com/BedrockTweaks/Files) [#30](https://github.com/BEComTweaks/resource-packs/pull/30)
	- Pull [BedrockTweaks/Files #317](https://github.com/BedrockTweaks/Files/pull/317)
	- Fix packs for 1.21.40
- behaviour-packs
	- Make Credits Footer use white text
	- Update backend with stuff from resource-packs [#1](https://github.com/BEComTweaks/behaviour-packs/pull/1)
- crafting-tweaks
	- Make Credits Footer use white text
	- Fix crafting tweaks not showing pack icons
	- Update backend with stuff from resource-packs [#1](https://github.com/BEComTweaks/crafting-tweaks/pull/1)
- server-backend
	- Make priority a thing
		- Probably like if `"priority": true` then replace any already-existing files [`@e03e28`](https://github.com/BEComTweaks/server-backend/commit/e03e282ad75fa4cd8f3de1b3dc6d972d506faabf)

<sub>Yes, I am using docs as a to-do tracker. Any issues?</sub>
