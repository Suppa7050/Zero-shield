import React from 'react';

const DownloadButton = () => {
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
    <div>
      <button onClick={handleDownload}>
        Download Files
      </button>
    </div>
  );
};

export default DownloadButton;
