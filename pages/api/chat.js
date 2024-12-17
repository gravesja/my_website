// /pages/api/chat.js

import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, 
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Get the user message from the body of the POST request
    const { userMessage } = req.body;

    try {
      
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo", 
        messages: [
          { role: "system", content: "You are Fee." }, 
          { role: "user", content: userMessage }, 
        ],
      });

      // Get the chatbot's response text
      const responseText = completion.data.choices[0].message.content;

      // Send the response back to the client
      res.status(200).json({ message: responseText });
    } catch (error) {
      console.error("Error during OpenAI API request:", error);

      // Handle errors and send a failure response
      res.status(500).json({ message: "Error processing request" });
    }
  } else {
    
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
