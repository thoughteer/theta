import { Mode } from './mode';
import { Updatable } from './updatable';

export class Eye implements Updatable {
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
            this.x = 0.5 * (this.x - this.p * 0.8);
            this.y = 0.5 * (this.y + 1.6);
        } else {
            const d = 42;
            const h = 42;
            const w = 42;
            const x = w * Math.sin(this.mode.phi / 16) - 8 * this.p;
            const r = Math.sqrt(x*x + h*h + d*d);
            const dx = 2 * x / r;
            const dy = 2 * h / r;
            this.x = 0.5 * (this.x + dx);
            this.y = 0.5 * (this.y + dy);
        }

        this.e.style.left = this.x + 'em';
        this.e.style.top = this.y + 'em';
    }
}
