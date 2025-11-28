import "dotenv/config";
import { MongoClient } from "mongodb";

const { DB_URL } = process.env;

let client;
let db;

export async function getDbo() {
  if (!db) {
    client = new MongoClient(DB_URL);
    await client.connect();
    db = client.db();
    console.log("Connected to MongoDB");
  }
  return db;
}
