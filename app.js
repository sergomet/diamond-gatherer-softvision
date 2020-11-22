import { PlayerMovement } from './PlayerMovement.js';

const canvas = document.getElementById('canvasId');
const context = canvas.getContext('2d');

const geoerge = new Image();
geoerge.walk = new PlayerMovement(100, 100, 260, 100, 10);

geoerge.src = 'assets/george.png'
const GEORGE_WIDTH = 40;
const GEORGE_HEIGHT = 45;
geoerge.onload = () => {
    context.drawImage(geoerge, 0 * GEORGE_WIDTH, 0 * GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, 100, 100, GEORGE_WIDTH, GEORGE_HEIGHT)
}


const mario = new Image();
mario.walk = new PlayerMovement(0,0,270,120, 10);
mario.src = 'assets/mario.png'
const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 39;

mario.onload = () => {
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
}

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log(this);
    context.fillStyle = "green";
    context.fillRect(480, 20, 40, 20);
});

document.addEventListener("keydown", function(event) {
    context.clearRect(0, 0, 600, 400);

    switch(event.key) {
        case 'ArrowUp': {
            geoerge.walk.up();
            break;
        }
        case 'ArrowDown': {
            geoerge.walk.down();
            break;
        }
        case 'ArrowLeft': {
            geoerge.walk.left();
            break;
        }
        case 'ArrowRight': {
            geoerge.walk.right();
            break;
        }
        case 'w':
        case 'W': {
            mario.walk.up();
            break;
        }
        case 's':
        case 'S': {
            mario.walk.down();
            break;
        }
        case 'a':
        case 'A': {
            mario.walk.left();
            break;
        }
        case 'd':
        case 'D': {
            mario.walk.right();
            break;
        }
    }

    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, ...mario.walk.position(), MARIO_WIDTH, MARIO_HEIGHT);
    context.drawImage(geoerge, 0 * GEORGE_WIDTH, 0 * GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, ...geoerge.walk.position(), GEORGE_WIDTH, GEORGE_HEIGHT)
});