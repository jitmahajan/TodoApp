import express from "express";
import {readAll, insert} from "./index.js"

 const app = express();

 //127.0.0.1:4400
app.get("/", async(req, res) => {
    let list = await readAll();
    res.json(list);
});

app.get("/add",async (req, res) =>{
    await insert({message : "via api"});
    res.json({message :"success"});
});

 app.listen(4400);
