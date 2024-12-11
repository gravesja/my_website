import { useEffect, useState } from "react";

const ResumePage = () => {
  const [documentContent, setDocumentContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Inject the OpenWidget ChatBot.com script
    const script = document.createElement("script");
    script.innerHTML = `
      window.__ow = window.__ow || {};
      window.__ow.organizationId = "3bfb754c-b8f1-48e6-adaf-2f5eeea78d79";  //
      window.__ow.template_id = "f06407a9-6d79-4f53-8163-023a4f372d36";  
      window.__ow.integration_name = "manual_settings";
      window.__ow.product_name = "chatbot";   
      (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
    `;
    document.body.appendChild(script);
  }, []);

  // Process PDF file
  const processPDF = async (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async (e) => {
        const pdfjsLib = await import("pdfjs-dist");
        const typedArray = new Uint8Array(e.target.result);
        try {
          const pdf = await pdfjsLib.getDocument(typedArray).promise;
          let text = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item) => item.str).join(" ");
          }
          resolve(text);
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  // Handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsLoading(true);
      try {
        const content = await processPDF(file);
        setDocumentContent(content);
        setMessages((prev) => [...prev, { role: "system", content: "Resume uploaded successfully!" }]);
      } catch (error) {
        setMessages((prev) => [...prev, { role: "system", content: "Error processing the PDF." }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Chatbot response logic
  const handleChat = async (message) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, documentContent }),
    });

    const data = await response.json();

    if (data.response) {
      setMessages((prev) => [...prev, { role: "bot", content: data.response }]);
    } else {
      setMessages((prev) => [...prev, { role: "bot", content: "Sorry, I couldn't process your request." }]);
    }
  };

  return (
    <div className="resume-page">
      <h1>Resume Parser Chatbot</h1>

      {/* PDF Upload */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        className="file-input"
        disabled={isLoading}
      />

      {isLoading && <p>Processing your resume...</p>}

      {/* Chatbox */}
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask something..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleChat(e.target.value);
          }}
          disabled={isLoading}
        />
        <button onClick={() => handleChat(document.querySelector(".chat-input input").value)}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ResumePage;
