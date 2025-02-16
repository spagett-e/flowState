// db.js
require('dotenv').config();
const { Client } = require('pg');
const { drizzle } = require('drizzle-orm/node-postgres');

const client = new Client({
  host: process.env.DB_HOST,
    port: process.env.DB_PORT,
      user: process.env.DB_USER,
        password: process.env.DB_PASS,
          database: process.env.DB_NAME,
          });

          client.connect();

          const db = drizzle(client);

          module.exports = db;