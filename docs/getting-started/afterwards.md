---
prev:
    text: New pack
    link: new/new-pack
mentions:
  - NSPC911
---
# Now what?

Now that you have created a new category/pack, what do you do now?

## Run pre_commit.py
- What is that?
    
    It is a multi-purpose script designed to help the process of creating!<br>Run it with `python pys/pre_commit.py` from the root directory

    Main things that it does:
    - Creates a backup for you to restore on if you lose anything (saved to git stash)
    - Adds your pack/category to the maps required to download a pack
    - Updates the website for testing
    - Updates the stats in README.md
    - Formats files (if run with flag `--format`)
    - Builds packs (if run with flag `--build pack` on behaviour-packs)

## Open a Pull Request
- What is that?

    It allows you to suggest changes in the repository! If you go to your repo's main directory, GitHub will suggest you to open a Pull Request.

    Open it and maybe you might get your first contribution!

<Contributors />