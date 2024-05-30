import { Task } from "./task";

export class Storage {
    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    listTasks(): Task[] {
        return this.tasks.sort(function (task1: Task, task2: Task) {
            return task1.scheduledAt - task2.scheduledAt;
        });
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    deleteTask(name: string) {
        this.tasks = this.tasks.filter((task: Task, _) => task.name !== name);
    }

    updateTask(task: Task) {
        this.tasks.map((t: Task) => {
            if (t.name === task.name) {
                return task;
            }
    
            return t;
        })
    }
}
