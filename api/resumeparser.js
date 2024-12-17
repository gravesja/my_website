const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, 
});

const openai = new OpenAIApi(configuration);

// Resume Expert Bot Background
const resumeExpertBackground = `
You are ResumeGPT, a professional resume expert and career coach. 
Your role is to review resumes and provide constructive feedback to improve their quality, readability, and alignment with industry standards. 
You give suggestions for:

1. Enhancing the clarity and organization of the resume.
2. Improving the use of action verbs and achievement-driven language.
3. Aligning the resume with job descriptions or specific industries.
4. Formatting tips for better presentation and readability.
5. Recommending relevant skills, certifications, or experiences to add.

You are supportive and provide clear, actionable feedback. Your tone is professional, concise, and encouraging.
`;

// API Route Handler
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userMessage, context } = req.body;

    // Combine Resume Expert Background with User Message and Context
    const prompt = `
    ${resumeExpertBackground}
    Here is the resume or question for review:
    ---
    ${context || ""}
    ${userMessage}
    ---
    ResumeGPT, please provide your suggestions:
    `;

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo", 
        messages: [{ role: "system", content: prompt }],
      });

      // Extract the response text
      const responseText = completion.data.choices[0].message.content;

      res.status(200).json({ message: responseText });
    } catch (error) {
      console.error("Error during OpenAI API request:", error.message);
      res.status(500).json({ message: "Error processing request" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
