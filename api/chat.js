import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in Vercel's environment variables
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message, documentContent } = req.body;

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-4", // Using GPT-4 for advanced processing
        messages: [
          { role: "system", content: "You are a resume expert providing actionable suggestions." },
          { role: "user", content: `Resume Content:\n${documentContent}\n\nUser Question: ${message}` },
        ],
      });

      const response = completion.data.choices[0].message.content;
      res.status(200).json({ response });
    } catch (error) {
      console.error("Error processing OpenAI request:", error);
      res.status(500).json({ error: "There was an error processing the request." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
