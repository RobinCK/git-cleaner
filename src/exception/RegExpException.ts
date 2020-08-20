export class RegExpException {
    public message = 'Invalid regular expression';

    constructor(message?: string) {
        if (message) {
            this.message = message;
        }
    }
}
