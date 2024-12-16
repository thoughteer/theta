import { Arm } from './arm';
import { Eye } from './eye';
import { Ground } from './ground';
import { Head } from './head';
import { Leg } from './leg';
import { Mode } from './mode';
import { Mouth } from './mouth';
import { Player } from './player';
import { Scene } from './scene';
import { Sunglasses } from './sunglasses';
import { Tail } from './tail';
import { Wing } from './wing';

const player = new Player(document.getElementById('loop')! as HTMLAudioElement);

const mode = new Mode(player);

const sunglasses = new Sunglasses(document.getElementById('sunglasses')!, mode);
const head = new Head(document.getElementById('head')!, mode);
const eyes = [
    new Eye(document.getElementById('eye-L')!, -1, mode),
    new Eye(document.getElementById('eye-R')!, 1, mode),
];
const mouth = new Mouth(document.getElementById('mouth')!, mode);
const arms = [
    new Arm(document.getElementById('arm-L')!, -1, mode),
    new Arm(document.getElementById('arm-R')!, 1, mode),
];
const legs = [
    new Leg(document.getElementById('leg-L')!, -1, mode),
    new Leg(document.getElementById('leg-R')!, 1, mode),
];
const wings = [
    new Wing(document.getElementById('wing-L')!, -1, mode),
    new Wing(document.getElementById('wing-R')!, 1, mode),
];
const tail = new Tail(document.getElementById('tail')!, mode);

const ground = new Ground(document.getElementById('background')!, document.getElementById('foreground')!, mode);

const scene = new Scene(mode, [sunglasses, head, ...eyes, mouth, ...arms, ...legs, ...wings, tail, ground]);
scene.animate();
