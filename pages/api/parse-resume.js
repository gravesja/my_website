import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { file } = req.body;

    // Send the file to OpenAI API for resume parsing
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Extract key skills and experience from this resume: ${file}`,
      max_tokens: 1000,
      api_key: process.env.OPENAI_API_KEY, // Set this in your environment variables
    });

    res.status(200).json({ summary: response.data.choices[0].text });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
