import { useState } from 'react';
import Link from 'next/link';

export default function ResumeParser() {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError('');
    setBotResponse('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from server');
      }

      const data = await response.json();
      setBotResponse(data.message);
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Resume Parser Bot</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={userMessage}
            onChange={handleMessageChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="Ask for resume suggestions or advice..."
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            {isLoading ? 'Processing...' : 'Submit'}
          </button>
        </form>

        {botResponse && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
            <p>{botResponse}</p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded-md">
            <p>{error}</p>
          </div>
        )}

        <div className="mt-4 text-center">
          <Link href="/" passHref>
            <a className="text-blue-500 hover:underline">Back to Info</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
