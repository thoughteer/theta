import {Howl} from 'howler';

export class Player {
    sources: string[];

    loop?: Howl;
    playing: boolean = false;

    constructor(sources: string[]) {
        this.sources = sources;
    }

    toggle(callback: () => void): void {
        if (!this.loop) {
            this.loop = new Howl({src: this.sources, loop: true});
            this.loop.once('load', () => this.toggle(callback));
            this.loop.load();
            return;
        }

        if (!this.playing) {
            this.playing = true;
            this.loop.play();
        } else {
            this.playing = false;
            this.loop.pause();
            this.loop.seek(0);
        }
        callback();
    }
}
