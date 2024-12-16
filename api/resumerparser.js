import openai from 'openai';  // OpenAI's Node SDK (make sure you've installed it)

const openaiApiKey = process.env.OPENAI_API_KEY;
openai.apiKey = openaiApiKey;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ response: "Method Not Allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ response: "Message is required." });
  }

  try {
    // OpenAI API call to process the message
    const openaiResponse = await openai.Completion.create({
      model: 'text-davinci-003', // Replace with your preferred OpenAI model
      prompt: `Resume Question: ${message}`,
      max_tokens: 150,
    });

    const responseText = openaiResponse.choices[0].text.trim();
    
    return res.status(200).json({ response: responseText });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ response: "There was an error processing your request." });
  }
}
