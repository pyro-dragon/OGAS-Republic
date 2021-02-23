import {Process} from "./Process";

// A task that can be performed by a machine
export class MachineTask {
    process: Process;   // The process it can help with
    timeSaved: number;  // Permotion of time saved
    quality: number;    // The quality the task is performed at

    constructor(process: Process, timeSaved: number, quality: number)
    {
        this.process = process;
        this.timeSaved = timeSaved;
        this.quality = quality;
    }
};
