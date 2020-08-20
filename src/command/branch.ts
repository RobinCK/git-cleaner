import * as commander from 'commander';
import { multiSelectAction } from './multiSelectAction';
import { regExpAction } from './regExpAction';
import { logger } from '../utils';
import { GitClient } from '../GitClient';

export const branchCommand = new commander.Command('branch');

branchCommand
    .description('clean branches')
    .alias('b')
    .action(async (params) => {
        const gitClient = new GitClient();
        const items = await gitClient.branch();

        try {
            if (params.args.length) {
                return await regExpAction(gitClient, items, params.args);
            }

            return await multiSelectAction(gitClient, items);
        } catch (e) {
            logger.error(e.message);
        }
    });
