import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";

const ResumeParser = () => {
  const [resumeText, setResumeText] = useState('');
  const [parsedData, setParsedData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to parse resume using OpenAI API
  const parseResume = async () => {
    setLoading(true);
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Parse the following resume and extract the name, contact information, skills, and work experience:\n${resumeText}`
          }
        ]
      });
      setParsedData(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error parsing resume:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    parseResume();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste your resume here..."
          required
          className="border p-2 w-full h-32"
        />
        <button type="submit" className="mt-4 px-4 py-2 bg-purple-700 text-white rounded">Parse Resume</button>
      </form>
      {loading && <p>Loading...</p>}
      {parsedData && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <h3 className="font-bold">Parsed Data:</h3>
          <pre>{parsedData}</pre>
        </div>
      )}
    </div>
  );
};

export default ResumeParser;
