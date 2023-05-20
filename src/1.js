import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);
  console.log("Connection Success");

  await client.close();
}

main();