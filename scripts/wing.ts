import { Mode } from './mode';
import { Updatable } from './updatable';

export class Wing implements Updatable {
    e: HTMLElement;
    p: number;
    mode: Mode;

    x: number = 0;
    y: number = 0;

    constructor(e: HTMLElement, p: 1|-1, mode: Mode) {
        this.e = e;
        this.p = p;
        this.mode = mode;
    }

    update(): void {
        if (this.mode.idle) {
            this.x = 0.5 * this.x;
            this.y = 0.5 * (this.y + 2);
        } else {
            this.x = 0.5 * (this.x + Math.sin(this.mode.phi / 16));
            this.y = 0.5 * (this.y + Math.sin(this.mode.phi / 32));
        }

        this.e.style.left = this.x + 'em';
        this.e.style.top = this.y + 'em';
    }
}
