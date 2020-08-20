#!/usr/bin/env node

import * as commander from 'commander';
import { branchCommand, tagCommand } from './command';

commander
    .name('gitc')
    .version(require('../package.json').version, '-v, --version') // eslint-disable-line
    .addCommand(tagCommand)
    .addCommand(branchCommand);

commander.parse(process.argv);
