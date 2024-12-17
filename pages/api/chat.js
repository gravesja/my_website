export default async function handler(req, res) {
    if (req.method === "POST") {
      const { userMessage } = req.body;
  
      // Use the prompt with Fee's background
      const prompt = `Your resume assistant bot: ${userMessage}`;
  
      try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        });
  
        const responseText = completion.data.choices[0].message.content;
        res.status(200).json({ message: responseText });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Bot is currently unavailable." });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  