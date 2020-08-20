import { GitClient } from '../GitClient';
import { selectPrompt, remotesPrompt } from '../prompt';
import { RegExpException } from '../exception';
import { logger } from '../utils';
import * as chalk from 'chalk';
import { processor } from '../processor';
import { IGitResponse } from '../interface';

export const regExpAction = async (git: GitClient, items: IGitResponse, args: string[]): Promise<void> => {
    const remotes = Object.keys(items);
    const processedRemote: string = remotes.length > 1 ? await remotesPrompt(remotes) : remotes[0];
    let match = [];

    try {
        const regExps: RegExp[] = args.map((a) => new RegExp(a));

        match = items[processedRemote].filter((b) => regExps.filter((r) => r.test(b)).length > 0);
    } catch (e) {
        throw new RegExpException();
    }

    if (match.length) {
        logger.success(`Selected for removal ${chalk.gray('›')} ` + match.join(', '));
    }

    return await processor(await selectPrompt(match), async (item: string) => git.removeObject(processedRemote, item));
};
