// gemini.js
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGemini() {
  try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

          const result = await model.generateContent('Hello, Gemini!');
              console.log('Gemini test response:', result.response.text());
                } catch (error) {
                    console.error('Error calling Gemini API:', error);
                      }
                      }

                      testGemini();

                      module.exports = genAI;