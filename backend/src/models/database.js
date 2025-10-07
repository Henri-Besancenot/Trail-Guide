require('dotenv').config();
const { DB_URL } = process.env;
const { MongoClient } = require("mongodb");

let client;
let db;

module.exports = {
    async getDbo() {
        if (!db) {
            client = new MongoClient(DB_URL);
            await client.connect();
            db = client.db();
            console.log("Connected to MongoDB");
        }
        return db;
    }
};
