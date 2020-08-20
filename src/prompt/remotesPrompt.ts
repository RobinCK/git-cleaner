import * as prompts from 'prompts';

export const remotesPrompt = async (remotes: string[]): Promise<string> => {
    const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Select remote',
        choices: remotes.map((r) => ({ title: r, value: r })),
        initial: 0,
    });

    return response.value;
};
