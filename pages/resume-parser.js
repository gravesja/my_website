import { useState } from 'react';
import axios from 'axios';

export default function ResumeParser() {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState('');

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleParseResume = async () => {
    const formData = new FormData();
    formData.append('file', file);

    // You would send this file to an API for parsing (e.g., OpenAI's API)
    const response = await axios.post('/api/parse-resume', formData);
    setParsedData(response.data.summary);
  };

  return (
    <div>
      <h1>Upload Your Resume</h1>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleParseResume}>Parse Resume</button>
      {parsedData && <div>{parsedData}</div>}
    </div>
  );
}
