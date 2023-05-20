import express from "express";
import {readAll, insert} from "./index.js"

 const app = express();
 app.use(express.json());
 app.use(express.urlencoded({extended : true}));

 //127.0.0.1:4400
app.get("/", async(req, res) => {
    let list = await readAll();
    res.json(list);
});

app.get("/add", async (req, res) =>{
    let message = req.query.message || "hardcoded message";
    await insert({message : message});
    res.json({message :"success"});
});

app.post("/add", async (req,res) =>{
    let data = req.body;
    await insert(data);
    res.json({message :"successfull"});
});

 app.listen(4400);
