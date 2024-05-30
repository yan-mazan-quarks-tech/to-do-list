export class Task {

    public name: string;
    public description: string;
    public createdAt: number;
    public scheduledAt: number;
    public done: boolean;
    
    constructor(name: string, description: string, createdAt: number, scheduledAt: number, done: boolean) {
        this.name = name;
        this.description: description;
        this.done = false; // initialize done as false
     }
}
