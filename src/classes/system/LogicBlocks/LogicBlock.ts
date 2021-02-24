import {GameObject} from "../../GameObject";
import {Value} from "../Value";

// An abstract logic block used to control signal processing
export abstract class LogicBlock extends GameObject {
    protected name: string;
    protected inputs: Map<string, Value>;
    public outputs: Map<string, Value>;

    constructor(name: string) {
        super();
        this.name = name;
        this.inputs = new Map();
        this.outputs = new Map();
    }

    public setInput(index: string, value: Value) {
        this.inputs.set(index, value);
    }
};
