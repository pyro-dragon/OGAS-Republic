import {Component} from "./Component";
import {Resource} from "./Resource";
import {Process} from "./Process";

// A blueprint to show what is required to build a certain component
export class ComponentBlueprint {
    component: Component;       // The component this blueprint creates
    resource: Resource;         // The resource needed to make the process
    processes: Process[];       // The processes needed to create the component
    subcomponents?: Component[]; // The components needed to create the component (optional)

    constructor(component: Component, resource: Resource, processes: Process[], subcomponents?: Component[]) {
        this.component = component;
        this.resource = resource;
        this.processes = processes;
        this.subcomponents = subcomponents;
    }
}