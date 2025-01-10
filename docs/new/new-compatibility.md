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
# Creating a new Compatibility

BEComTweaks had just received its overhaulled compatibility handler, so here is a full docs on it
```json [./jsons/packs/compatibility.json]
{
	"maxway": 3,
	"3way": {
		"compatibilities": [
		  ["packid1", "packid2", "packid3"]
		],
		"locations": [
		  "compatibility/packid123"
		]
	},
	"2way": {
		"compatibilities": [
		  ["packid1", "packid3"]
		],
		"locations": [
		  "compatibility/packid13"
		]
	}
}
```
This is a complicated mess, so I'll try my best to explain this

Firstly, `maxway`.
- What is it?

  It specifies the maximum number of seperate packs merging into one for a compatibility
  
  In Git, merges can be 3way, that is when there are 3 different input streams to merges into 1. This aims to add it similarly to that

Now the next few keys are very important in defining the compatibility

Say we use the example `compatibility.json` from above

`maxway` is set to 3, so there will only be 3way and 2way compatibilities.

If `maxway` is set to 10, there can be 2way to 10way compatibilities set

Now with your choice of n-way, you now need to create two extra objects

Say you want to add a 4 way compatibility while using the example `compatibility.json`

1. Set `maxway` to 4
   
   This allows the pack generator to know the maximum way compatibility possible

2. Create a new key called `4way`

   Here is how the key would look like
  ```json [jsons/packs/compatibility.json]
"2way": {
	"compatibilities": [
		["packid1", "packid2", "packid3", "packid4"]
	],
	"locations": [
	  "compatibility/packid1234"
	]
}
	```