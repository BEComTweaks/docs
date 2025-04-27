---
icon: nfc
---

# New Compatibility

BEComTweaks had just received its overhauled compatibility handler, so here is a full doc on it

{% code overflow="wrap" lineNumbers="true" fullWidth="true" %}
```json
{
  "max_simultaneous": 3,
  "3way": [
    {
      "merge": [
        "packid1",
        "packid2",
        "packid3"
      ],
      "location": "<location to compatibility>",
      "overwrite": true
    }
  ],
  "2way": [
    {
      "merge": [
        "packid4",
        "packid5"
      ],
      "location": "<location to compatibility>"
    }
  ]
}
```
{% endcode %}

This is a complicated mess, so I'll try my best to explain this

Firstly, `max_simultaneous`.

*   What is it?

    It specifies the maximum number of seperate packs merging into one for a compatibility

    In Git, merges can be 3way, that is when there are 3 different input streams to merges into 1. This aims to add it similarly to that

Now the next few keys are very important in defining the compatibility

Say we use the example `compatibility.json` from above

`max_simultaneous` is set to 3, so there will only be 3way and 2way compatibilities.

If `max_simultaneous` is set to 10, there can be 2way to 10way compatibilities set

Now with your choice of n-way, you now need to create two extra objects

Say you want to add a 4 way compatibility while using the example `compatibility.json`

1.  Set `max_simultaneous` to 4

    This allows the pack generator to know the maximum way compatibility possible
2.  Create a new key called `4way`

    Here is how the key would look like

{% code overflow="wrap" lineNumbers="true" fullWidth="true" %}
```json
 "4way": [
    {
      "merge": [
        "packid1",
        "packid2",
        "packid3",
        "packid4"
      ],
      "location": "<location to compatibility>",
      "overwrite": true
    }
  ],
```
{% endcode %}

What do each of the keys do?

#### Merge

* A list of pack ids that the compatibility is for
* Must be a list that contains a non-empty string and is required

#### Location

* A pointer to the location of the compatibility. This starts at the `/packs` directory and can point to not `/compatibilities` directory.
* Must be a non-empty string and is required

#### Overwrite

* When overwrite is set to true, it moves over the main packs, then overwrites files with the files from compatibilities. This reduces the file size required for each compatibility and lets 4way compatibilities be out of mind until absolutely necessary
* When overwrite is set to false? Refer to BedrockTweaks.

If you are making an n-way compatibility where `n` is lesser than `max_simultaneous`, then you can just add onto the existing `n-way` key

That should be about it!
