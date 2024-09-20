import { useState } from 'react';

const ResumeParser = () => {
  const [parsedData, setParsedData] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    // Use fetch() instead of axios
    const res = await fetch('/api/parse-resume', {
      method: 'POST',
      body: formData,
    });
    
    if (res.ok) {
      const data = await res.json();
      setParsedData(data);
    } else {
      console.error('Error parsing resume');
    }
  };

  return (
    <div>
      <h1>Resume Parser</h1>
      <input type="file" onChange={handleFileUpload} />
      {parsedData && <pre>{JSON.stringify(parsedData, null, 2)}</pre>}
    </div>
  );
};

export default ResumeParser;
