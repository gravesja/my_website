import { useState } from "react";
import mammoth from "mammoth";

export default function ResumeParser() {
  const [documentContent, setDocumentContent] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      // Process PDF or Word file (convert to text)
      const text = await processDocument(file);
      setDocumentContent(text);
      setLoading(false);
    }
  };

  const processDocument = async (file) => {
    if (file.type === "application/pdf") {
      return await processPDF(file);
    } else if (file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      return await processWord(file);
    } else {
      alert("Invalid file format. Please upload a PDF or Word document.");
      return "";
    }
  };

  const processPDF = async (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async (e) => {
        const typedArray = new Uint8Array(e.target.result);
        const pdf = await window.pdfjsLib.getDocument(typedArray).promise;
        let text = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str).join(" ");
        }
        resolve(text);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const processWord = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async function (event) {
        try {
          const arrayBuffer = event.target.result;
          const result = await mammoth.extractRawText({ arrayBuffer });
          resolve(result.value); // The text extracted from the Word document
        } catch (err) {
          reject(err);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const handleSubmit = async () => {
    if (!userMessage.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, documentContent }),
      });
      const data = await res.json();
      setResponse(data.response || "Sorry, I couldn't process your request.");
    } catch (error) {
      setResponse("There was an error processing your request.");
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-700">Resume Parser</h2>
        <input type="file" onChange={handleFileUpload} accept=".pdf,.docx" className="mb-4 w-full p-3 border border-gray-300 rounded" />
        {loading && <div>Loading...</div>}
        <textarea
          className="w-full p-3 border border-gray-300 rounded mt-2"
          placeholder="Ask your question about the resume"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button onClick={handleSubmit} className="bg-green-500 text-white w-full py-3 rounded mt-4 hover:bg-green-600">
          Ask
        </button>
        {response && <div className="mt-4">{response}</div>}
      </div>
    </div>
  );
}
