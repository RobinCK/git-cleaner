# git-cleaner

:scissors: CLI utility for bulk cleanup of branches and tags

## Why?

Sooner or later, a lot of unnecessary branches and tags can accumulate
in the project, but most UI utilities do not allow you to multi-select
elements for deletion, and this is exactly the task of this utility.

## Install

#### NPM

```bash
npm install git-cleaner -g
```

#### Yarn

```bash
yarn global add git-cleaner
```

## Development Setup

```bash
# install dependencies
npm install

# build dist files
npm run build
```

## Note

Before using the utility you need to sync git

```bash
# Delete local tags
git tag -l | xargs git tag -d

# Fetch remote branches and tags
git fetch
```

## Usage

```bash
Usage: gitc [options] [command]

Options:
  -v, --version   output the version number
  -h, --help      display help for command

Commands:
  tag|t           clean tags
  branch|b        clean branches
  help [command]  display help for command
```
