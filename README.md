# Nest.js Learning Repository

This repository is used for learning Nest.js.

## Branching strategy

- `main` is the stable baseline.
- `1-nest-js-intro` is a separate branch for your first Nest.js lesson.

## Purpose

- Keep each lesson or topic separate in its own branch.
- Work independently on learning content without affecting `main`.
- Merge completed learning branches back into `main` when ready.

## How to use

1. Create a branch for a lesson:
   ```bash
git checkout -b 1-nest-js-intro
```
2. Work inside the `1-nest-js-intro/` folder.
3. Commit your changes:
   ```bash
git add .
git commit -m "Add Nest.js intro lesson"
```
4. Switch back to `main`:
   ```bash
git checkout main
```
5. Merge the branch:
   ```bash
git merge 1-nest-js-intro
```

## Notes

- A branch is not the same as a folder. It is a separate version of the whole project.
- If you only change files in `1-nest-js-intro/`, then that branch stays focused on this lesson.
- Delete the branch after merging if you no longer need it:
  ```bash
git branch -d 1-nest-js-intro
```
