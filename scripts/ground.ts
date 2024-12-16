import { Mode } from './mode';
import { Updatable } from './updatable';

export class Ground implements Updatable {
    b: HTMLElement;
    f: HTMLElement;
    mode: Mode;

    y: number = 0;

    constructor(b: HTMLElement, f: HTMLElement, mode: Mode) {
        this.b = b;
        this.f = f;
        this.mode = mode;

        for (const e of [b, f]) {
            for (let row = 0; row < 18; row += 1) {
                for (let column = 0; column < 4; column += 1) {
                    const hex = document.createElement('div');
                    hex.classList.add('hex', 'size-5', e === b ? 'white' : 'black');

                    const block = document.createElement('div');
                    block.style.position = 'absolute';
                    const x = -8 + (32 * column + (row % 2 === 0 ? 0 : 16)) + 4 * (Math.random() - 0.5);
                    block.style.left = x + 'em';
                    const y = 12 + (8 * row) + 4 * (Math.random() - 0.5);
                    block.style.top = y + 'em';
                    block.appendChild(hex);

                    e.appendChild(block);
                }
            }
        }
    }

    update(): void {
        if (this.mode.idle) {
            return
        }

        this.y -= 80 * this.mode.dq / 64;
        if (this.y <= -160) {
            this.y += 144;
            [this.b, this.f] = [this.f, this.b];
            this.b.style.zIndex = '-2';
            this.f.style.zIndex = '-1';
        }

        this.b.style.top = this.y + 'em';
        this.f.style.top = (this.y + 144) + 'em';
    }
}
