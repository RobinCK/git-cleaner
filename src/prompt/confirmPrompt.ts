import * as prompts from 'prompts';

export const confirmPrompt = async (initial = false): Promise<boolean> => {
    const response = await prompts({
        type: 'confirm',
        name: 'value',
        message: 'You confirm the action?',
        initial,
    });

    return response.value;
};
