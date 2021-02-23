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

        if (this.timeDifference) {
            this.SendSignal();
            this.timeDifference = 0;
        }
    }

    SendSignal() {
        return 1;
    }
}

export {TestSensor};