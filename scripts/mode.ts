import { Player } from './player';

export class Mode {
    player: Player;

    bpm: number = 210;
    fps: number = 50;
    dq: number = this.bpm / (60 * this.fps);

    toggling: boolean = false;
    idle: boolean = true;
    phi: number = 0;

    constructor(player: Player) {
        this.player = player;
    }

    toggle(): void {
        if (this.toggling) {
            return;
        }

        this.toggling = true;
        this.player.toggle(() => {
            this.toggling = false;
            this.idle = !this.idle;
            if (!this.idle) {
                this.phi = 0;
            }
        });
    }

    update(): void {
        this.phi += 2 * Math.PI * this.dq;
    }
}
