import {Resource} from "./Resource";

// An instance of source for a resource
export class ResourceVein {
    resource: Resource; // The resource found at this vein
    quality: number;    // The quality of the resource
    reserve?: number;    // The amount of resource in this vein (optional)

    constructor(resource: Resource, quality: number, reserve?: number) {
        this.resource = resource;
        this.quality = quality;
        this.reserve = reserve;
    }
};
