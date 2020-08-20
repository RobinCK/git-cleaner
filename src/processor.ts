import { confirmPrompt } from './prompt';
import { logger } from './utils';
import * as progress from 'cli-progress';

export const processor = async (items: string[], stepCallback: (item: string) => void): Promise<void> => {
    if (items.length === 0) {
        logger.success('Nothing selected');

        return;
    }

    if (!(await confirmPrompt())) {
        return;
    }

    const bar = new progress.Bar({
        format: 'Progress  [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} {name}',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        fps: 5,
        stream: process.stdout,
        barsize: 50,
    });

    bar.start(items.length, 0, { name: '' });

    try {
        for (const item of items) {
            bar.increment(1, { name: item });
            await stepCallback(item);
        }

        bar.update(items.length, { name: '' });
        bar.stop();
    } catch (e) {
        bar.stop();

        throw e;
    }
};
