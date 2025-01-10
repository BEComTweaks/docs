---
prev:
    text: Setting up
    link: getting-started/setting-up
next:
    text: Creating a new Pack
    link: new/new-pack
mentions:
  - NSPC911
---

# Creating a new category
<sub>If you need to create a new pack, refer to [`Create a new pack`](new-pack)</sub>

Creating a new category is pretty simple even though it looks daunting.

There are x main steps involved.

1. Determine whether your category is a subcategory or main category
    
    But what are the differences?
    - Main Category is available when you first launch the site. You can instantly see itwithout opening other categories
    - Sub Category is only available when you open its respective Main Category

## Main Category

Create a new JSON in <kbd>./jsons/packs</kbd> with the following template
```json
{
  "topic": "Name",
  "packs": []
}
```
Rename `Name` for the name of the cateogory

Now, go to <kbd>./jsons/others/pack_order_list.txt</kbd> and choose where you want to put your category in.
For example, here is a sample <kbd>pack_order_list.txt</kbd>
```txt [./jsons/others/pack_order_list.txt]
fun.json
  extra_fun.json
utility.json
aesthetic.json
```
If you want your category to be between Utility and Aesthetic, just slot in the category's file name in that position

That would look like this
```txt [./jsons/others/pack_order_list.txt]
fun.json
  extra_fun.json
utility.json
new_category.json
aesthetic.json
```

Finally, add the category's name inside <kbd>./webUI/app.js</kbd> in two very specific spots.

Search for
```js [webUI/app.js]
function getSelectedTweaks()
```
- Inside the function, you should see a constant variable called `jsonData` of a dictionary type.
- Add your category name as a key inside the dictionary. This can be in any position

Search for
```js [webUI/app.js]
const listofcategories
```
- This is a list of the categories currently inside the website.
- Add your category to the list anywhere you want

## Sub Category
Create a new JSON in <kbd>./jsons/packs</kbd> with the following template
```json
{
  "topic": "Name",
  "subcategory_of": "Parent Name",
  "packs": []
}
```
Rename `Name` for the name of your category<br>Rename `Parent Name` for the name of the main category

Now, go to <kbd>./jsons/others/pack_order_list.txt</kbd> and choose where you want to put your category in.
For example, here is a sample <kbd>pack_order_list.txt</kbd>
```txt [./jsons/others/pack_order_list.txt]
fun.json
  extra_fun.json
utility.json
aesthetic.json
```
If your Parent Category is Utility, you must add the filename as below
```txt [./jsons/others/pack_order_list.txt]
fun.json
  extra_fun.json
utility.json
  extra_utility.json
aesthetic.json
```
where `extra_utility.json` is your category (it can be anything)

The main thing is to have a tab to indicate it is a subcategory!

Finally, add the category's name inside <kbd>./webUI/app.js</kbd> in two very specific spots.

Search for
```js [webUI/app.js]
function getSelectedTweaks()
```
- Inside the function, you should see a constant variable called `jsonData` of a dictionary type.
- Add your category name as a key inside the dictionary. This can be in any position

Search for
```js [webUI/app.js]
const listofcategories
```
- This is a list of the categories currently inside the website.
- Add your category to the list anywhere you want

### Create a pack
Now that your category is set, maybe create a new pack? If so, refer to [`Create a new pack`](new-pack)

<Contributors />