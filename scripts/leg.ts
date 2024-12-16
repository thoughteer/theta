import { Mode } from './mode';
import { Updatable } from './updatable';

export class Leg implements Updatable {
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
            this.y = 0.5 * this.y;
        } else {
            this.y = 0.5 * (this.y - Math.max(0, -this.p * Math.sin(this.mode.phi / 4)));
        }

        this.e.style.left = this.x + 'em';
        this.e.style.top = this.y + 'em';
    }
}
