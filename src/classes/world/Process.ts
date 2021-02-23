import {Resource} from "./Resource";

// A process that takes a raw material and does something to it. 
export class Process {
    name: string;                   // The name of the process
    time: number;                   // The time needed to perform the process
    minimumLabourQuality: number;   // The minimum level of labour quality needed to do the process
    maximumWorkerQuality: number;   // The maximum quality achived by workers alone
    maximumWorkerSpeed: number;     // The maximum speed achived by workers alone
    resource?: Resource;             // The resources needed in the process (optional)
    resourceAmount?: number;         // The amount of resources needed (optional)

    constructor(name: string, time: number, minimumLabourQuality: number, maximumWorkerQuality: number, maximumWorkerSpeed: number, resource?: Resource, resourceAmount?: number) {
        this.name = name;
        this.time = time;
        this.minimumLabourQuality = minimumLabourQuality;
        this.maximumWorkerQuality = minimumLabourQuality;
        this.maximumWorkerSpeed = maximumWorkerSpeed;
        this.resource = resource;
        this.resourceAmount = resourceAmount;
    }
};
