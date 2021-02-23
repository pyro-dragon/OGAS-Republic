import {LogicComponent} from "./LogicComponent";
import { Value } from "./Value";

// A logic block that triggers another logic block if a given value is true
export class IfBlock extends LogicComponent {

    output:Value;   // Shortcut to output

    constructor() {
        super("If");
        this.output = new Value("output", false);
        this.outputs.set("0", this.output);         // Link output to output arrya
    }

    Update() {
        let allTrue = true;

        const interator = this.inputs[Symbol.iterator]();
        do {
            allTrue = allTrue || interator.next().value;
        } while (allTrue);

        this.output.value = false;
    }
};
