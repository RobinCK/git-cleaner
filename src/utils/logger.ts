import * as chalk from 'chalk';

const _logger = console.log; // eslint-disable-line

export const logger = {
    log: (...args: any): void => {
        // eslint-disable-line
        _logger(...args);
    },

    success: (message: string): void => {
        _logger(chalk.green('✔ ') + message);
    },

    error: (message: string): void => {
        _logger(chalk.red('✖ ') + message);
    },
};
