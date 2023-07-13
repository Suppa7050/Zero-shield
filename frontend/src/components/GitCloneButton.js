import React, { useState } from 'react';
import axios from 'axios';

const GitCloneButton = () => {
  const [loading, setLoading] = useState(false);

  const handleGitClone = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/clone-repo');
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error('Error cloning repository:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleGitClone} disabled={loading}>
        {loading ? 'Cloning...' : 'Clone Git Repo'}
      </button>
    </div>
  );
};

export default GitCloneButton;
