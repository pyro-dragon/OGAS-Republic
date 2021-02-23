import {Need} from "./Need";

// An end product for sale or use
export class Product {
    name: string;           // Name of product
    quality: number;        // Quality of product
    needsFulfilled: Need[]; // The needs fulfilled by product
    lifetime: number;       // Time the product will last

    constructor(name: string, quality: number, needsFulfilled: Need[], lifetime: number) {
        this.name = name;
        this.quality = quality;
        this.needsFulfilled = needsFulfilled;
        this.lifetime = lifetime;
    }
};
