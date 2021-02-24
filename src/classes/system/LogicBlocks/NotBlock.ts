import { Value } from "../Value";
import { LogicBlock } from "./LogicBlock";

// Invert a signal
export class NotBlock extends LogicBlock {

    private output:Value;

    constructor() {
        super("Not");
        this.output = new Value("output", undefined);
        this.outputs.set("0", this.output);
    }

    Update() {
        // Only use the first value
        const val1 = this.inputs.values();
        const val2 = val1.next();
        const val3 = val2.value;
        this.output.value = !val3.value;
    }
}