import { Gem } from './gem';
import { Mode } from './mode';
import { Updatable } from './updatable';

export class Ground implements Updatable {
    b: HTMLElement;
    f: HTMLElement;
    gem: Gem;
    mode: Mode;

    y: number = 0;

    constructor(b: HTMLElement, f: HTMLElement, gem: Gem, mode: Mode) {
        this.b = b;
        this.f = f;
        this.gem = gem;
        this.mode = mode;

        let k = 0;
        for (const e of [b, f]) {
            for (let row = 0; row < 18; row += 1) {
                for (let column = 0; column < 4; column += 1) {
                    const hex = document.createElement('div');
                    hex.classList.add('hex', 'size-5');
                    if (this.gem.mask[k]) {
                        hex.style.backgroundColor = this.gem.color;
                    } else {
                        hex.classList.add('black');
                    }

                    const block = document.createElement('div');
                    block.style.position = 'absolute';
                    const s = 4;
                    const x = -8 + (32 * column + (row % 2 === 0 ? 16 : 0)) + s * (Math.random() - 0.5);
                    block.style.left = x + 'em';
                    const y = 4 + (8 * row) + s * (Math.random() - 0.5);
                    block.style.top = y + 'em';
                    block.appendChild(hex);

                    e.appendChild(block);

                    ++k;
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
