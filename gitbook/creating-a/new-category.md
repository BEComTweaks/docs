---
icon: line-height
---

# New Category

You want to create a new category? mm, 'kay

Open the folder with VSCode. Inside the folder sidebar, open `jsons/packs`. Create a new file called `<category>.json`. Inside it, add the necessary keys

### JSON Format

{% code overflow="wrap" lineNumbers="true" fullWidth="true" %}
```json
{
  "$schema": "https://becomtweaks.github.io/schema/packs.json",
  "topic": "<category name>",
  "subcategory_of": "<category name>",
  "location": "<category location>",
  "packs": []
}
```
{% endcode %}

The required keys are `topic` and `packs` while `$schema` helps for autocomplete (important!)

#### Topic

* The name of the category. Used to identify the category as well in the backend and frontend.
* Must be a non-empty string.

#### Subcategory of

* The name of the parent category. No use in backend, shows up only in the frontend.
* Must be a non-empty string, but can be left out. Defaults to the `topic` key in all lowercase

#### Location

* The location where the category is located at. Used by backend to find where the packs are located at.
* Must be a non-empty string, but can be left out.

#### Packs

* The list of dictionaries, referencing to each pack

After making the category, head over to `/packs` then create a new folder either called `<topic in lowercase>` or  `<key location>.` Continue with creating the new packs using [new-pack.md](creating-a/new-pack.md "mention")

#### Final Setup

After the pack setup, open the `pack_order_list.txt` inside `jsons` (don't ask why it is there). Insert the category's json file name somewhere in that file (and add an indentation if it is a subcategory).

Open the `app.js` inside `webUI` and add the following at the end of the `categoryDicts` constant.

`"<key topic">: [],`&#x20;

Now run

{% code overflow="wrap" fullWidth="true" %}
```sh
python pys/pre_commit.py --format --no-stash
```
{% endcode %}

And it should be reflected inside `webUI/index.html`. Open it up with any browser and you should see the new category!

Now follow [#checks](creating-a/new-pack.md#checks "mention") for creating a new Pull Request
