import { Mode } from './mode';
import { Updatable } from './updatable';

export class Arm implements Updatable {
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
            this.y = 0.5 * this.y;
        } else {
            this.x = 0.5 * (this.x - 0.5 * Math.sin(this.mode.phi / 16));
            this.y = 0.5 * (this.y + this.p * Math.sin(this.mode.phi));
        }

        this.e.style.left = this.x + 'em';
        this.e.style.top = this.y + 'em';
    }
}
