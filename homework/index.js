"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const port = 3001;
const app = (0, express_1.default)();
app.get("/test", (req, resp) => {
    const message = "Hello! This is a message";
    resp.status(http_status_codes_1.StatusCodes.OK);
    resp.send({ message: message });
});
app.listen(port, () => {
    console.log("Server is started");
});
