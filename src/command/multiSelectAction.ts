import { GitClient } from '../GitClient';
import { selectPrompt, remotesPrompt } from '../prompt';
import { processor } from '../processor';
import { IGitResponse } from '../interface';

export const multiSelectAction = async (git: GitClient, items: IGitResponse): Promise<void> => {
    const remotes = Object.keys(items);
    const processedRemote: string = remotes.length > 1 ? await remotesPrompt(remotes) : remotes[0];
    return await processor(await selectPrompt(items[processedRemote]), async (item: string) =>
        git.removeObject(processedRemote, item),
    );
};
