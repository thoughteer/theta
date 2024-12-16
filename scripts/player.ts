export class Player {
    e: HTMLAudioElement;

    silence: HTMLAudioElement = new Audio('./assets/silence.mp3');
    loaded: boolean = false;
    iid: number|null = null;

    constructor(e: HTMLAudioElement) {
        this.e = e;
    }

    toggle(callback: () => void): void {
        if (this.iid === null) {
            if (!this.loaded) {
                this.e.oncanplaythrough = () => {
                    if (!this.loaded) {
                        this.loaded = true;
                        // Play 250 ms of silence first to raise volume up to 100%.
                        this.silence.onended = () => this.toggle(callback);
                        this.silence.play();
                    }
                };
                this.e.load();
                return;
            } else {
                this.loop();
                this.iid = setInterval(() => this.loop(), 18286);
            }
        } else {
            clearInterval(this.iid);
            this.e.pause();
            this.iid = null;
        }
        callback();
    }

    loop(): void {
        this.e.currentTime = 0;
        this.e.play();
    }
}
