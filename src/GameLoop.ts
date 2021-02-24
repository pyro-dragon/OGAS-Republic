import { GameObject } from "./classes/GameObject";

// The main game loop
export class GameLoop {

    secondsPassed:number;
    oldTimeStamp:number;
    running:boolean;
    gameObjects:GameObject[];

    constructor() {
        this.secondsPassed = 0;
        this.oldTimeStamp = 0;
        this.running = false;
        this.gameObjects = new Array();
    }

    addGameObject(gameObject:GameObject) {
        this.gameObjects.push(gameObject);
    }

    Start() {
        window.requestAnimationFrame(this.gameLoop);
        this.running = true;
    }

    Pause() {
        this.running = false;
    }

    Resume() {
        this.running = true;
    }

    Stop() {
        this.running = false;
        this.secondsPassed = 0;
        this.oldTimeStamp = 0;
    }

    gameLoop = (timeStamp: number) => {

        this.secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;

        // Do draw call
        this.gameObjects.forEach((gameObject) => {
            gameObject.Update(this.secondsPassed);
        });

        if(this.running) {
            window.requestAnimationFrame(this.gameLoop);
        }
    }
};
