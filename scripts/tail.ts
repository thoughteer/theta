import { Mode } from './mode';
import { Updatable } from './updatable';

export class Tail implements Updatable {
    e: HTMLElement;
    mode: Mode;

    x: number = 0;
    y: number = 0;

    constructor(e: HTMLElement, mode: Mode) {
        this.e = e;
        this.mode = mode;
    }

    update(): void {
        if (this.mode.idle) {
            this.x = 0.5 * (this.x + Math.sin(this.mode.phi));
            this.y = 0.5 * (this.y - 0.5 - Math.abs(Math.sin(this.mode.phi)));
        } else {
            this.x = 0.5 * (this.x + 2 * Math.sin(this.mode.phi / 4));
            this.y = 0.5 * (this.y - Math.abs(Math.sin(this.mode.phi / 4)));
        }

        this.e.style.left = this.x + 'em';
        this.e.style.top = this.y + 'em';
    }
}
