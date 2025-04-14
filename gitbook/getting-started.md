---
icon: sliders-up
---

# Getting Started

Oh, so you want to start? Make sure you have the following on your machine

Terminal

* Most important! You can use the bare minimum, but it can break the colourful texts that Python's rich module uses

[Python 3](https://www.python.org/downloads/):

* Used for pre-commit 'hook'

[NodeJS](https://nodejs.org/en/download):

* Required if you are working on [BEComTweaks/server-backend](https://github.com/becomtweaks/server-backend)

[pnpm](https://pnpm.io/installation) with npm:

* Required for prettier in pre-commit 'hook' and installing NodeJS modules

Code Editor:

* Preferably VSCode, as JSON schemas are auto-filled in, but you can choose to use Notepad++ or Neovim/Vim

[Git](https://git-scm.com/downloads):

* Required to push and pull changes

Once you know you have the above tools, you can continue now!

### Forking the Repo

Head over to the repo you want

<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption><p>E.g.: Using BEComTweaks/resource-packs</p></figcaption></figure>

Press the `Fork` button

![](<.gitbook/assets/image (1).png>)

Name the repository anything you want, along with the description for it

Afterwards, copy the link for the forked repository. It should look like

`https://github.com/username/repo`

Head back to your Terminal

Now run `git clone <paste from clipboard>`

You should now see a new directory with the name you set.

### Setting up the modules

`cd` into the directory

Create a new python environment using either python's `venv` module by running

{% code overflow="wrap" lineNumbers="true" fullWidth="true" %}
```sh
python -m venv venv
venv/Scripts/activate
python -m pip install -r requirements.txt
```
{% endcode %}

or using [uv](https://docs.astral.sh/uv/getting-started/installation/#highlights)

{% code overflow="wrap" lineNumbers="true" %}
```sh
uv venv venv
venv/Scripts/active
uv pip sync requirements.txt
```
{% endcode %}

If you are working on server-backend or want the formatter, make sure to run

{% code overflow="wrap" fullWidth="true" %}
```sh
pnpm install
```
{% endcode %}

That's it! You have setup the repository for editing!
