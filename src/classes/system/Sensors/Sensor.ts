import {GameObject} from "../../GameObject";

// The abstract class for sensors. These take readings from the world and pass them on to logic components
abstract class Sensor extends GameObject {
    name: String;

    constructor(name: String) {
        super();
        this.name = name;
    }

    abstract SendSignal():any;
}

export {Sensor};