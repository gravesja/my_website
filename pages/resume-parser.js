import { useState } from "react";

export default function ResumeParser() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userMessage.trim() && !documentContent.trim()) return;
  
    setMessages([...messages, { sender: "user", text: userMessage }]);
    setUserMessage(""); // Clear the input
  
    setLoading(true);
  
    try {
      const res = await fetch("/api/resumeparser", {
        method: "POST", // Ensure this is a POST request
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage, documentContent }),
      });
  
      const data = await res.json(); // Ensure the response is JSON
      const responseText = data.response || "Sorry, I couldn't process your request.";
  
      setMessages([...messages, { sender: "user", text: userMessage }, { sender: "bot", text: responseText }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...messages, { sender: "user", text: userMessage }, { sender: "bot", text: "There was an error processing your request." }]);
    }
  
    setLoading(false);
  };

  return (
    <div className="flex flex-col max-w-xl mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Resume Chatbot</h2>
        
        {/* Chatbox */}
        <div className="h-80 overflow-y-scroll bg-gray-100 p-4 mb-4 rounded-lg border border-gray-300">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === "user" ? "text-right" : "text-left"}>
              <div
                className={`inline-block rounded-lg p-2 mb-2 max-w-full ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-center text-gray-500">...</div>}
        </div>

        {/* Input */}
        <div className="flex">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-l-lg"
            placeholder="Ask a question about the resume..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white p-3 rounded-r-lg hover:bg-green-600"
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
