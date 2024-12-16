import { useState } from 'react';

export default function ResumeParser() {
  const [documentContent, setDocumentContent] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!documentContent || !message) return;

    setLoading(true);
    setResponse('');
    
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ documentContent, message }),
    });

    const data = await res.json();
    setLoading(false);
    if (data.response) {
      setResponse(data.response);
    } else {
      setResponse('An error occurred.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-purple-700 text-center">Resume Parser</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="documentContent" className="block text-lg text-purple-600">Resume Content</label>
            <textarea
              id="documentContent"
              rows="6"
              value={documentContent}
              onChange={(e) => setDocumentContent(e.target.value)}
              className="w-full p-4 mt-2 border-2 border-purple-300 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Paste your resume content here"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-purple-600">Your Question</label>
            <input
              id="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)} // Submit on Enter
              className="w-full p-4 mt-2 border-2 border-purple-300 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Ask a question about the resume"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl text-purple-600">Response:</h2>
            <p className="text-lg text-purple-700">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
