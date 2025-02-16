 // server.js
 require('dotenv').config();
 const express = require('express');
 const db = require('./db');
 require('./pinecone'); // Initialize Pinecone
 require('./openai');   // Initialize OpenAI
 require('./gemini');   // Initialize Gemini

 const app = express();
 const PORT = process.env.PORT || 3000;

 // Middleware
 app.use(express.json());

 // Basic Test Endpoint
 app.get('/', (req, res) => {
   res.send('FlowState backend is running!');
   });

   // Gemini API Endpoint
   app.post('/gemini', async (req, res) => {
     try {
         const { prompt } = req.body;

             if (!prompt) {
                   return res.status(400).json({ error: 'Prompt is required' });
                       }

                           const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
                               const result = await model.generateContent(prompt);

                                   res.json({ response: result.response.text() });
                                     } catch (error) {
                                         console.error('Gemini API Error:', error);
                                             res.status(500).json({ error: 'Internal Server Error' });
                                               }
                                               });

                                               // Start Server
                                               app.listen(PORT, () => {
                                                 console.log(`Server listening on port ${PORT}`);
                                                 });