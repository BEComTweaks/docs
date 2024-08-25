---
prev:
  text: 'Other JSONs'
  link: 'jsons/other-jsons.md'
next: false
---
# Pack JSON Files

Here is a template on the pack json

```json
{
  "topic": "Category",
  "subcategory_of": "Parent Category",
  "packs": [
    {
      "pack_id": "pack_name with no space",
      "pack_name": "name of pack",
      "pack_description": "description of pack",
      "details": {
        "message": ["warn (red)/error (orange)/info (cyan)", "message for it"],
        "icon": "gif/apng/*"
      },
      "conflict": ["packid of conflicting pack"],
      "compatibility": ["packid of compatible pack"]
    }
  ]
}
```

From the example above, there is a lot going on in the json file. Even though, the objects should be self-explanatory, I will still attempt to explain them line by line.

---
Topic: Basically names your category.
```json
{
  "topic": "Category", // [!code focus]
  "subcategory_of": "Parent Category <can be left out if already parent>",
```
---
Subcategory of: The parent category. Exists for subcategories to mark that they are subcategories of a certain category.
```json
  "topic": "Category",
  "subcategory_of": "Parent Category", // [!code focus]
  "packs": [
```
> [!TIP]
>
> If the category is not defined as a subcategory, this will be skipped.
---
Pack ID: Your Pack's ID.
```json
    {
      "pack_id": "pack_name with no space", // [!code focus]
      "pack_name": "name of pack",
```
> [!NOTE]
> 
> Currently, the ID is to just remove spaces in a Pack Name. Will get around to changing it _one day_.
---
Pack Name: Your Pack's Name.
```json
      "pack_id": "pack_name with no space",
      "pack_name": "name of pack", // [!code focus]
      "pack_description": "description of pack",
```
---
Pack Description: Your Pack's Description.
```json
      "pack_name": "name of pack",
      "pack_description": "description of pack", // [!code focus]
      "details": {
```
---
Details: Additional Information
```json
      "pack_description": "description of pack",
      "details: { // [!code focus]
        "message": ["warn (red)/error (orange)/info (cyan)", "message for it"],
```
> [!TIP]
>
> Leave this out if you do not have a `message` or custom `icon` for a cleaner file.
---
Message: Provide extra info on a pack.
```json
      "details": {
        "message": ["warn (red)/error (orange)/info (cyan)", "message for it"], // [!code focus]
        "icon": "gif/apng/*"
```
> [!IMPORTANT]
>
> Only use ONE message type. Use either `warn`, `error` or `info`.
> You also need to provide a message for it.
---
Icon: Allows you to set a pack icon extension. Default is `png`, so you can set it to `apng`, `gif` or `jpeg` if you want.
```json
        "message": ["warn (red)/error (orange)/info (cyan)", "message for it"],
        "icon": "gif/apng/*" // [!code focus]
      },
```
> [!TIP]
>
> You can use any image file extensions! You aren't limited to just `gif` or `apng`.
> However, make sure you do not add the colon <kbd>.</kbd>
---
Conflict: List of PackIDs of packs that conflict with the current one.
```json
      },
      "conflict": ["packid of conflicting pack"], // [!code focus]
      "compatibility": ["packid of compatible pack"]
```
---
Compatibility: List of PackIDs of packs that have custom compatibilities made for them
```json
      "conflict": ["packid of conflicting pack"],
      "compatibility": ["packid of compatible pack"] // [!code focus]
    }
```
> [!TIP]
>
> After creating a compatibility, make sure to run [./pys/folder_creator.py](https://github.com/BEComTweaks/resource-packs/blob/main/pys/folder_creator.py) to create a respective folder for it.