# README

Hi teammates, this is our code collaboration repo - `csc591-assignments`. I'll briefly talk about about the collaborating convention and something you might come across when working together. If you have any questions, feel free to ask anybody in our team, because that's what **"Team"** means!

## Usage

Clone the repo first:

`git clone git@github.com:thomasyimgit/csc591-assignments.git`

Install the dependencies:

`npm install`

Run wepack in `watch` mode:

`npm run watch`

or `build`:

`npm run build`

## Convention

For collaborating assignments, each of us own our own branch, which is our name. (This may not necessarily be the best practice, but it's just for UNIFORM in team collaboration.) For example, like me, I'll work on the branch `Chang`.

The rest of the work is pretty easy. Everytime you make some changes to the codebase, push your own branch and make a `pull request`.

**KEEP THESE IN MIND:** 
1. Please don't merge you branch into `master`, until someone has REVIEWED it.
2. `git pull` before pushing your code to avoid conflict. A branch with conflict will NOT be merged.
3. Even though we don't ask for perfect code, but we encourage **proper commit message and pull request description**, which help others understand what you have done.

However, the review process could be flexible. For a tight due project, the base line is **"as long as it doesn't break down the code base and finishes the basic functionalities."**

## UPDATE

1. use `single quote` instead of `double quote`
2. use es6 as much as possible
3. a class file shoule be named in capital letters, like `Game.js`
4. the files in `utils` are what we are gonna continue use in our future projects.
