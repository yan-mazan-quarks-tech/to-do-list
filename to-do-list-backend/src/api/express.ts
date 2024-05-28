import express, { Express, Request, Response } from "express";
import { Dependencies } from "../dependensies";
import { Task } from "../storage/task";
import { StatusCodes } from 'http-status-codes';

export const port = 3000;

export function createServer(dependencies: Dependencies): Express {
    const app: Express = express();

    app.use(express.json());

    app.get('/api/message', (_, res: Response) => {
        const message = 'Hello Geek. This Message is From Server';
        res.json({ message });
    });

    app.post('/api/task', (req: Request, resp: Response) => {
        if (typeof req.body?.name !== 'string') {
            resp.status(StatusCodes.BAD_REQUEST);
            resp.send('name of the task should be string');
        }
        if (typeof req.body?.description !== 'string') {
            resp.status(StatusCodes.BAD_REQUEST);
            resp.send('description of the task should be string');
        }
        if (typeof req.body?.scheduledAt !== 'number') {
            resp.status(StatusCodes.BAD_REQUEST);
            resp.send('scheduledAt of the task should be number');
        }
    
        const task = new Task(
            req.body.name,
            req.body.description,
            Date.now(),
            req.body.scheduledAt,
        );

        dependencies.storage.addTask(task);

        resp.status(StatusCodes.CREATED);
        resp.send({ task: task })
    })

    app.delete('/api/task', (req: Request, resp: Response) => {
        if (typeof req.body?.name !== 'string') {
            resp.status(StatusCodes.BAD_REQUEST);
            resp.send('name of the task should be string');
        }

        dependencies.storage.deleteTask(req.body.name);

        resp.status(StatusCodes.OK);
        resp.send({});
    })

    app.get('/api/tasks', (_, resp: Response) => {
        const tasks = dependencies.storage.listTasks();

        resp.status(StatusCodes.OK);
        resp.send({ tasks: tasks })
    })

    return app;
}
