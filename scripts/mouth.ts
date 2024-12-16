import { Mode } from './mode';
import { Updatable } from './updatable';

export class Mouth implements Updatable {
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
            this.e.style.fontSize = '1em';
            this.x = 0.5 * this.x;
            this.y = 0.5 * this.y;
        } else {
            this.e.style.fontSize = '0.5em';
            this.x = 0.5 * (this.x - 4 * Math.sin(this.mode.phi / 8) * Math.sign(Math.sin(this.mode.phi / 16)));
            this.y = -2;
        }

        this.e.style.left = this.x + 'em';
        this.e.style.top = this.y + 'em';
    }
}
