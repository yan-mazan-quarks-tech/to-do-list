import { Storage } from "./storage/storage";

export class Dependencies {
    public storage: Storage;

    constructor() {
        this.storage = new Storage();
    }
};
