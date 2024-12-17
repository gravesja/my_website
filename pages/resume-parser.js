import { useState } from 'react';
import Link from 'next/link';

export default function ResumeParser() {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage }),
      });
      const data = await response.json();
      setBotResponse(data.message);
    } catch (error) {
      console.error('Error:', error);
      setBotResponse('Failed to connect to the bot.');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Resume Bot</h1>
      
      {/* User message input */}
      <textarea
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Type your message here..."
        className="w-full md:w-1/2 p-4 border rounded-md mb-4"
      ></textarea>
      
      {/* Button to send message */}
      <button
        onClick={handleSendMessage}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        {loading ? 'Loading...' : 'Send Message'}
      </button>
      
      {/* Bot response */}
      <div className="mt-4 text-gray-700">
        <strong>Bot Response:</strong>
        <p className="mt-2">{botResponse}</p>
      </div>

      {/* Back to home link */}
      <Link href="/" className="mt-8 px-4 py-2 text-blue-500 hover:underline">
        Back to Info
      </Link>
    </div>
  );
}
