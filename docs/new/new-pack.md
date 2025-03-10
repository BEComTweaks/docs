---
prev: false
next: false
mentions:
  - NSPC911
---

# Creating a new pack
<sub>If you need to create a new category, refer to [`Create a new category`](new-category)</sub>

## JSON
A general pack has the following dictionary

```json
{
  "pack_id": "pack_name with no space",
  "pack_name": "name of pack",
  "pack_description": "description of pack",
  "message": ["warn/error/info", "message for it"],
  "icon": "gif/apng/*",
  "priority": 0,
  "conflict": ["<pack_id of conflicting packs>"],
  "regolith": true
}
```
There are somethat are necessary and some that aren't. Here is a full a run through of it.

---
<h6>Pack ID</h6>
Your Pack's ID, something that stands out from other packs<br>
Usually the Pack ID is the pack name without any spaces, except for categories with similar pack names

**This is a compulsory key**
```json
  "pack_id": "pack_name with no space"
```
---
<h6>Pack Name</h6>
Your Pack's name.<br>
Doesn't have to be unique.

**This is a compulsory key**
```json
  "pack_name": "name of pack"
```
---

<h6>Pack Description</h6>
Your Pack's Description.<br>
You can choose to leave it empty, but it <strong>MUST</strong> exist

```json
  "pack_description": "description of pack",
```
---
<h6>Message</h6>
A message you want to highlight<br>
These can be issues, extra info, or anything you prefer

Here are some examples

```json
  "message": ["error", "Has issues now"]
```
<pre class="unnecessary-codeblock"><code style="color: red">Has issues now</code></pre>
```json
  "message": ["warn", "May cause issues when using with custom packs"]
```
<pre class="unnecessary-codeblock"><code style="color: orange">May cause issues when using with custom packs</code></pre>
```json
  "message": ["info", "Also changes planks"]
```
<pre class="unnecessary-codeblock"><code style="color: cyan">Also changes planks</code></pre>
---
<h6>Icon</h6>
A custom type of icon that you want to use<br>
This can be a <kbd>.gif</kbd>, <kbd>.apng</kbd> or any image you like

**Remember to remove the leading period**
```json
  "icon": "gif"
```
---
<h6>Priority</h6>
The level of priority you want to give the pack to replace other packs<br>
The higher the priority, the more likely it replaces other packs<br>
The default priority is <strong>always</strong> `0`

Priority only applies <strong>IF</strong> the file is a <strong>binary</strong> file, not if it is a text, JSON or JS file
```json
  "priority": 0
```
---
<h6>Conflict</h6>
A list of packs that conflict with one another.<br>
This doesn't affect anything in the backend, but serves as information while selecting a pack.

The list contains <strong>Pack IDs</strong>, not Pack Names
```json
  "conflict": ["PackID"]
```
---
<h6>Regolith</h6>
<strong>This is ONLY for behaviour packs</strong><br>
Use regolith to build the tweak

```json
  "regolith": true
```
---
Add your necessary JSON to the category JSONs (located in <kbd>./jsons/packs</kbd>) before moving on to the next

## Making their folders

<sub><strong>If you are using regolith, do not start on this, the implementation has not been finished.</strong></sub>

Assuming you have added the proper JSONs, you can now create their folders

You have to create a folder at
```shell
./packs/<category-name>/<pack-id>
```
There, add the preferred pack_icon template from <kbd>./pack_icons</kbd> as <kbd>pack_icon.png</kbd><br>
<sub>You can also use your own pack icons!</sub>

Create a new folder called <kbd>files</kbd> inside the pack's folder. That is where you will store your pack's files

You can start adding the files!

---
### Extra for behaviour-packs

If you are using a build script, you will need to create another directory to house the 'raw' files, add the script and its corresponding key in the pack's JSON (refer above)

An example script is available in <kbd>./pys/example_builder.py</kbd>
<Contributors/>
---
<div style="display: flex; justify-content: space-between; gap: 10px" >
  <div style="display: flex; flex-direction: column; gap: 10px; flex: 1;">
    <PageButton direction="prev" link="../new/new-compatibility" desc="Previous page" title="Creating a new Compatibility" />
    <PageButton direction="prev" link="../new/new-category" desc="Previous page" title="Creating a new Category" />
  </div>
  <div style="display: flex; flex-direction: column; gap: 10px; flex: 1; align-items: flex-end;">
    <PageButton direction="next" link="../getting-started/afterwards" desc="Next page" title="Now what?" />
  </div>
</div>
