import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Submit.css';

const Submit = () => {
  const location = useLocation();
  const [res, setRes] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prediction = params.get('prediction');
    if (prediction) {
      setRes(JSON.parse(decodeURIComponent(prediction)));
    }
  }, [location]);

  useEffect(() => {
    if (res && res.Prediction === 'malicious') {
      window.alert(
        "Oops! There seems to be something wrong with your network!\nConsider disconnecting it!"
      );
    }
  }, [res]);

  const toggleDetails = async () => {
    if (res && res.attack !== 'Zero-day' && !res.info) {
      try {
        const response = await fetch('/moreinfo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ attack: res.attack }),
        });
        const data = await response.json();
        setRes((prevRes) => ({ ...prevRes, info: data.info }));
      } catch (error) {
        console.error('Error fetching additional information:', error);
      }
    }
    setShowDetails((prevState) => !prevState);
  };

  return (
    <div className="submit-container">
      {res && (
        <div className="result">
          {res.Prediction === 'malicious' ? (
            <>
              <p className="result-text">Your network is harmful!</p>
              {res.attack !== 'Zero-day' && (
                <>
                  <p className="result-attack">{res.attack}</p>
                  <button className="more-info-button" onClick={toggleDetails}>
                    More Info
                  </button>
                  {showDetails && (
                    <div className="details">
                      <p className="details-title">Additional Details:</p>
                      <p className="details-text">{res.info}</p>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <p className="result-text">Hurray!! Your Network is safe! Have a nice day</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Submit;
