---
prev:
  text: 'Python Files'
  link: 'scripts/py-files'
next:
  text: 'Pack JSONs'
  link: 'jsons/pack-jsons'
---

# Other JSON Files

## [incomplete_compatibilities.json](https://github.com/BEComTweaks/resource-packs/blob/main/jsons/others/incomplete_compatibilities.json)
- Has a list of packs that have their compatibilities incomplete. Compatibilities are to ensure that conflicting textures won't occur.
- Example: [Accurate Scaffolding](https://github.com/BEComTweaks/resource-packs/tree/main/packs/fixes%20and%20consistency/AccurateScaffolding) and [Unobtrusive Scaffolding](https://github.com/BEComTweaks/resource-packs/tree/main/packs/unobtrusive/UnobtrusiveScaffolding)

## [incomplete_pack_icons.json](https://github.com/BEComTweaks/resource-packs/blob/main/jsons/others/incomplete_pack_icons.json)
- Has a list of packs that don't have their pack icons complete. This list does not include incomplete packs, because they don't appear on the site.

## [incomplete_packs.json](https://github.com/BEComTweaks/resource-packs/blob/main/jsons/others/incomplete_packs.json)
- Has a list of packs that are not completed. PRs are accepted to complete the packs

## [manifest.json](https://github.com/BEComTweaks/resource-packs/blob/main/jsons/others/manifest.json)
- The manifest.json used when making the pack. For more info on how a manifest works, check out [Bedrock Wiki](https://wiki.bedrock.dev)

## [name_to_json.json](https://github.com/BEComTweaks/resource-packs/blob/main/jsons/others/name_to_json.json)
- Acts as a mapper from the category name to the respective json. For instance, `"Elytra"` refers to `woc_elytra.json`

## [pack_order_list.txt](https://github.com/BEComTweaks/resource-packs/blob/main/jsons/others/pack_order_list.txt)
- Provides an order as to how the categories are ordered.
- Indentation within lines refers to it being a subcategory.

- For instance, part of it looks like this
```
aesthetic.json
  aesthetic_more_zombies.json
```
- This means that the category `More Zombies` will be under `Aesthetic` and only show up when the `Aesthetic` category is opened up

## [selected_packs.json](https://github.com/BEComTweaks/resource-packs/blob/main/jsons/others/selected_packs.json)
- Exists for the server to dump and parse.

## [template.json](https://github.com/BEComTweaks/resource-packs/blob/main/jsons/others/template.json)
- Template on creating a new category and the features available.