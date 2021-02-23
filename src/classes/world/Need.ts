// A need. This can represent a required need or a need that can be fulfilled.
export class Need {
    name: string;   // Name of the need
    level: number;  // The level of the need. More advanced needs can be met with more of a lesser level or less of a greater level
    amount: number; // The amount of the need

    constructor(name: string, level: number, amount: number) {
        this.name = name;
        this.level = level;
        this.amount = amount;
    }
}