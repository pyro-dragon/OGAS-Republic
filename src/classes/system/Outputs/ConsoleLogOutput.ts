import { GameObject } from "../../GameObject";
import { Value } from "../Value";

// Output a value to the console log every second
export class ConsoleLogOutput extends GameObject {
    
    timeDifference: number;
    input?:Value;
    
    constructor() {
        super();
        this.timeDifference = 0;
    }

    Update(timeDelta: number) {
        this.timeDifference += timeDelta;

        if (this.timeDifference > 1) {
            this.timeDifference = 0;

            if (this.input) {
                console.log("Display: " + this.input.value);
            }
        }
    }
}