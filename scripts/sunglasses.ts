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
            if (this.mode.toggling) {
                this.x += 2 * (Math.random() - 0.5);
                this.y -= Math.random();
            }
        } else {
            this.x = 0.5 * (this.x + 2 * Math.sin(this.mode.phi / 4));
            this.y = 0.5 * (this.y - 31 - Math.cos(this.mode.phi / 2));
        }

        this.e.style.left = this.x + 'em';
        this.e.style.top = this.y + 'em';
    }

    click(): void {
        if (this.mode.idle) {
            this.e.classList.remove('pulse');
        } else {
            this.e.classList.add('pulse');
        }

        this.mode.toggle();
    }
}
