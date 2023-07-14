import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FileUploadForm.css';

function FileUpload({user}) {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('username', user.username);

    try {
      setIsLoading(true); // Set loading state to true

      const response = await axios.post('https://zero-backend.onrender.com/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        mode: 'no-cors'
      });
      setRes(response.data);
      console.log(response.data);
      navigate(`/submit?prediction=${encodeURIComponent(JSON.stringify(response.data))}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <span className="form-title">Upload your file</span>
          <p className="form-paragraph">File should be an .csv file</p>
          <label htmlFor="file-input" className="drop-container">
            <span className="drop-title">Drop files here</span>
            or
            <input type="file" accept=".csv" required id="file-input" onChange={handleChange} />
          </label>
          <button type="submit" className="btn btn-success">Upload</button>
          {isLoading && <div className="loading-icon">Loading...</div>} {/* Display loading icon if isLoading is true */}
        </form>
      </div>
    </div>
  );
}

export default FileUpload;
