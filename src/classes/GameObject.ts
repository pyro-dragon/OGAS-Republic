// An object that must be updated every cycle
export abstract class GameObject {
    constructor(){}

    abstract Update(timeDelta: number): void
};
