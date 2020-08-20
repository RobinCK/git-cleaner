import simpleGit, { Response, SimpleGit } from 'simple-git';
import { IGitResponse } from './interface';
import * as resp from 'simple-git/typings/response';

export class GitClient {
    private readonly git: SimpleGit;

    constructor() {
        this.git = simpleGit();
    }

    async tags(): Promise<IGitResponse> {
        const remotes: string[] = (await this.git.getRemotes()).map((r) => r.name);
        const tagsResponse: IGitResponse = {};

        for (const remote of remotes) {
            tagsResponse[remote] = (await this.git.listRemote(['--tags', remote]))
                .split('\n')
                .filter((line) => line.trim())
                .map((line) => line.split('refs/tags/'))
                .filter(([, tagName]) => tagName)
                .map(([, tagName]) => tagName);
        }

        return tagsResponse;
    }

    async branch(): Promise<IGitResponse> {
        return (await this.git.branch()).all
            .filter((name) => name.indexOf('remotes') === 0)
            .map((name) => name.substr(8))
            .map((name) => name.split(/\/(.+)/))
            .reduce(
                (obj, [remote, branchName]) => ({
                    ...obj,
                    [remote]: [...(obj[remote] || []), branchName],
                }),
                {} as IGitResponse,
            );
    }

    async removeObject(remote: string, item: string): Promise<Response<resp.PushResult>> {
        return this.git.push(remote, item, ['--delete']);
    }
}
