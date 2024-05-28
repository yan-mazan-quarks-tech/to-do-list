import express, { Express, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const port = 3002;
const app: Express = express();

app.get("/test", (req: Request, resp: Response) => {
    const message = "Hello! This is a message";

    resp.status(StatusCodes.OK);
    resp.send({ message: message });
});

app.listen(port, () => {
    console.log("Server is started");
});
