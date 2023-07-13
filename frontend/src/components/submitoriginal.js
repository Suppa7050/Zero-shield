import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Submit = () => {
  const location = useLocation();
  const [res, setRes] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prediction = params.get('prediction');
    if (prediction) {
      setRes(JSON.parse(decodeURIComponent(prediction)));
    }
  }, [location]);

  return (
    <div>
      {res && (
        <div className='result'>
          {/* <p>Result: {res.Prediction}</p>
          <p>Non-malicious Samples: {res.nonmal}</p>
          <p>Malicious Samples: {res.mali}</p>
          <p>Type of the attack: {res.attack}</p>
          <p>More information: {res.info}</p> */}
          {res.Prediction === 'Malicious' && (
            <p>
              Oops! There seems to be something wrong with your network!<br /> Consider disconnecting it!
            </p>
          )}
          {res.Prediction !== 'Malicious' && (
            <p>
              Hurray!! Your Network is safe!<br /> Have a nice day
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Submit;
