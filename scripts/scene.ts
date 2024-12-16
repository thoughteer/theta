import { Mode } from './mode';
import { Updatable } from './updatable';

export class Scene {
    mode: Mode;
    updatables: Updatable[];

    constructor(mode: Mode, updatables: Updatable[]) {
        this.mode = mode;
        this.updatables = updatables;
    }

    animate() {
        const update = () => {
            this.updatables.forEach(u => u.update());
            this.mode.update();
        };

        setInterval(update, 1000 / this.mode.fps);
    }
}
