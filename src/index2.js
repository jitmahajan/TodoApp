import express from "express";

 const app = express();

 //127.0.0.1:4400
app.get("/", (req, res) => {
    res.json({message:"hi...."});
});

 app.listen(4400);
