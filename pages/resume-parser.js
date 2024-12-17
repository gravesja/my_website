import { useState } from "react";
import Head from "next/head";

export default function FeeBot() {
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfText, setPdfText] = useState("");

  const processPDF = async (file) => {
    const pdfjsLib = await import("pdfjs-dist/build/pdf");
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = async (e) => {
        try {
          const typedArray = new Uint8Array(e.target.result);
          const pdfDoc = await pdfjsLib.getDocument(typedArray).promise;
          let text = "";
          for (let i = 1; i <= pdfDoc.numPages; i++) {
            const page = await pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item) => item.str).join(" ");
          }
          setPdfText(text);
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const sendMessage = async () => {
    if (!userMessage) return;

    const newMessages = [...chatMessages, { type: "user", text: userMessage }];
    setChatMessages(newMessages);
    setUserMessage("");

    try {
      setLoading(true);
      const response = await fetch("/api/resumeparser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage,
          context: pdfText || "Default Fee Background Info",
        }),
      });

      const data = await response.json();
      const feeResponse = data.message || "I had trouble processing that.";
      setChatMessages((prev) => [...prev, { type: "fee", text: feeResponse }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setChatMessages((prev) => [
        ...prev,
        { type: "fee", text: "Something went wrong. Try again!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Fee Document Roleplay Bot</title>
        <link
          rel="icon"
          href="https://www.botacademy.com/wp-content/uploads/2017/04/Bot-Academy-logo-head.png"
          type="image/jpeg"
        />
      </Head>

      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Fee Document Roleplay Bot</h1>
          <a
            href="/"
            className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            Back to Info
          </a>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Interact with Fee
          </h2>
          <input
            type="file"
            accept="application/pdf"
            className="mb-4 w-full p-3 border rounded"
            onChange={(e) => processPDF(e.target.files[0])}
          />
          <div className="chat-box border p-4 h-80 overflow-y-auto bg-gray-100">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.type === "user" ? "text-right text-gray-800" : "text-left text-blue-600"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-blue-500 text-center">Processing...</div>
            )}
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full p-3 border rounded"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="w-full mt-2 p-3 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
