import {Sensor} from "./Sensor";

// A test sensor. Sends out periodic pulses
class TestSensor extends Sensor {

    timeDifference: number;

    constructor() {
        super("Test Sensor");

        this.timeDifference = 0;
    }

    Update(timeDelta: number) {
        this.timeDifference += timeDelta;

        if (this.timeDifference > 1) {
            this.SendSignal();
            this.timeDifference = 0;
        }
    }

    SendSignal() {
        console.log("Test sensor pulse");
        return 1;
    }
}

export {TestSensor};