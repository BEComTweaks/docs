---
icon: webhook
---

# API

Currently, the server is run by [YzaBeast1](https://github.com/YzaBeast1) on his personal machine, under the domain `yzabeast1.run.place`

Here are the requests available

<mark style="color:green;">`POST`</mark> `/exportResourcePack`

The API used to export resource packs from https://becomtweaks.github.io/resource-packs

**Headers**

<table data-full-width="true"><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Content-Type</td><td><code>application/json</code></td></tr><tr><td>packName</td><td>"&#x3C;string>"</td></tr><tr><td>mcVersion</td><td>"&#x3C;int>.&#x3C;int>.&#x3C;int>"</td></tr></tbody></table>

**Body**

* Requires a JSON as a string.

```json
{
  "Aesthetic": [],
  "More Zombies": [],
  "Terrain": [],
  "Lower and Sides": [],
  "Variation": [],
  "Peace and Quiet": [],
  "Mobs": [],
  "Utility": [],
  "Directional": [],
  "Growth Stages": [],
  "Unobtrusive": [],
  "3D": [],
  "GUI": [],
  "Crosshairs": [],
  "Hearts": [],
  "LGBTQ+ Pride": [],
  "Hunger Bars": [],
  "Hotbar Selector": [],
  "Menu Panoramas": [],
  "Xisuma's Hermitcraft Bases": [],
  "Retro": [],
  "Fun": [],
  "World of Color": [],
  "Colorful Slime": [],
  "Elytra": [],
  "Enchantment Glints": [],
  "Parity": [],
  "Fixes and Consistency": [],
  "raw": []
}
```

This is the full list of available categories in Resource Packs. Pack IDs must be added to their respective Category's arrays, and must also be added to "raw". This is used for Compatibility Checking in the server.

**Response**

{% tabs %}
{% tab title="200" %}
```json
<valid zip file>
```
{% endtab %}

{% tab title="400" %}
```json
<server shits itself>
```
{% endtab %}

{% tab title="500" %}
\<server crashed>
{% endtab %}
{% endtabs %}

<mark style="color:green;">`POST`</mark> `/exportBehaviourPack`

The API used to export behaviour packs from https://becomtweaks.github.io/behaviour-packs

**Headers**

<table data-full-width="true"><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Content-Type</td><td><code>application/json</code></td></tr><tr><td>packName</td><td>"&#x3C;string>"</td></tr><tr><td>mcVersion</td><td>"&#x3C;int>.&#x3C;int>.&#x3C;int>"</td></tr></tbody></table>

**Body**

* Requires a JSON as a string.

```json
{
  "Anti Grief": [],
  "Drops": [],
  "Fun": [],
  "Utility": [],
  "raw": []
}
```

This is the full list of available categories in Behaviour Packs. Pack IDs must be added to their respective Category's arrays, and must also be added to "raw". While Behaviour Packs do not have active compatibilities, this is still used for... I have no clue .\_.



**Response**

{% tabs %}
{% tab title="200" %}
```json
<valid zip file>
```
{% endtab %}

{% tab title="400" %}
```json
<server shits itself>
```
{% endtab %}

{% tab title="500" %}
\<server crashed>
{% endtab %}
{% endtabs %}

<mark style="color:green;">`POST`</mark> `/exportCraftingTweak`

The API used to export crafting tweaks from https://becomtweaks.github.io/crafting-tweaks

**Headers**

<table data-full-width="true"><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Content-Type</td><td><code>application/json</code></td></tr><tr><td>packName</td><td>"&#x3C;string>"</td></tr><tr><td>mcVersion</td><td>"&#x3C;int>.&#x3C;int>.&#x3C;int>"</td></tr></tbody></table>

**Body**

* Requires a JSON as a string.

```json
{
  "Craftables": [],
  "More Blocks": [],
  "Quality of Life": [],
  "Unpackables": [],
  "raw": []
}
```

This is the full list of available categories in Behaviour Packs. Pack IDs must be added to their respective Category's arrays, and must also be added to "raw". While Crafting Tweaks also do not have active compatibilities, this is used for... I have no clue as well .\_.



**Response**

{% tabs %}
{% tab title="200" %}
```json
<valid zip file>
```
{% endtab %}

{% tab title="400" %}
```json
<server shits itself>
```
{% endtab %}

{% tab title="500" %}
\<server crashed>
{% endtab %}
{% endtabs %}

