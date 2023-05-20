import { MongoClient } from 'mongodb';

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);



async function insert() {
 
 // await client.connect();
  const db = client.db("project1");
  let data = { message: "Connecting Mongo" };
  let result = await db.collection("todo").insertOne(data);

  await client.close();
}

insert();