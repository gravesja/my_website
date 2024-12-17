import { useState } from "react";

export default function ResumeParser() {
  const [userMessage, setUserMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userMessage) return; // Don't send empty messages

    setIsLoading(true);
    setBotResponse(""); // Clear previous response

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from API");
      }

      const data = await response.json();
      setBotResponse(data.message);
    } catch (error) {
      console.error("Error:", error);
      setBotResponse("There was an error processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Resume Parser Bot</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter a message or question about your resume"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Get Suggestions"}
        </button>
      </form>

      <div className="mt-4 p-4 bg-white border border-gray-200 rounded-md w-full max-w-md">
        <h3 className="text-lg font-semibold">Bot Response:</h3>
        <p>{botResponse || "Your suggestions will appear here."}</p>
      </div>
    </div>
  );
}
