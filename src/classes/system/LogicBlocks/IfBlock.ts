import {LogicBlock} from "./LogicBlock";
import { Value } from "../Value";

// A logic block that triggers another logic block if a given value is true
export class IfBlock extends LogicBlock {

    output:Value;   // Shortcut to output

    constructor() {
        super("If");
        this.output = new Value("output", false);
        this.outputs.set("0", this.output);         // Link output to output array
    }

    Update() {
        let allTrue = true;
        let nextValue;

        const interator = this.inputs[Symbol.iterator]();
        do {
            nextValue = interator.next()
            if (nextValue.value) {
                allTrue = !!nextValue.value[1].value;
            }
        } while (allTrue && !nextValue.done);

        this.output.value = allTrue;
    }
};
