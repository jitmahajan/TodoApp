import { MongoClient } from 'mongodb';

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);



async function insert(data) {
 
 // await client.connect();
  const db = client.db("project1");
  let result = await db.collection("todo").insertOne(data);

  await client.close();
}

async function readAll(){
  const db = client.db("project");
  const todo_collection = db.collection("todo");

  let list = await todo_collection.find().toArray();
  console.log(list);

  await client.close();
}

export{insert, readAll};