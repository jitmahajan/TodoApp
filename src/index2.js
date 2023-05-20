import express from "express";
import {readAll} from "./index.js"

 const app = express();

 //127.0.0.1:4400
app.get("/", async(req, res) => {
    let list = await readAll();
    res.json(list);
});

 app.listen(4400);
