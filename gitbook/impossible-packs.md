---
icon: circle-xmark
---

# Impossible Packs

## Impossible Packs <a href="#impossible-packs" id="impossible-packs"></a>

A non-exhaustive page on packs that will **NOT** be added to both BedrockTweaks due to Bedrock issues and DrAV's preferences.\
Keep in mind that some might be added to BEComTweaks as toned-down versions.

### Resource Packs <a href="#resource-packs" id="resource-packs"></a>

**1. Bushy Leaves**

There is no way to edit a block's geometry to make it bushy in Vanilla Bedrock. While pre-defined blockshapes can be used, with the closest one being Cactus, it does not match the original aesthetic of Bushy Leaves, hence why it is left out.

**2. Visual Cauldron Stages**

Cauldron does not support transparent textures, so just removing the center line doesn't help. Cauldrons do not have any visual changes when adding/removing water/powdered snow.\
However, Lava Cauldrons do have a seperate Block State, but that misses the entire point of Visual Cauldron Stages.

**3. Visual Honey Stages**

The Bee Hive and Nest only visually change while full, so any other progress in-between cannot be shown in the pack. This prevents DrAV from adding the pack to BedrockTweaks

Available on BEComTweaks. [Link ↗](https://becomtweaks.github.io/resource-packs/?st_raw=N4IgTghg7iBcDaIBiBXANmgEgewHYFMBPAZQBcIBzfEAXQF8g)

**4. Visual Noteblock Pitch**

Noteblocks have no change in Block States when switching pitches or instruments, so having it change textures is out of the question. However, [lonelyang](https://github.com/lonelyang) discovered that you can edit the Particle emitted by the Note Block to show the current Pitch of it. Again, DrAV doesn't like the implementation of it and will not add it to Bedrock Tweaks

Available on BEComTweaks. [Link ↗](https://becomtweaks.github.io/resource-packs/?st_raw=N4IgTghg7iBcDaIByB7ALgUwEIBsUGMBrABQEs18ALYiMNU-HDEAXQF8g)

**5. Directional Droppers and Dispensers**

This is because of Minecraft Bedrock's issue. Mojang decided to combine both the sideways facing dropper textures and the vertical facing dropper textures into a single block without any blockstates.

<details>

<summary>Technical Findings</summary>

`blocks.json`

{% code overflow="wrap" lineNumbers="true" fullWidth="true" %}
```json
"dropper" : {
  "sound" : "stone",
  "textures" : {
    "down" : "dropper_top",
    "east" : "dropper_front_vertical",
    "north" : "dropper_side",
    "south" : "dropper_front_horizontal",
    "up" : "dropper_top",
    "west" : "dropper_side"
  }
}
```
{% endcode %}

Have you noticed the East and South textures?

<pre class="language-json" data-full-width="true"><code class="lang-json">    "down" : "dropper_top",
<strong>    "east" : "dropper_front_vertical", 
</strong>    "north" : "dropper_side",
<strong>    "south" : "dropper_front_horizontal", 
</strong>    "up" : "dropper_top",
</code></pre>

Yeah, Mojang decided to set the Upwards and Downwards facing Dropper textures with East and South. They couldn't bother setting a special blockshape for them, like the hopper. What a party pooper.

</details>

Available on BEComTweaks. [Link ↗](https://becomtweaks.github.io/resource-packs/?st_raw=N4IgTghg7iBcDaIAiBLMBTAxgFxQewDsIAbVAZwAd0Cz0wyQAaZNLXQkpMPCq%2BkALoBfIA)

**6. Most of the 3D Category**

Currently supported 3D Packs are 3D Mace and 3D Sun and Moon. [BEComTweaks](https://becomtweaks.github.io/resource-packs) also has 3D Fungi, but anything else is not possible mainly because Custom Geometry cannot be set for Vanilla Blocks. 3D Fungi itself was made using Azalea's Block Shape.

**7. Connected Textures**

Only borderless versions, like Borderless Glass is available, as a block is unable to check whether there is another block of the same type touching it. Shaders could be made, but they aren't officially supported on the main version.

**8. Wavy Leaves and Plants**

Either with a flipbook texture or shaders.

* Shaders\
  Not possible as it is not officially supported.
* Flipbook Texture\
  Very demanding, especially on mobile as it utilises extremely high resolution textures

**9. Fullbright/Hardcode Darkness/Warm Glow/Mob Spawn Indicator**

No shader support.

**10. Endless End Rods**

Requires a bit more testing. Theoretically, adding a `"blockshape": "block"` should fix it, but the block turns black.

**11. Randomly Rotated Sunflowers / Taller Sunflowers**

Custom Geometry can't be set for Vanilla Blocks.

**12. Redstone Power Levels**

No shader support. There is a buggy version by dhan on mcpedl which doesn't show directions. [Link ↗](https://mcpedl.com/redstone-signal-indicator-for-mcpe/)

**13. Groovy Levers**

Custom Geometry can't be set for Vanilla Blocks.

**14. Visual Sapling Growth**

No block states to depend on to change textures.

**15. No Beacon Beam**

Beacon Beam doesn't support opacity, so if I put a transparent texture, the beam would just turn black.

**16. Old Alex & Steve / Dungeons Alex & Steve**

Minecraft no longer loads Alex and Steve textures from resource packs.

**17. Big Dripleaf Stem Fix / Small Dripleaf Stem Fix**

Can't make sure the stem properly use the texture, so it could result in the wrong side having no stems

**18. Slime Particle Fix / Proper Break Particles / Don't Eat the Bowl**

Vanilla bug that cannot be fixed. The particles' colors cannot be changed and are hardcoded by default.

**19. Iron Bars Fix**

General Issue. Z-Fighting cannot usually be fixed unless the shader is properly set or the cube is above the other cube by the smallest dimensions. However, shaders can't be changed and custom geometry cannot be set.

**20. Pixel Consistent Trip Wire**

Custom Geometry can't be set for Vanilla Blocks.

**21. Diminshing Tools**

The current durability can be obtained, but the item texture cannot be changed based on the durability. Even if it was able to, there would be a ton of textures, lagging the game a lot.

**22. Spinning Skull on Fire Painting**

Minecraft Bedrock has all the painting in a single PNG file of resolution 256x256. There are, at minimum, 12 frames. The resolution would become 256x3072. Yeah.

### Crafting Tweaks <a href="#crafting-tweaks" id="crafting-tweaks"></a>

None at the moment.

### Behaviour Packs <a href="#behaviour-packs" id="behaviour-packs"></a>

**1. Player Heads**

**Player Drop Heads** is entirely possible as the game stands right now, but not how you would expect it to function. World Owners would have to do a bit or a lot of manual file editting to make the packs work, and you would be responsible for keeping it up to date as best as you can - we provide the script you provide the textures sort of arrangement.

<details>

<summary>Technical Jargon and Reasoning</summary>

The main reason a pack like this would work in game is its quite easy to make a custom block with the skull geometry and provide a flattened player skin (or part of it) so that the block will have all the correct textures on each side to represent the head, the issue stems from we have no way of doing just that without manually doing it. Whilst yes there is a HTTP library as part of the @minecraft Scripting API (not to be confused with Legacy Scripting), we cannot save the result of the call to the file system the server is running on, even with Bedrock Dedicated Server Software (the only place that currently is even allowed to use the HTTP library). So we cannot generate the "player head" blocks in runtime, which is ideally how and when it should be done so our pack remains small in size and compatible with everyone's systems.

</details>

There is hope and a possible solution, but its ugly. If someone was willing to put the effort into making a "Player Head Generator" we could ask players to upload their skins, then the system would generate a pack including all the skins they wanted (like Hermit Heads + our ugly mugs on the dev team) and their own, they could then use the generated pack. However this would require significant resources that DrAv cannot spare.

> \~ SquatchHunter, Moderator of drav.dev and member of Bedrock Tweaks

**2. Off-Hand**

It became impossible after 1.20 when Mojang updated the Beta API system to prevent any changes to the player on the gametick that an event happens. FoxyNoTail's [Offhand Addon](https://foxynotail.com/add-ons/off-hand/) heavily relied on this, as it needed the event to change objects from mainhand to offhand on the same gametick that you are placing the block.
