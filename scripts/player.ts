export class Player {
    e: HTMLAudioElement;
    iid: number|null = null;

    constructor(url: string, ready: () => void) {
        const start = Date.now();

        this.e = new Audio(url);
        this.e.oncanplaythrough = () => {
            setTimeout(ready, Math.max(0, 1000 - (Date.now() - start)));
        };
        this.e.preload = 'auto';
    }

    toggle(): void {
        if (this.iid === null) {
            this.loop();
            this.iid = setInterval(() => this.loop(), 18286);
        } else {
            clearInterval(this.iid);
            this.e.pause();
            this.iid = null;
        }
    }

    loop(): void {
        this.e.currentTime = 0;
        this.e.play();
    }
}
