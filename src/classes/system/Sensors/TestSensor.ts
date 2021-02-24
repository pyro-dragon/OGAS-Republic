import { Value } from "../Value";
import {Sensor} from "./Sensor";

// A test sensor. Sends out periodic pulses
class TestSensor extends Sensor {

    timeDifference: number;
    public output:Value;

    constructor() {
        super("Test Sensor");

        this.timeDifference = 0;
        this.output = new Value("Test Signal", false);
    }

    Update(timeDelta: number) {
        this.timeDifference += timeDelta;

        if (this.timeDifference > 1) {
            this.SendSignal();
            this.timeDifference = 0;
            this.output.value = !this.output.value;
        }
    }

    SendSignal() {
        console.log("Test sensor pulse");
        return 1;
    }
}

export {TestSensor};