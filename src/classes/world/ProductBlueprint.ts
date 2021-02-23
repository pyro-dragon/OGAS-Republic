import {Product} from "./Product";
import {Component} from "./Component";
import {Process} from "./Process";

// The blueprints to describe what is needed to make a product
export class ProductBlueprint {
    product: Product;               // The product this blueprint creates
    components: Component[];        // The components the product is made from
    assemblyProcesses: Process[];   // The processes needed to assemble the product

    constructor(product: Product, components: Component[], assemblyProcesses: Process[]) {
        this.product = product;
        this.components = components;
        this.assemblyProcesses = assemblyProcesses;
    }
};
