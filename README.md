# git-cleaner

:scissors: CLI utility for bulk cleanup of branches and tags

## Why?

Sooner or later, a lot of unnecessary branches and tags can accumulate
in the project, but most UI utilities do not allow you to multi-select
elements for deletion, and this is exactly the task of this utility.

## Features

- support multiselect branches/tags for removal
- support for multiple remote

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

## Examples

#### Removing branches by regexp

```shell script
gitc branch feat
```

<img src="https://github.com/RobinCK/git-cleaner/raw/master/assets/gitc_branch_regexp.gif" />

#### Removing selected branches

```shell script
gitc branch
```

<img src="https://github.com/RobinCK/git-cleaner/raw/master/assets/gitc_branch_select.gif" />

#### Removing tags by regexp

```shell script
gitc tag 'v.*\.2\..*'
```

<img src="https://github.com/RobinCK/git-cleaner/raw/master/assets/gitc_tag_regexp.gif" />

#### Removing selected tags

```shell script
gitc tag
```

<img src="https://github.com/RobinCK/git-cleaner/raw/master/assets/gitc_tag_select.gif" />

MIT © [Igor Ognichenko](https://github.com/RobinCK)
