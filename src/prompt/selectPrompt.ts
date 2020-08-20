import * as prompts from 'prompts';

export const selectPrompt = async (items: string[]): Promise<string[]> => {
    const response = await prompts({
        type: 'autocompleteMultiselect',
        name: 'value',
        message: 'Select for removal',
        choices: items.map((b) => ({ title: b, value: b })),
        hint: '- Space to select. Return to submit',
        instructions: false,
    } as any); // eslint-disable-line

    return response.value;
};
