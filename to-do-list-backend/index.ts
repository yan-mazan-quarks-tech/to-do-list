import { port, createServer } from "./src/api/express"
import { Express } from "express";
import { Dependencies } from "./src/dependensies";

const dependencies = new Dependencies();

const app: Express = createServer(dependencies);

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
