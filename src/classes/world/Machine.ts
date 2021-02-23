import {GameObject} from "../GameObject";
import {MachineTask} from "./MachineTask";

// A device for doing a process
export class Machine extends GameObject {
    name: string;               // The name of the machine
    tasks: MachineTask[];      // The tasks the machine can perform
    basicQuality: number;       // The basic quality of the machine
    basicSpeed: number;         // The basic amount of time saved
    minimumWorkerSkill: number; // The minimum level of skill needed to use the machine

    constructor(name: string, tasks: MachineTask[], basicQuality: number, basicSpeed: number, minimumWorkerSkill: number) {
        super();

        this.name = name;
        this.tasks = tasks;
        this.basicQuality = basicQuality;
        this.basicSpeed = basicSpeed;
        this.minimumWorkerSkill = minimumWorkerSkill;
    }

    Update(deltaTime: number) {
        // Do a task
    }
}