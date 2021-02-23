// A raw material that has not been assembled into a component yet
export class Resource {
    name: string;                   // The name of the resource
    labourRequired: number;         // The amount of labour required to extract the resource
    maximumWorkerLabour: number;    // The maximum amount of Worker labour that can be used to extract the resource

    constructor(name: string, labourRequired: number, maximumWorkerLabour: number) {
        this.name = name;
        this.labourRequired = labourRequired;
        this.maximumWorkerLabour = maximumWorkerLabour;
    }
};
