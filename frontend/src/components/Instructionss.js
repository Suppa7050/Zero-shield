import React from 'react';
import './instructions.css';

const Instructionss = () => {
  const handleDownload = () => {
    const downloadFile = (fileUrl, fileName) => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      link.click();
    };

    downloadFile(process.env.PUBLIC_URL + '/zeroshield.exe', 'zeroshield.exe');
    downloadFile(process.env.PUBLIC_URL + '/npcap.exe', 'npcap.exe');
  };

  return (
    <div className="instructions-container">
      <p>Click this button to download the required files:</p>
      <button onClick={handleDownload}>Download Files</button>
      <p>Once downloaded, follow these steps:</p>
      <ol>
        <li>Install <strong>npcap.exe</strong> on your system.</li>
        <li>Run <strong>zeroshield.exe</strong> to generate a CSV file.</li>
        <li>Upload the generated CSV file on the <a href="/scan">scan</a> page.</li>
      </ol>
    </div>
  );
};

export default Instructionss;
