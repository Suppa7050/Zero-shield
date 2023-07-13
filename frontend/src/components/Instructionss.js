import React from 'react';
import './instructions.css';

const Instructionss = () => {
  return (
    <div className="cicflowmeter-instructions">
      <h2>Instructions for Using cicflowmeter</h2>
      <p>
        Follow the steps below to get started:
      </p>
      <ol>
        <li>Install cicflowmeter using pip:</li>
        <pre><code>pip install cicflowmeter</code></pre>
        or
        <pre><code>git clone <a href='https://github.com/Suppa7050/cicflowmeter'>https://github.com/Suppa7050/cicflowmeter</a><br />
          cd cicflowmeter<br />
          python setup.py install</code></pre>
        <li>Get Your logs:</li>
        <pre><code>cicflowmeter -i Wi-Fi -c flows.csv</code></pre>
        {/* <li>Create an instance of the Flow class:</li>
        <pre><code>flow = Flow()</code></pre>
        <li>Use the flow object to analyze network traffic:</li>
        <pre><code>result = flow.predict(your_data)</code></pre> */}
        <div className='llistt'>
          <ul>
            <li>After 2 minutes, stop the execution using ctrl+c</li>
            <li>You will get a file named flows.csv in the cicidsflowmeter folder</li>
            <li>Upload this file in the <a href='scan'>scan</a> page</li>
          </ul>
        </div>
      </ol>
      <p>For more details and advanced usage, refer to the official <a href="https://pypi.org/project/cicflowmeter/">cicflowmeter documentation</a>.</p>
    </div>
  );
};

export default Instructionss;
