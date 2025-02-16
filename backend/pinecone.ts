// pinecone.js
require('dotenv').config();
const { PineconeClient } = require('@pinecone-database/pinecone'); // Adjust the import based on the package

const pinecone = new PineconeClient();

async function initPinecone() {
  await pinecone.init({
      apiKey: process.env.PINECONE_API_KEY,
          environment: process.env.PINECONE_ENV,
            });
              console.log('Pinecone initialized successfully.');
              }

              initPinecone().catch(console.error);

              module.exports = pinecone;4