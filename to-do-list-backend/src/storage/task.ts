export class Task {
    constructor(
        public name: string, 
        public description: string, 
        public createdAt: number, 
        public scheduledAt: number,
    ) {}
}
