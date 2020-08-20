import * as commander from 'commander';
import { multiSelectAction } from './multiSelectAction';
import { regExpAction } from './regExpAction';
import { logger } from '../utils';
import { GitClient } from '../GitClient';

export const tagCommand = new commander.Command('tag');

tagCommand
    .description('clean tags')
    .alias('t')
    .action(async (params) => {
        const gitClient = new GitClient();
        const items = await gitClient.tags();

        try {
            if (params.args.length) {
                return await regExpAction(gitClient, items, params.args);
            }

            return await multiSelectAction(gitClient, items);
        } catch (e) {
            logger.error(e.message);
        }
    });
