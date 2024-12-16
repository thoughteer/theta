export class Loader {
    e: HTMLElement;

    constructor(e: HTMLElement) {
        this.e = e;
    }

    hide(): void {
        this.e.style.display = 'none';
    }
}
