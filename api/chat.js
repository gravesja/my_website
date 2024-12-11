import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { message, documentContent } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a resume expert giving actionable suggestions." },
        { role: "user", content: `Resume content: ${documentContent}\n\nUser question: ${message}` },
      ],
    });

    const response = completion.data.choices[0].message.content;
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
