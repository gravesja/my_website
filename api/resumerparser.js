import openai from 'openai';

const openaiApiKey = process.env.OPENAI_API_KEY;
openai.apiKey = openaiApiKey;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ response: "Method Not Allowed" });
  }

  const { message, documentContent } = req.body;

  if (!message && !documentContent) {
    return res.status(400).json({ response: "Message or Document content is required." });
  }

  try {
    let prompt = message;
    if (documentContent) {
      prompt = `Resume content: ${documentContent}\n\nUser Question: ${message}`;
    }

    const openaiResponse = await openai.Completion.create({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 150,
    });

    const responseText = openaiResponse.choices[0].text.trim();
    return res.status(200).json({ response: responseText });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ response: "There was an error processing your request." });
  }
}
