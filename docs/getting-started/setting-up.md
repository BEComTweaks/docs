---
prev:
    text: Home
    link: index
next:
    text: Creating a new Pack
    link: getting-started/new-pack
---
# Setting up the local respository

You will need
- [Git](https://git-scm.com/)
    - You can also get a GUI Client like [Git GUI](https://git-scm.com/docs/git-gui) and [GitHub Desktop](https://desktop.github.com/) or complicated ones like [Sourcegit](https://github.com/sourcegit-scm/sourcegit/releases/latest) or [Lazygit](https://github.com/jesseduffield/lazygit)
- [Python 3+](https://www.python.org/downloads/)
- [NodeJS](https://nodejs.org/en)

## Setting up pack repositories

1. Clone the repository

    ```sh
    git clone https://github.com/BEComTweaks/resource-packs
    ```
    > You don't have to clone resource-packs, you could clone behaviour-packs or crafting-tweaks
    
    - cd into the respository's folder
    ```sh
    cd resource-packs
    ```

2. Create missing folders

    ```sh
    python pys\folder_creator.py
    ```
    - Type in `0` to not print anything.

## Setting up the server

1. Clone the repository

    ```sh
    git clone https://github.com/BEComTweaks/server-backend --recursive
    ```
    > Recursive cloning is neccessary as there are submodules in the repository

    - cd into the repository's folder

    ```sh
    cd server-backend
    ```

2. Get neccessary node modules

    ```sh
    npm install
    ```

---
That's it!
