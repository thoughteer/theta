import { Mode } from './mode';
import { Updatable } from './updatable';

export class Sunglasses implements Updatable {
    e: HTMLElement;
    mode: Mode;

    x: number = 0;
    y: number = 0;

    constructor(e: HTMLElement, mode: Mode) {
        this.e = e;
        this.mode = mode;

        e.onclick = () => this.click();
    }

    update(): void {
        if (this.mode.idle) {
            this.x = 0.5 * this.x;
            this.y = 0.5 * this.y;
        } else {
            this.x = 0.5 * (this.x + 2 * Math.sin(this.mode.phi / 4));
            this.y = 0.5 * (this.y - 52 - Math.cos(this.mode.phi / 2));
        }

        this.e.style.left = this.x + 'em';
        this.e.style.top = this.y + 'em';
    }

    click(): void {
        this.mode.toggle();
    }
}
